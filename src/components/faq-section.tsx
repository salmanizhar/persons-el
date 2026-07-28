import type { FaqContent } from "@/lib/faq";

type FaqSectionProps = {
  content: FaqContent;
};

export function FaqSection({ content }: FaqSectionProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <section className="section faq-section" aria-labelledby="faq-title">
      <div className="shell faq-grid">
        <div>
          <p className="eyebrow">{content.eyebrow ?? "Vanliga frågor"}</p>
          <h2 id="faq-title">{content.title}</h2>
          <p>{content.intro}</p>
        </div>
        <div className="faq-list">
          {content.items.map(({ question, answer }, index) => (
            <details key={question} open={index === 0}>
              <summary>{question}</summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
}
