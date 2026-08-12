import { BlogContent } from "@/components/blog/BlogContent";
import { BlogHeader } from "@/components/blog/BlogHeader";

const refundContent = `
<h4><strong>Refund Policy</strong></h4>

<ul class="mt-3 list-disc pl-5 space-y-1">
    <li><strong>7-Day Money-Back Guarantee:</strong> We offer a 7-day money-back guarantee on our hosting
        Services.&nbsp;

    </li>

    <li><strong>Non-Refundable:</strong> VPS, Dedicated Servers, Domain registrations, Licenses, SSL certificates, and certain third-party services are non-refundable. For further assistance, please get in touch with our billing team.</li>

    <li><strong>Refund Requests:</strong> To request a refund, you must contact our support team within 7 days of your initial purchase via ticket only to make a valid request.</li>

    <li><strong>Processing Time:</strong> If the Refund Request is valid, Refunds will be processed within 5-7 working days after approval.</li>

    <li><strong>Custom Orders and Migration Requests: </strong>No refunds will be issued for custom service orders or any orders where technical migration services were requested or performed. This includes any tool or manual effort by our team to move data, configure accounts, or perform account-level changes upon your request.</li>
</ul>

<h4><strong>6.4 Consequences of Non-Payment</strong></h4>

<ul class="mt-3 list-disc pl-5 space-y-1">
    <li><strong>Service Suspension:</strong> Failure to pay invoices by the due date may result in suspension of your Services with or without notice. HostingSpell LLP is not liable for any data loss, downtime, or inconvenience caused by suspension or delays in service reactivation.</li>

    <li><strong>Service Termination:</strong> Accounts overdue by more than 30 days may be terminated, and all associated data may be deleted with or without notice. Duration for data retention may vary based on the type of Service.
    </li>

    <li><strong>Reactivation Fees Clause:</strong></li>
</ul>

<p>In the event of service termination due to non-payment or breach of the Terms of Service, HostingSpell LLP may offer service reactivation under the following conditions:</p>

<ol class="mt-3 pl-5 space-y-1">
    <li>

        <strong>Eligibility and Data Availability:</strong>

        <ul class="mt-3 list-disc pl-5 space-y-1">
            <li>Reactivation is possible only if the service data is still available on our servers.</li>
            <li>HostingSpell LLP does not guarantee the availability of data after service termination.</li>
        </ul>
    </li>

    <li>

        <strong>Reactivation Fee and Payment Terms:</strong>

        <ul class="mt-3 list-disc pl-5 space-y-1">
            <li>A reactivation fee of <strong>₹250</strong> or <strong>30% of the total service cost</strong>, whichever is higher, will be charged to restore the terminated service.</li>

            <li>The reactivation fee must be paid in full before the restoration process begins.</li>

            <li>Customers will be notified of the applicable fee and payment instructions upon requesting reactivation.</li>
        </ul>

    </li>

    <li>
        <strong>Timeframe and Limitation:</strong>
        <ul class="mt-3 list-disc pl-5 space-y-1">

            <li>Reactivation requests must be submitted within the retention period specified in our data policy. Services terminated beyond the retention period may not be eligible for restoration.</li>

            <li>HostingSpell LLP is not liable for any data loss, downtime, or inconvenience caused by termination or delays in service reactivation. Payment reversal for dues renewals, cancellation or suspension due to terms violations, including third-party terms violations, is not allowed unless we approve it for not offering the service mentioned by us under the feasibility and best efforts of service and product provisions. We have the full right to fully seize or disqualify a user and their products and services, including payment towards all. Users can choose to discuss it to practise our rights if they want further clarification on our decision to fully seize the account.</li>
        </ul>

    </li>

</ol>

<p>By requesting reactivation, you acknowledge and agree to the terms outlined in this clause.</p>

`;

export default function RefundPolicyPageClient() {
    return (
        <main className="flex min-h-screen flex-col">
            <div className="container mx-auto px-4 mt-16 md:pt-8 md:py-24">
                <BlogHeader
                    title="Refund Policy"
                    excerpt="Learn about our refund policies and procedures."
                    coverImage="https://placehold.co/728x410/png?text=Refund+Policy"
                    category="Legal"
                    publishedAt="June 15, 2024"
                    readingTime="3 min 40 sec"
                    isAIGenerated={false}
                />

                <div className="container mx-auto px-4">
                    <div className="max-w-[728px] mx-auto">
                        <article className="mb-16">
                            <BlogContent content={refundContent} />
                        </article>
                    </div>
                </div>
            </div>
        </main>

    );
}
