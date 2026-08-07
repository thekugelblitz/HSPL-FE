const fs = require('fs');
const path = require('path');

const pages = [
  { name: 'about', title: 'About Us', desc: 'Learn more about HostingSpell and our mission to provide the best hosting.' },
  { name: 'contact', title: 'Contact Us', desc: 'Get in touch with our support and sales teams.' },
  { name: 'blog', title: 'Our Blog', desc: 'Read the latest news, tutorials, and announcements.' },
  { name: 'affiliates', title: 'Affiliate Program', desc: 'Join our affiliate program and earn commissions for referring customers.' },
  { name: 'knowledgebase', title: 'Knowledgebase', desc: 'Find answers to common questions and technical tutorials.' },
  { name: 'network-status', title: 'Network Status', desc: 'Check the real-time status of our servers and infrastructure.' },
  { name: 'terms', title: 'Terms of Service', desc: 'Read our terms of service agreement.' },
  { name: 'privacy', title: 'Privacy Policy', desc: 'Learn how we collect, use, and protect your data.' },
  { name: 'refund', title: 'Refund Policy', desc: 'Review our 30-day money-back guarantee and refund policies.' },
  { name: 'acceptable-use', title: 'Acceptable Use Policy', desc: 'Guidelines for acceptable use of our hosting services.' }
];

pages.forEach(p => {
  const content = `---
import SimpleLayout from '../layouts/SimpleLayout.astro';
---

<SimpleLayout 
  title="${p.title} | HostingSpell" 
  heading="${p.title}" 
  description="${p.desc}"
>
  <p>This page is currently under construction. Please check back later for full details regarding our ${p.title}.</p>
  <p>If you need immediate assistance, please <a href="/contact" class="text-primary hover:underline">contact our support team</a>.</p>
</SimpleLayout>
`;
  fs.writeFileSync(path.join(__dirname, 'src/pages', `${p.name}.astro`), content);
});

console.log('Successfully scaffolded 10 pages.');
