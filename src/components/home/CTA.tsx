import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

export async function CTA() {
  const t = await getTranslations("cta");

  return (
    <section className="relative overflow-hidden bg-navy py-20 md:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-emerald/20 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-white/60">{t("subtitle")}</p>
        <div className="mt-8">
          <Button href={SITE_CONFIG.whatsapp} size="lg">
            {t("button")}
          </Button>
        </div>
      </div>
    </section>
  );
}
