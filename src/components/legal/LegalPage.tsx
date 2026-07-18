import { Section, SectionHeader } from "@/components/ui/Section";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type Props = {
  title: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({ title, updated, sections }: Props) {
  return (
    <>
      <Section variant="gradient" className="!py-16">
        <SectionHeader title={title} subtitle={updated} />
      </Section>
      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((section) => (
            <article key={section.title}>
              <h2 className="font-heading mb-3 text-xl font-bold text-navy">{section.title}</h2>
              <div className="space-y-3 text-navy/70">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}
