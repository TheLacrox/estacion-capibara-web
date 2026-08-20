"use client";

import { useState } from "react";

interface FaqSectionProps {
  faqs: { question: string; answer: string }[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="my-12">
      <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">
        Preguntas Frecuentes
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="border border-grid-line rounded-sm overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-hull-panel hover:bg-hull-panel/80 transition-colors"
              aria-expanded={openIndex === i}
            >
              <span className="font-heading font-bold text-text-primary text-sm pr-4">
                {faq.question}
              </span>
              <span className="text-text-muted shrink-0 text-lg">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>
            {/* Always in the DOM so the answer text is server-rendered and
                readable by crawlers; visibility toggles via `hidden`. */}
            <div
              hidden={openIndex !== i}
              className="px-5 py-4 bg-space-void border-t border-grid-line"
            >
              <p className="text-text-muted font-mono text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
