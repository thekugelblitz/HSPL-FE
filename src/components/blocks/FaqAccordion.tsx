import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items, faqs }: { items?: FaqItem[]; faqs?: FaqItem[] }) {
  const faqList = items || faqs || [];
  return (
    <div className="w-full rounded-2xl sm:rounded-3xl border border-border/80 bg-card/90 dark:bg-zinc-900/90 shadow-sm overflow-hidden backdrop-blur-sm">
      <Accordion type="single" collapsible className="w-full text-left divide-y divide-border/60">
        {faqList.map((item, i) => (
          <AccordionItem 
            key={i} 
            value={`item-${i}`}
            className="border-b-0 px-5 sm:px-7 transition-colors hover:bg-muted/40 dark:hover:bg-zinc-800/40"
          >
            <AccordionTrigger className="text-left font-bold text-base sm:text-lg text-foreground hover:text-primary transition-colors py-4 sm:py-5 hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm sm:text-base leading-relaxed pb-5 sm:pb-6">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

