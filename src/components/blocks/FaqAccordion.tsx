import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items, faqs }: { items?: FaqItem[]; faqs?: FaqItem[] }) {
  const faqList = items || faqs || [];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl border border-border/80 bg-card/90 dark:bg-zinc-900/90 shadow-sm overflow-hidden backdrop-blur-sm divide-y divide-border/60">
      {faqList.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="px-5 sm:px-7 transition-colors hover:bg-muted/40 dark:hover:bg-zinc-800/40">
            <button
              type="button"
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between text-left font-bold text-base sm:text-lg text-foreground hover:text-primary transition-colors py-4 sm:py-5 cursor-pointer outline-none"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-4 h-4 text-muted-foreground transition-transform duration-200 shrink-0 ml-4 ${
                  isOpen ? "rotate-180 text-primary" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5 sm:pb-6 animate-in fade-in-50 duration-200">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
