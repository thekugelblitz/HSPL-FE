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

type FAQProps = {
	faqs: FAQItem[]
	introText?: string // optional SEO-friendly intro paragraph
}

export function FAQ({ faqs, introText }: FAQProps) {
	return (
		<section className="py-20 bg-background dark:bg-background" id="faq">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12 max-w-3xl mx-auto">
					<p className="text-primary font-bold mb-2">Questions?</p>
					<h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>

					{introText ? (
						<p className="text-muted-foreground text-base">{introText}</p>
					) : (
						<p className="text-muted-foreground text-base">
							Find answers to the most common questions about HostingSpell's platform,
							our web hosting features, and helpful tips to get the most out of your hosting experience.
						</p>
					)}
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
								<AccordionItem
									key={index + Math.ceil(faqs.length / 2)}
									value={`item-${index}`}
								>
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
