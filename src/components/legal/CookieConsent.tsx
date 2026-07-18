"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Cookie, Settings2, ShieldCheck } from "lucide-react";
import { Link } from "@/i18n/navigation";
import {
  CONSENT_CHANGE_EVENT,
  DEFAULT_CONSENT,
  hasConsentChoice,
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/consent";
import { cn } from "@/lib/utils";

type DraftConsent = {
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

export function CookieConsent() {
  const t = useTranslations("legal.consent");
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [draft, setDraft] = useState<DraftConsent>({
    preferences: DEFAULT_CONSENT.preferences,
    analytics: DEFAULT_CONSENT.analytics,
    marketing: DEFAULT_CONSENT.marketing,
  });

  useEffect(() => {
    const sync = () => {
      const existing = readConsent();
      setVisible(!hasConsentChoice());
      if (existing) {
        setDraft({
          preferences: existing.preferences,
          analytics: existing.analytics,
          marketing: existing.marketing,
        });
      }
    };

    sync();
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
  }, []);

  const persist = (next: DraftConsent) => {
    writeConsent(next);
    setVisible(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    persist({ preferences: true, analytics: true, marketing: true });
  };

  const essentialOnly = () => {
    persist({ preferences: false, analytics: false, marketing: false });
  };

  if (!visible) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-0 z-[70] px-4",
        "bottom-[calc(4.75rem+env(safe-area-inset-bottom))] md:bottom-4"
      )}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-navy/10 bg-white p-5 shadow-2xl shadow-navy/15 md:p-6">
        <div className="mb-4 flex items-start gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-memorial-red/10 text-memorial-red">
            <Cookie className="h-5 w-5" />
          </div>
          <div>
            <h2 id="cookie-consent-title" className="font-heading text-lg font-bold text-navy">
              {t("title")}
            </h2>
            <p id="cookie-consent-description" className="mt-1 text-sm text-navy/70">
              {t("description")}{" "}
              <Link href="/gizlilik-politikasi" className="font-medium text-memorial-red hover:underline">
                {t("privacyLink")}
              </Link>{" "}
              {t("and")}{" "}
              <Link href="/cerez-politikasi" className="font-medium text-memorial-red hover:underline">
                {t("cookieLink")}
              </Link>
              .
            </p>
          </div>
        </div>

        {showSettings && (
          <div className="mb-4 space-y-3 rounded-xl bg-light-gray p-4">
            <ConsentToggle
              title={t("necessary")}
              description={t("necessaryDesc")}
              checked
              disabled
            />
            <ConsentToggle
              title={t("preferences")}
              description={t("preferencesDesc")}
              checked={draft.preferences}
              onChange={(checked) => setDraft((prev) => ({ ...prev, preferences: checked }))}
            />
            <ConsentToggle
              title={t("analytics")}
              description={t("analyticsDesc")}
              checked={draft.analytics}
              onChange={(checked) => setDraft((prev) => ({ ...prev, analytics: checked }))}
            />
            <ConsentToggle
              title={t("marketing")}
              description={t("marketingDesc")}
              checked={draft.marketing}
              onChange={(checked) => setDraft((prev) => ({ ...prev, marketing: checked }))}
            />
          </div>
        )}

        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <button
            type="button"
            onClick={acceptAll}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-memorial-red px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-memorial-red/90"
          >
            <ShieldCheck className="h-4 w-4" />
            {t("acceptAll")}
          </button>
          <button
            type="button"
            onClick={essentialOnly}
            className="inline-flex flex-1 items-center justify-center rounded-xl border border-navy/15 px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
          >
            {t("essentialOnly")}
          </button>
          <button
            type="button"
            onClick={() => {
              if (showSettings) {
                persist(draft);
              } else {
                setShowSettings(true);
              }
            }}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-navy/15 px-4 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy/5"
          >
            <Settings2 className="h-4 w-4" />
            {showSettings ? t("save") : t("customize")}
          </button>
        </div>
      </div>
    </div>
  );
}

function ConsentToggle({
  title,
  description,
  checked,
  disabled,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}) {
  return (
    <label className={cn("flex items-start justify-between gap-4", disabled ? "opacity-70" : "")}>
      <span>
        <span className="block text-sm font-semibold text-navy">{title}</span>
        <span className="mt-0.5 block text-xs text-navy/60">{description}</span>
      </span>
      <input
        type="checkbox"
        className="mt-1 h-4 w-4 accent-memorial-red"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
      />
    </label>
  );
}

export function useConsentState(): ConsentState | null {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    const sync = () => setConsent(readConsent());
    sync();
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
  }, []);

  return consent;
}
