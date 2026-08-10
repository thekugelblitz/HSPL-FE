import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PRICING_PLANS = [
  {
    name: 'Autonomous AI Builder',
    badge: 'Self-Serve AI',
    priceMonthly: 19,
    priceYearly: 15,
    description: 'Instant prompt-to-site builder with unlimited conversational chat edits & high-speed NVMe cloud hosting included.',
    features: [
      'Unlimited AI Chat Revisions & Edits',
      'Instant Prompt-to-Site Generation (30s)',
      'Ultra-Fast NVMe Cloud Hosting Included',
      'Free SSL Certificate & Custom Domain Support',
      'AI Copywriter & SEO Meta Generator',
      'Responsive Mobile & Tablet Viewports',
      'JetBackup 5 Daily Automated Backups',
      'cPanel Control Panel & File Access'
    ],
    popular: false,
    ctaText: 'Start Autonomous Builder',
    color: 'border-border'
  },
  {
    name: 'AI + Expert Co-Creation',
    badge: '🔥 Most Popular',
    priceMonthly: 299,
    priceYearly: 249,
    isOneTime: true,
    description: 'The best of both worlds: Instant AI generation refined & audited by HostingSpell senior web developers within 24 hours.',
    features: [
      'Everything in Autonomous AI Builder',
      'Dedicated Senior Web Developer Review',
      'Custom Branding, Color Tokens & Logo Polish',
      'Professional Copywriting & Proofreading Audit',
      'Advanced Interactive Animations & Components',
      'Payment Gateway Integration (Stripe/PayPal/Razorpay)',
      'Guaranteed 100/100 PageSpeed Performance',
      '24/7 VIP Priority Concierge Support'
    ],
    popular: true,
    ctaText: 'Get AI + Developer Bundle',
    color: 'border-primary shadow-xl shadow-primary/20'
  },
  {
    name: 'Enterprise Custom AI Stack',
    badge: 'Enterprise',
    priceMonthly: 899,
    priceYearly: 749,
    isOneTime: true,
    description: 'Bespoke AI web architecture with custom backend integrations, dedicated NVMe node, and SLA uptime guarantee.',
    features: [
      'Everything in AI + Expert Co-Creation',
      'Custom API & Database Schema Integration',
      'Dedicated NVMe Server Node Infrastructure',
      'Multi-Language Translation Engine',
      'SOC2 / HIPAA Compliance Auditing',
      'Custom AI Chatbot Widget Integration',
      'Dedicated Account Manager & Direct Slack Channel',
      '99.99% Uptime Guarantee with SLA'
    ],
    popular: false,
    ctaText: 'Contact Enterprise Team',
    color: 'border-border'
  }
];

export default function AiWebDevPricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');

  return (
    <section class="py-24 bg-muted/20 border-b border-border/40 relative overflow-hidden" id="ai-pricing">
      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        
        {/* Header */}
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            💎 Transparent Plans
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            AI Web Development Pricing
          </h2>
          <p class="text-muted-foreground text-base sm:text-lg">
            Choose self-serve instant AI building or pair up with our expert engineers for a flawless hand-crafted launch.
          </p>

          {/* Billing Switcher */}
          <div class="mt-8 inline-flex items-center gap-3 bg-card border border-border p-1.5 rounded-full shadow-sm">
            <button
              onClick={() => setBillingCycle('monthly')}
              class={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                billingCycle === 'monthly' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              class={`px-4 py-1.5 rounded-full text-xs font-bold transition flex items-center gap-1.5 ${
                billingCycle === 'yearly' ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <span>Annual Billing</span>
              <span class="bg-emerald-500 text-zinc-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">Save 20%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div class="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {PRICING_PLANS.map((plan, i) => {
            const price = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
            return (
              <div
                key={i}
                class={`bg-card rounded-3xl p-8 border flex flex-col justify-between relative transition-all duration-300 ${plan.color} ${
                  plan.popular ? 'scale-[1.02]' : 'hover:border-primary/50'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-extrabold px-4 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div class="flex items-center justify-between mb-2">
                    <h3 class="text-xl font-bold">{plan.name}</h3>
                    {!plan.popular && (
                      <span class="text-[10px] font-semibold bg-muted px-2.5 py-1 rounded-md text-muted-foreground">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p class="text-muted-foreground text-xs leading-relaxed mb-6">
                    {plan.description}
                  </p>

                  <div class="mb-6 pb-6 border-b border-border/60">
                    <div class="flex items-baseline gap-1">
                      <span class="text-4xl sm:text-5xl font-black tracking-tight">${price}</span>
                      <span class="text-muted-foreground text-xs font-medium">
                        {plan.isOneTime ? '/ one-time launch' : billingCycle === 'yearly' ? '/ month (billed annually)' : '/ month'}
                      </span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div class="space-y-3 mb-8">
                    <span class="text-xs font-bold text-muted-foreground uppercase tracking-wider block mb-2">
                      What's Included:
                    </span>
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} class="flex items-start gap-2.5 text-xs text-foreground/90">
                        <div class="w-4 h-4 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                          <Check class="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a href="#ai-prompt-modal">
                  <Button
                    className={`w-full h-12 rounded-xl font-bold text-sm flex items-center justify-center gap-2 ${
                      plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25' : ''
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight class="w-4 h-4" />
                  </Button>
                </a>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div class="mt-12 text-center max-w-xl mx-auto">
          <p class="text-xs text-muted-foreground flex items-center justify-center gap-2 font-medium">
            <Shield class="w-4 h-4 text-emerald-500" />
            <span>30-Day Money Back Guarantee — Try AI Web Building risk-free!</span>
          </p>
        </div>

      </div>
    </section>
  );
}
