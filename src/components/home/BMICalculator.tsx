"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";

export function BMICalculator() {
  const t = useTranslations("calculators");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [result, setResult] = useState<{ bmi: number; category: string } | null>(null);

  const calculate = () => {
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w) return;
    const bmi = w / (h * h);
    let category = t("normal");
    if (bmi < 18.5) category = t("underweight");
    else if (bmi >= 25 && bmi < 30) category = t("overweight");
    else if (bmi >= 30) category = t("obese");
    setResult({ bmi: Math.round(bmi * 10) / 10, category });
  };

  return (
    <Section id="hesaplayicilar">
      <SectionHeader badge={t("sectionTitle")} title={t("title")} />
      <div className="mx-auto max-w-lg">
        <div className="glass-card rounded-3xl p-8">
          <h3 className="font-heading mb-6 text-xl font-semibold text-navy">{t("bmi")}</h3>
          <p className="mb-6 text-sm text-navy/60">{t("bmiDesc")}</p>
          <div className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-medium text-navy/70">{t("height")}</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="w-full rounded-xl border border-navy/10 px-4 py-3 text-navy outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                placeholder="170"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-navy/70">{t("weight")}</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full rounded-xl border border-navy/10 px-4 py-3 text-navy outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20"
                placeholder="70"
              />
            </div>
            <button
              onClick={calculate}
              className="w-full rounded-full bg-emerald py-3 font-medium text-white transition-colors hover:bg-emerald/90"
            >
              {t("calculate")}
            </button>
            {result && (
              <div className="mt-4 rounded-2xl bg-emerald/10 p-6 text-center">
                <p className="text-sm text-navy/60">{t("result")}</p>
                <p className="font-heading text-4xl font-bold text-emerald">{result.bmi}</p>
                <p className="mt-1 font-medium text-navy">{result.category}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
