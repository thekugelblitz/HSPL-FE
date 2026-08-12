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
		<div className="py-12 w-full" id="faq">
			<div className="text-center mb-10 max-w-3xl mx-auto">
				<p className="text-primary font-bold mb-2 text-sm uppercase tracking-wider">Questions?</p>
				<h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>

				{introText ? (
					<p className="text-muted-foreground text-sm">{introText}</p>
				) : (
					<p className="text-muted-foreground text-sm">
						Find answers to the most common questions about HostingSpell's platform,
						our web hosting features, and helpful tips to get the most out of your hosting experience.
					</p>
				)}
			</div>

			<div className="w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
					<Accordion type="single" collapsible className="w-full">
						{faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq, index) => (
							<AccordionItem key={index} value={`item-${index}`} className="border-border">
								<AccordionTrigger className="font-bold text-left hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
								<AccordionContent className="whitespace-pre-line text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
					<Accordion type="single" collapsible className="w-full">
						{faqs.slice(Math.ceil(faqs.length / 2)).map((faq, index) => (
							<AccordionItem
								key={index + Math.ceil(faqs.length / 2)}
								value={`item-${index}`}
                                className="border-border"
							>
								<AccordionTrigger className="font-bold text-left hover:text-primary transition-colors">{faq.question}</AccordionTrigger>
								<AccordionContent className="whitespace-pre-line text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</div>
	)
}
