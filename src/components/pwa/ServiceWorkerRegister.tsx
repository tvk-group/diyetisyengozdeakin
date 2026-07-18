"use client";

import { useEffect } from "react";
import { allowsPreferences, CONSENT_CHANGE_EVENT } from "@/lib/consent";

export function ServiceWorkerRegister() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const register = async () => {
      if (!allowsPreferences()) return;
      try {
        await navigator.serviceWorker.register("/sw.js", { scope: "/" });
      } catch {
        // Silent fail — PWA enhancements are optional
      }
    };

    const maybeRegister = () => {
      if (allowsPreferences()) register();
    };

    maybeRegister();
    window.addEventListener(CONSENT_CHANGE_EVENT, maybeRegister);
    window.addEventListener("load", maybeRegister, { once: true });

    return () => {
      window.removeEventListener(CONSENT_CHANGE_EVENT, maybeRegister);
    };
  }, []);

  return null;
}
