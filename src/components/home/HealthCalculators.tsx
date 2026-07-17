"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cn } from "@/lib/utils";

type CalcId = "bmi" | "water" | "calories" | "protein" | "bmr" | "bodyFat" | "pregnancy";

const CALC_IDS: CalcId[] = ["bmi", "water", "calories", "protein", "bmr", "bodyFat", "pregnancy"];

export function HealthCalculators() {
  const t = useTranslations("calculators");
  const [active, setActive] = useState<CalcId>("bmi");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female">("female");
  const [activity, setActivity] = useState<"sedentary" | "moderate" | "active">("moderate");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [weeks, setWeeks] = useState("");
  const [preWeight, setPreWeight] = useState("");
  const [result, setResult] = useState<string | null>(null);
  const [detail, setDetail] = useState<string | null>(null);

  const needsHeight = ["bmi", "bmr", "calories", "bodyFat"].includes(active);
  const needsWeight = ["bmi", "water", "protein", "bmr", "calories", "bodyFat"].includes(active);
  const needsAge = ["bmr", "calories", "bodyFat"].includes(active);

  const reset = () => {
    setResult(null);
    setDetail(null);
  };

  const calculate = () => {
    reset();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    const a = parseFloat(age);

    switch (active) {
      case "bmi": {
        if (!h || !w) return;
        const bmi = w / (h * h);
        let cat = t("normal");
        if (bmi < 18.5) cat = t("underweight");
        else if (bmi >= 25 && bmi < 30) cat = t("overweight");
        else if (bmi >= 30) cat = t("obese");
        setResult(bmi.toFixed(1));
        setDetail(cat);
        break;
      }
      case "water": {
        if (!w) return;
        setResult(`${(w * 0.033).toFixed(1)} L`);
        setDetail(t("waterPerDay"));
        break;
      }
      case "bmr": {
        if (!h || !w || !a) return;
        const bmr =
          gender === "male"
            ? 10 * w + 6.25 * parseFloat(height) - 5 * a + 5
            : 10 * w + 6.25 * parseFloat(height) - 5 * a - 161;
        setResult(`${Math.round(bmr)} ${t("kcalUnit")}`);
        setDetail(t("bmrDesc"));
        break;
      }
      case "calories": {
        if (!h || !w || !a) return;
        const bmr =
          gender === "male"
            ? 10 * w + 6.25 * parseFloat(height) - 5 * a + 5
            : 10 * w + 6.25 * parseFloat(height) - 5 * a - 161;
        const mult = { sedentary: 1.2, moderate: 1.55, active: 1.725 }[activity];
        setResult(`${Math.round(bmr * mult)} ${t("kcalUnit")}`);
        setDetail(t("caloriesDesc"));
        break;
      }
      case "protein": {
        if (!w) return;
        setResult(`${Math.round(w * 1.2)} g`);
        setDetail(t("proteinDesc"));
        break;
      }
      case "bodyFat": {
        if (!parseFloat(height) || !w || !parseFloat(waist) || !parseFloat(neck) || !a) return;
        if (gender === "female") {
          setResult(t("bodyFatFemaleNote"));
          setDetail(t("bodyFatDesc"));
        } else {
          const bf =
            495 /
              (1.0324 -
                0.19077 * Math.log10(parseFloat(waist) - parseFloat(neck)) +
                0.15456 * Math.log10(parseFloat(height))) -
            450;
          setResult(`${bf.toFixed(1)}%`);
          setDetail(t("bodyFatDesc"));
        }
        break;
      }
      case "pregnancy": {
        const week = parseFloat(weeks);
        const pw = parseFloat(preWeight);
        if (!week || !pw) return;
        const gain = week <= 13 ? 1 : week <= 26 ? 5 : week <= 40 ? 10 : 12;
        setResult(`${(pw + gain).toFixed(1)} kg`);
        setDetail(t("pregnancyDesc"));
        break;
      }
    }
  };

  const inputClass =
    "w-full rounded-xl border border-navy/10 px-4 py-3 text-navy outline-none focus:border-emerald focus:ring-2 focus:ring-emerald/20";

  return (
    <Section id="hesaplayicilar">
      <SectionHeader badge={t("sectionTitle")} title={t("title")} />
      <div className="mx-auto max-w-4xl">
        <div className="mb-6 flex flex-wrap gap-2">
          {CALC_IDS.map((id) => (
            <button
              key={id}
              onClick={() => {
                setActive(id);
                reset();
              }}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                active === id
                  ? "bg-emerald text-white shadow-lg shadow-emerald/20"
                  : "bg-white text-navy/70 hover:bg-navy/5"
              )}
            >
              {t(id)}
            </button>
          ))}
        </div>

        <div className="glass-card rounded-3xl p-8">
          <h3 className="font-heading mb-2 text-xl font-semibold text-navy">{t(active)}</h3>
          <p className="mb-6 text-sm text-navy/60">{t(`${active}Desc`)}</p>

          <div className="grid gap-4 sm:grid-cols-2">
            {needsHeight && (
              <div>
                <label className="mb-1 block text-sm font-medium text-navy/70">{t("height")}</label>
                <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} className={inputClass} />
              </div>
            )}
            {needsWeight && (
              <div>
                <label className="mb-1 block text-sm font-medium text-navy/70">{t("weight")}</label>
                <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} className={inputClass} />
              </div>
            )}
            {needsAge && (
              <>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy/70">{t("age")}</label>
                  <input type="number" value={age} onChange={(e) => setAge(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy/70">{t("gender")}</label>
                  <select value={gender} onChange={(e) => setGender(e.target.value as "male" | "female")} className={inputClass}>
                    <option value="female">{t("female")}</option>
                    <option value="male">{t("male")}</option>
                  </select>
                </div>
              </>
            )}
            {active === "calories" && (
              <div className="sm:col-span-2">
                <label className="mb-1 block text-sm font-medium text-navy/70">{t("activity")}</label>
                <select value={activity} onChange={(e) => setActivity(e.target.value as typeof activity)} className={inputClass}>
                  <option value="sedentary">{t("sedentary")}</option>
                  <option value="moderate">{t("moderate")}</option>
                  <option value="active">{t("active")}</option>
                </select>
              </div>
            )}
            {active === "bodyFat" && (
              <>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy/70">{t("waist")}</label>
                  <input type="number" value={waist} onChange={(e) => setWaist(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy/70">{t("neck")}</label>
                  <input type="number" value={neck} onChange={(e) => setNeck(e.target.value)} className={inputClass} />
                </div>
              </>
            )}
            {active === "pregnancy" && (
              <>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy/70">{t("weeksPregnant")}</label>
                  <input type="number" value={weeks} onChange={(e) => setWeeks(e.target.value)} className={inputClass} />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-navy/70">{t("prePregnancyWeight")}</label>
                  <input type="number" value={preWeight} onChange={(e) => setPreWeight(e.target.value)} className={inputClass} />
                </div>
              </>
            )}
          </div>

          <button
            onClick={calculate}
            className="mt-6 w-full rounded-full bg-emerald py-3 font-medium text-white transition-colors hover:bg-emerald/90"
          >
            {t("calculate")}
          </button>

          {result && (
            <div className="mt-6 rounded-2xl bg-emerald/10 p-6 text-center">
              <p className="text-sm text-navy/60">{t("result")}</p>
              <p className="font-heading text-4xl font-bold text-emerald">{result}</p>
              {detail && <p className="mt-1 text-sm text-navy/70">{detail}</p>}
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
