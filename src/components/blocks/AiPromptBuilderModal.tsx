import React, { useState } from 'react';
import { Sparkles, Wand2, X, Check, ArrowRight, Bot, Send, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";

const SITE_STYLES = [
  { id: 'dark-saas', label: 'Dark Mode SaaS', desc: 'Glassmorphism, glowing gradients & tech vibes' },
  { id: 'minimal-eco', label: 'Minimalist & Clean', desc: 'Warm neutrals, crisp typography & subtle motion' },
  { id: 'cyberpunk', label: 'Futuristic Cyber', desc: 'High contrast neon, 3D grids & dynamic animations' },
  { id: 'corporate', label: 'Executive Corporate', desc: 'Trustworthy navy blue, sharp structure & enterprise look' }
];

const FEATURE_OPTIONS = [
  'E-Commerce & Stripe Checkout',
  'Online Appointment Booking',
  'Blog & Content Management (CMS)',
  'Client Testimonials & Video Reviews',
  'Live Chat & AI Customer Agent',
  'Newsletter Lead Magnet Capture',
  'Multilingual Translation (i18n)',
  'Custom Pricing Calculator'
];

export default function AiPromptBuilderModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [promptText, setPromptText] = useState<string>('');
  const [selectedStyle, setSelectedStyle] = useState<string>('dark-saas');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    'E-Commerce & Stripe Checkout',
    'Client Testimonials & Video Reviews'
  ]);
  const [userEmail, setUserEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const toggleFeature = (feature: string) => {
    if (selectedFeatures.includes(feature)) {
      setSelectedFeatures(selectedFeatures.filter(f => f !== feature));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userEmail) return;
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Anchor Target for scrolling to modal launcher */}
      <div id="ai-prompt-modal" class="py-12 bg-background border-b border-border/40 text-center">
        <div class="container mx-auto px-4 max-w-screen-xl">
          <div class="bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 border border-primary/30 rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles class="w-3.5 h-3.5" /> Instant AI Prototype Studio
            </div>
            <h2 class="text-3xl sm:text-4xl font-extrabold mb-4">
              Ready to Turn Your Vision into Reality?
            </h2>
            <p class="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto mb-8">
              Launch our interactive AI Prompt Studio to specify your project features, visual style, and get your live AI website build delivered in 30 seconds.
            </p>
            <Button
              onClick={() => setIsOpen(true)}
              className="h-14 px-8 rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 font-extrabold text-base shadow-xl shadow-primary/30 inline-flex items-center gap-3 transition-transform hover:scale-105"
            >
              <Wand2 class="w-5 h-5" />
              <span>Launch AI Prompt Builder Modal</span>
              <ArrowRight class="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Modal Backdrop */}
      {isOpen && (
        <div class="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
          
          <div class="bg-card border border-border/80 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative overflow-hidden max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => { setIsOpen(false); setIsSubmitted(false); }}
              class="absolute top-5 right-5 p-2 rounded-full bg-muted hover:bg-accent text-muted-foreground hover:text-foreground transition"
            >
              <X class="w-5 h-5" />
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} class="space-y-6">
                
                {/* Header */}
                <div>
                  <div class="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-2">
                    <Bot class="w-4 h-4" /> AI Web Generator Studio
                  </div>
                  <h3 class="text-2xl font-extrabold">Build Your Site with One Prompt</h3>
                  <p class="text-xs text-muted-foreground mt-1">
                    Keep chatting & iterating after submission. Unlimited revisions included!
                  </p>
                </div>

                {/* Prompt Textarea */}
                <div>
                  <label class="block text-xs font-bold mb-2">Describe Your Dream Website:</label>
                  <textarea
                    rows={3}
                    value={promptText}
                    onChange={(e) => setPromptText(e.target.value)}
                    placeholder="e.g. A sleek SaaS landing page for an AI copywriting tool with dark theme, pricing table, and instant booking modal..."
                    class="w-full bg-background border border-border rounded-xl p-3 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                  />
                </div>

                {/* Style Selector */}
                <div>
                  <label class="block text-xs font-bold mb-2">Select Visual Aesthetic:</label>
                  <div class="grid sm:grid-cols-2 gap-2.5">
                    {SITE_STYLES.map(style => (
                      <div
                        key={style.id}
                        onClick={() => setSelectedStyle(style.id)}
                        class={`cursor-pointer p-3 rounded-xl border text-xs transition ${
                          selectedStyle === style.id
                            ? 'bg-primary/10 border-primary text-foreground font-semibold'
                            : 'bg-background hover:bg-muted border-border/70 text-muted-foreground'
                        }`}
                      >
                        <div class="font-bold text-foreground mb-0.5">{style.label}</div>
                        <div class="text-[10px] text-muted-foreground">{style.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features Multi-Select */}
                <div>
                  <label class="block text-xs font-bold mb-2">Select Required Modules:</label>
                  <div class="grid sm:grid-cols-2 gap-2">
                    {FEATURE_OPTIONS.map(feature => {
                      const isSelected = selectedFeatures.includes(feature);
                      return (
                        <button
                          type="button"
                          key={feature}
                          onClick={() => toggleFeature(feature)}
                          class={`text-left p-2.5 rounded-xl border text-xs transition flex items-center justify-between ${
                            isSelected
                              ? 'bg-primary/10 border-primary text-primary font-semibold'
                              : 'bg-background hover:bg-muted border-border/60 text-muted-foreground'
                          }`}
                        >
                          <span>{feature}</span>
                          {isSelected && <Check class="w-3.5 h-3.5 text-primary shrink-0" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Email Input & Submit */}
                <div class="pt-4 border-t border-border/60">
                  <label class="block text-xs font-bold mb-2">Enter Your Email for Instant Live Preview Access:</label>
                  <div class="flex gap-2">
                    <input
                      type="email"
                      required
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      placeholder="you@company.com"
                      class="w-full bg-background border border-border rounded-xl px-3 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary"
                    />
                    <Button
                      type="submit"
                      className="bg-primary text-primary-foreground font-bold text-xs px-6 rounded-xl shrink-0"
                    >
                      <span>Generate Now</span>
                      <Send class="w-3.5 h-3.5 ml-1.5" />
                    </Button>
                  </div>
                  <p class="text-[10px] text-muted-foreground mt-2 flex items-center gap-1">
                    <ShieldCheck class="w-3.5 h-3.5 text-emerald-500" />
                    <span>Free 14-day access. No credit card required. Hosted on NVMe Cloud.</span>
                  </p>
                </div>

              </form>
            ) : (
              /* Success Confirmation View */
              <div class="text-center py-8 space-y-4">
                <div class="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center mx-auto mb-2 border border-emerald-500/30">
                  <Check class="w-8 h-8 stroke-[3]" />
                </div>
                <h3 class="text-2xl font-extrabold">Your AI Site Generation is Underway!</h3>
                <p class="text-xs text-muted-foreground max-w-md mx-auto leading-relaxed">
                  We've initialized your project build for <strong>{userEmail}</strong> with style <strong>{selectedStyle}</strong>. Check your inbox for your private live editing link!
                </p>
                <div class="pt-4">
                  <Button
                    onClick={() => { setIsOpen(false); setIsSubmitted(false); }}
                    className="bg-primary text-primary-foreground font-bold text-xs px-6 rounded-xl"
                  >
                    Close Studio
                  </Button>
                </div>
              </div>
            )}

          </div>

        </div>
      )}
    </>
  );
}
