import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
	{
		question: "Why & how we provides affordable web hosting at such a low price?",
		answer: "We have 7+ years of expertise in Web Hosting & IT Infrastructure industry, In our team most of us started as Blogger or Web Developers. We quickly learnt how things at back works and how can we setup one. Our vision is very simple and bold; We want to provide same or in fact better quality of Web Hosting Services to internet that GoDaddy, 1&1 & Endurance International Provides, but with low profit with greatly reduced prices. Our team day & night thrive to find most affordable and better providers that suites our Infrastructure and we comfortably managed to establish HostingSpell.com :)\n\nIn the process we assure to not degrade the services & technology used as well as not to use any cracked softwares. All our license & software used by us is verified by their respective providers and our customers can always ask us for the verification."
	},
	{
		question: "Is there any discount programs for customers?",
		answer: "Obviously, we appreciate our customers who buys services on frequent basis that can be anyone, individuals & companies can partner with us for furthermore great prices on bulk orders. You can always ask us for these programs via live chat, tickets & WhatsApp :)"
	},
	{
		question: "How can I get Refund for my service?",
		answer: "For refunds on applicable services you need to create a sales ticket from Client Area & mention the reason why you are using this policy to get refund. Our sales team will verify and give you full money back to you in 2-4 working days."
	},
	{
		question: "When services purchased will be activated?",
		answer: "Most of the services are automatically activated so it takes few seconds for activation after payment.\n\nContact us if you think it is taking more time."
	},
	{
		question: "Time to activate service after payment?",
		answer: "We usually activated all orders manually in 0 minute to 10 minutes and these tasks are carried by our sales team members. But sometimes in heavy load it can take 30 mins.\n\nIn services like VPS & Dedicated Servers timing can vary from availability of resources at our inventory while we quickly act to active service within few business hours :)"
	},
	{
		question: "Do you Support hosting of uncommon websites/apps/scripts?",
		answer: "We Support majority of websites/apps/scripts on our premises but we strictly suspend or disallow Proxy, Porn & Phising websites/apps/scripts under our P3 Policy. We are clean and well reputed web hosting providers and we do not afford to lose stack here at any cost."
	},
	{
		question: "What are Panels available in your service?",
		answer: "We provide cPanel® & DirectAdmin on customer's choice for Shared, Premium and Reseller Hosting. In VPS & Dedicated Servers we provide Virtualizor Management & IMPI respectively.\n\nTake note here that customers with VPS & Dedicated Servers can install all major or custom Linux Distros & Windows OS with any respectable Control Panel from there side."
	},
	{
		question: "Does Hosting Include a Domain Name?",
		answer: "We provide cPanel® Hosting, we do not include domain name from ourside by-default, you have to checkout domain name separately by selecting 1st option on configuration page"
	}
]

export function FAQ() {
	return (
		<section className="py-20" id="faq">
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<p className="text-primary font-bold mb-2">Questions?</p>
					<h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
				</div>

				<div className="max-w-6xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-none md:gap-6">
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
								<AccordionItem key={index} value={`item-${index + Math.ceil(faqs.length / 2)}`}>
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