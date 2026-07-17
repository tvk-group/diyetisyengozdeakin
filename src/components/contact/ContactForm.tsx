"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-3xl p-8 text-center">
        <p className="text-lg font-medium text-emerald">{t("formSuccess")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8">
      <div className="space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-navy/70">{t("name")}</label>
          <input
            type="text"
            required
            className="w-full rounded-xl border border-navy/10 px-4 py-3 outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-navy/70">{t("email")}</label>
          <input
            type="email"
            required
            className="w-full rounded-xl border border-navy/10 px-4 py-3 outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-navy/70">{t("phone")}</label>
          <input
            type="tel"
            className="w-full rounded-xl border border-navy/10 px-4 py-3 outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          />
        </div>
        <div>
          <label className="mb-1 block text-sm font-medium text-navy/70">{t("message")}</label>
          <textarea
            rows={4}
            required
            className="w-full rounded-xl border border-navy/10 px-4 py-3 outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          />
        </div>
        <Button type="submit" className="w-full">
          {t("send")}
        </Button>
      </div>
    </form>
  );
}
