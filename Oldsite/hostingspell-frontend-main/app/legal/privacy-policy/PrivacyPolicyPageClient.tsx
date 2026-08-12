import { BlogContent } from "@/components/blog/BlogContent"
import { BlogHeader } from "@/components/blog/BlogHeader"

const privacyContent = `
<h3>[1] Welcome to HostingSpell Privacy Policy.</h3>
<ul class="mt-3 pl-5 space-y-2">
    <li>[1.1] Hi there, we're HostingSpell, and welcome to our privacy policy. This policy sets out how we handle your personal information if you're a HostingSpell user or visitor to our Sites. It applies across HostingSpell website.s.</li>
    <li>
        <ul class="mt-3 pl-5 space-y-2">
            <li>[a] When we say 'we', 'us' or 'HostingSpell' it's because that's who we are and we own and run the Sites.</li>
            <li>[b] If we say 'policy' we're talking about this privacy policy. If we say 'user terms' we're talking about the rules for using each of the Sites. The rules vary by product and each product makes them separately available and seeks consent to them separately to this policy.</li>
        </ul>
    </li>
</ul>
<h3>[2] The type of personal information we collect</h3>
<ul class="mt-3 pl-5 space-y-1">
    <li>[2.1] We collect certain personal information about visitors and users of our Sites.</li>
    <li>[2.2] The most common types of information we collect include things like: names, usernames, member names, email addresses, IP addresses, other contact details, survey responses, blogs, photos, payment information such as payment agent details, transactional details, tax information, support queries, forum comments, content you direct us to make available on our Sites (such as item descriptions) and web analytics data. We will also collect personal information from job applications (such as your CV, the application form itself, cover letter, and interview notes).</li>
</ul>
<h3>[3] How we collect personal information.</h3>
<ul class="mt-3 pl-5 space-y-2">
    <li>[3.1] We collect personal information directly when you provide it to us, automatically as you navigate through the Sites, or through other people when you use services associated with the Sites.</li>
    <li>[3.2] We collect your personal information when you provide it to us when you complete membership registration and buy or provide items or services on our Sites, subscribe to a newsletter, or email list, submit feedback, enter a contest, fill out a survey, or send us a communication.</li>
</ul>
`

export default function PrivacyPolicyPageClient() {
    return (
        <>
            <main className="flex min-h-screen flex-col">
                <div className="container mx-auto px-4 mt-16 md:pt-8 md:py-24">
                    <BlogHeader
                        title="Privacy Policy"
                        excerpt="Learn how we collect, use, and protect your personal information."
                        coverImage="https://placehold.co/728x410/png?text=Privacy+Policy"
                        category="Legal"
                        publishedAt="29th November 2024 "
                        readingTime="1 min 53 sec"
                        isAIGenerated={false}
                    />

                    <div className="container mx-auto px-4">
                        <div className="max-w-[728px] mx-auto">
                            <article className="mb-16">
                                <BlogContent content={privacyContent} />
                            </article>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}
