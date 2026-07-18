export const CONSENT_STORAGE_KEY = "gozde-cookie-consent-v1";
export const CONSENT_VERSION = 1;
export const CONSENT_CHANGE_EVENT = "gozde-consent-change";

export type ConsentCategories = {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
};

export type ConsentState = ConsentCategories & {
  version: number;
  timestamp: string;
};

export const DEFAULT_CONSENT: ConsentCategories = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false,
};

export function readConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentState;
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function writeConsent(categories: Omit<ConsentCategories, "necessary">) {
  const state: ConsentState = {
    version: CONSENT_VERSION,
    necessary: true,
    preferences: categories.preferences,
    analytics: categories.analytics,
    marketing: categories.marketing,
    timestamp: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: state }));
  return state;
}

export function hasConsentChoice(): boolean {
  return readConsent() !== null;
}

export function allowsPreferences(): boolean {
  const consent = readConsent();
  return consent?.preferences ?? false;
}

export function allowsAnalytics(): boolean {
  const consent = readConsent();
  return consent?.analytics ?? false;
}

export function allowsMarketing(): boolean {
  const consent = readConsent();
  return consent?.marketing ?? false;
}
