import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type FAQItem = {
    question: string
    answer: string
}

export function FAQ({ faqs }: { faqs: FAQItem[] }) {
    return (
        <section className="py-20 bg-background dark:bg-background" id="faq">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="text-primary font-bold mb-2">Questions?</p>
                    <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                </div>

                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`}>
                                    <AccordionTrigger className="font-bold">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="whitespace-pre-line">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
                                <AccordionItem key={index + Math.ceil(faqs.length / 2)} value={`item-${index}`}>
                                    <AccordionTrigger className="font-bold">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="whitespace-pre-line">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
