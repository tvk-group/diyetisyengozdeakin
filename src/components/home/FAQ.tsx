"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ThemedCard } from "@/components/ui/ThemedCard";
import { getJourneyTheme, type JourneyStepKey } from "@/lib/card-themes";
import { cn } from "@/lib/utils";

const FAQ_THEMES: JourneyStepKey[] = ["step1", "step2", "step3", "step4", "step5"];

export function FAQ() {
  const t = useTranslations("faq");
  const [search, setSearch] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t("q1"), a: t("a1") },
    { q: t("q2"), a: t("a2") },
    { q: t("q3"), a: t("a3") },
    { q: t("q4"), a: t("a4") },
    { q: t("q5"), a: t("a5") },
  ];

  const filtered = faqs.filter(
    (f) =>
      f.q.toLowerCase().includes(search.toLowerCase()) ||
      f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Section variant="light" id="sss">
      <SectionHeader badge={t("sectionTitle")} title={t("title")} />
      <div className="mx-auto max-w-3xl">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-navy/30" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("search")}
            className="w-full rounded-2xl border border-navy/10 bg-white py-4 pl-12 pr-4 text-navy outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20"
          />
        </div>
        <div className="space-y-3">
          {filtered.map((faq, i) => {
            const theme = getJourneyTheme(FAQ_THEMES[i % FAQ_THEMES.length]);
            return (
              <ThemedCard key={faq.q} theme={theme} showDecor={false} className="overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between p-6 text-left"
                >
                  <span className="font-heading pr-4 font-semibold text-navy">{faq.q}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 shrink-0 text-navy/40 transition-transform duration-300",
                      openIndex === i && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === i ? "max-h-96" : "max-h-0"
                  )}
                >
                  <p className="px-6 pb-6 text-navy/60">{faq.a}</p>
                </div>
              </ThemedCard>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
