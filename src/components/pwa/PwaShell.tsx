"use client";

import { InstallPrompt } from "./InstallPrompt";
import { MobileTabBar } from "./MobileTabBar";
import { ServiceWorkerRegister } from "./ServiceWorkerRegister";

export function PwaShell() {
  return (
    <>
      <ServiceWorkerRegister />
      <InstallPrompt />
      <MobileTabBar />
    </>
  );
}
