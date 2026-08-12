import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Server, Globe, Shield, Zap, X } from 'lucide-react';

interface QuizOption {
  id: string;
  label: string;
  sub: string;
}

const useCaseOptions: QuizOption[] = [
  { id: "wp", label: "WordPress Site / Blog", sub: "Fast LSCache optimization for blogs & business" },
  { id: "ecom", label: "WooCommerce / E-Commerce Store", sub: "Dedicated CPU & RAM for high sales concurrency" },
  { id: "node_py", label: "Node.js / Python / Custom Web App", sub: "Deploy Express, Next.js, Django & FastAPI" },
  { id: "agency", label: "Agency / Multiple Client Sites", sub: "100% White-labeled cPanel/WHM reseller hosting" },
];

const trafficOptions = [
  { id: "starter", label: "< 25,000 Visits / month" },
  { id: "growing", label: "25,000 - 100,000 Visits / month" },
  { id: "high", label: "100,000+ High Concurrency" }
];

export function HostingQuizModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedUseCase, setSelectedUseCase] = useState(useCaseOptions[0].id);
  const [selectedTraffic, setSelectedTraffic] = useState(trafficOptions[0].id);

  const getRecommendation = () => {
    if (selectedUseCase === "agency") {
      return {
        title: "HS INITIATIVE Reseller",
        tagline: "100% White-Labeled Agency Plan",
        price: "$12.99/mo",
        link: "/reseller#plans",
        specs: ["25 cPanel Accounts", "Unlimited Bandwidth", "Free WHMCS License", "Private Custom Nameservers"]
      };
    }
    if (selectedUseCase === "node_py") {
      return {
        title: "MARS Cloud Node",
        tagline: "Node 20+ & Python 3.12 Optimized",
        price: "$2.99/mo",
        link: "/nodejs-hosting",
        specs: ["Pure NVMe SSD Storage", "Node.js & Python Runtimes", "Free SSL & Imunify360 AI", "24/7 Human SLA Support"]
      };
    }
    if (selectedTraffic === "high" || selectedUseCase === "ecom") {
      return {
        title: "PREMIUM 2 Hosting Node",
        tagline: "Dedicated RAM & High Concurrency",
        price: "$4.99/mo",
        link: "/premium-hosting",
        specs: ["Dedicated 4GB RAM & 2 vCPU", "LiteSpeed Enterprise + LSCache", "Zero-Downtime Migration", "Daily Automated Backups"]
      };
    }
    return {
      title: "MARS Cloud Plan",
      tagline: "Best Overall Value for Websites",
      price: "$2.99/mo",
      link: "/cloud-hosting",
      specs: ["10x Faster NVMe Storage", "Free Lifetime Domain", "Unmetered Bandwidth", "30-Day Money-Back Guarantee"]
    };
  };

  const recommendation = getRecommendation();

  const resetQuiz = () => {
    setStep(1);
    setSelectedUseCase(useCaseOptions[0].id);
    setSelectedTraffic(trafficOptions[0].id);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/90 dark:bg-zinc-900/90 hover:bg-zinc-50 dark:hover:bg-zinc-800/90 text-zinc-900 dark:text-zinc-100 font-extrabold text-sm sm:text-base border border-zinc-200 dark:border-zinc-800/90 hover:border-blue-500/40 dark:hover:border-blue-400/40 shadow-sm hover:shadow-md transition-all cursor-pointer w-full sm:w-auto h-13 group"
      >
        <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform shrink-0" />
        <span className="flex items-center gap-1.5">
          <span>Find My Ideal Plan</span>
          <span className="text-[11px] font-extrabold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 shrink-0">
            15-Sec Quiz
          </span>
        </span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-[520px] bg-card border border-border rounded-3xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between border-b border-border/40 pb-4">
              <div className="flex items-center gap-2 text-foreground font-extrabold text-lg">
                <Sparkles className="w-5 h-5 text-primary" />
                <span>Find Your Ideal Hosting Spec</span>
              </div>
              <button 
                onClick={() => { setIsOpen(false); resetQuiz(); }}
                className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
              <span>Step {step} of 3</span>
              <div className="flex gap-1.5">
                {[1, 2, 3].map(s => (
                  <span
                    key={s}
                    className={`h-1.5 rounded-full transition-all ${
                      s === step ? "w-6 bg-primary" : "w-2 bg-muted"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step 1: Use Case */}
            {step === 1 && (
              <div className="space-y-4 py-2">
                <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider">What type of website are you hosting?</h4>
                <div className="grid gap-3">
                  {useCaseOptions.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedUseCase(opt.id)}
                      className={`p-3.5 rounded-2xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                        selectedUseCase === opt.id
                          ? "border-primary bg-primary/10 ring-1 ring-primary/40"
                          : "border-border/60 bg-muted/20 hover:bg-muted/50"
                      }`}
                    >
                      <div className="p-2 rounded-xl bg-primary/15 text-primary shrink-0 mt-0.5">
                        <Server className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-foreground">{opt.label}</div>
                        <div className="text-[11px] text-muted-foreground font-medium">{opt.sub}</div>
                      </div>
                    </button>
                  ))}
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 rounded-xl bg-primary text-primary-foreground font-extrabold text-xs flex items-center justify-center gap-2 mt-4 cursor-pointer hover:opacity-90 transition-all shadow-md shadow-primary/20"
                >
                  <span>Next: Expected Traffic</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Step 2: Traffic */}
            {step === 2 && (
              <div className="space-y-4 py-2">
                <h4 className="text-xs font-extrabold text-foreground uppercase tracking-wider">What is your expected monthly visitor volume?</h4>
                <div className="grid gap-3">
                  {trafficOptions.map(opt => (
                    <button
                      key={opt.id}
                      onClick={() => setSelectedTraffic(opt.id)}
                      className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                        selectedTraffic === opt.id
                          ? "border-primary bg-primary/10 ring-1 ring-primary/40"
                          : "border-border/60 bg-muted/20 hover:bg-muted/50"
                      }`}
                    >
                      <div className="text-xs font-bold text-foreground">{opt.label}</div>
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 mt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="w-1/3 py-3 rounded-xl bg-muted text-muted-foreground font-bold text-xs cursor-pointer hover:bg-muted/80"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="w-2/3 py-3 rounded-xl bg-primary text-primary-foreground font-extrabold text-xs flex items-center justify-center gap-2 cursor-pointer hover:opacity-90 transition-all"
                  >
                    <span>See My Recommended Spec</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Recommendation Result */}
            {step === 3 && (
              <div className="space-y-4 py-2">
                <div className="p-5 rounded-2xl bg-gradient-to-b from-primary/20 via-primary/10 to-card border border-primary/40">
                  <span className="text-[10px] font-black uppercase tracking-wider bg-emerald-500 text-slate-950 px-2.5 py-0.5 rounded-full inline-block mb-2 shadow-sm">
                    Recommended Spec Match 🎯
                  </span>
                  <h3 className="text-xl font-extrabold text-foreground">{recommendation.title}</h3>
                  <p className="text-xs text-primary font-bold">{recommendation.tagline}</p>

                  <div className="text-2xl font-black text-foreground font-mono mt-3">
                    {recommendation.price}
                  </div>

                  <ul className="space-y-2 mt-4 pt-4 border-t border-border/40 text-xs font-medium">
                    {recommendation.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2 text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={recommendation.link}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3.5 rounded-xl bg-primary text-primary-foreground font-extrabold text-xs shadow-lg shadow-primary/25 hover:opacity-90 transition-all"
                >
                  Get Started with {recommendation.title} &rarr;
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

