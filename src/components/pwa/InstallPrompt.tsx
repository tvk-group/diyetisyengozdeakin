"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Download, X } from "lucide-react";
import { cn } from "@/lib/utils";

const DISMISS_KEY = "gozde-pwa-install-dismissed";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

function getStandalone() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    ("standalone" in navigator && (navigator as Navigator & { standalone?: boolean }).standalone === true)
  );
}

export function InstallPrompt() {
  const t = useTranslations("pwa");
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [visible, setVisible] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    const init = () => {
      const standalone = getStandalone();
      setIsStandalone(standalone);

      const dismissed = localStorage.getItem(DISMISS_KEY);
      const ios = /iphone|ipad|ipod/i.test(navigator.userAgent);
      setIsIos(ios);

      if (standalone || dismissed) return;

      if (ios) {
        setTimeout(() => setVisible(true), 4000);
      }
    };

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
      setTimeout(() => setVisible(true), 2500);
    };

    const timer = window.setTimeout(init, 0);
    window.addEventListener("beforeinstallprompt", onBeforeInstall);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
    };
  }, []);

  const dismiss = () => {
    localStorage.setItem(DISMISS_KEY, "1");
    setVisible(false);
    setDeferred(null);
  };

  const install = async () => {
    if (!deferred) return;
    await deferred.prompt();
    await deferred.userChoice;
    dismiss();
  };

  if (!visible || isStandalone) return null;

  return (
    <div
      className={cn(
        "fixed inset-x-4 z-[60] rounded-2xl border border-navy/10 bg-white p-4 shadow-2xl shadow-navy/10",
        "bottom-[calc(5.5rem+env(safe-area-inset-bottom))] md:bottom-6 md:left-auto md:right-6 md:max-w-sm"
      )}
      role="dialog"
      aria-label={t("installTitle")}
    >
      <button
        onClick={dismiss}
        className="absolute right-3 top-3 rounded-full p-1 text-navy/40 hover:bg-navy/5 hover:text-navy"
        aria-label={t("dismiss")}
      >
        <X className="h-4 w-4" />
      </button>

      <div className="flex gap-3 pr-6">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-memorial-red text-sm font-bold text-white">
          GA
        </div>
        <div>
          <p className="font-heading font-semibold text-navy">{t("installTitle")}</p>
          <p className="mt-1 text-sm text-navy/60">
            {isIos && !deferred ? t("iosHint") : t("installDesc")}
          </p>
        </div>
      </div>

      {deferred && (
        <button
          onClick={install}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-emerald py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald/90"
        >
          <Download className="h-4 w-4" />
          {t("installButton")}
        </button>
      )}
    </div>
  );
}
