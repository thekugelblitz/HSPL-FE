import React, { useState } from 'react';
import { 
  Sparkles, MessageSquare, Zap, Cloud, Code2, Palette, Shield, Globe, 
  Layers, ArrowRight, CheckCircle2, Bot, Cpu, Sparkle, RefreshCw
} from 'lucide-react';

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Type Your Initial Prompt',
    subtitle: 'One prompt starts it all',
    description: 'Describe your vision, target audience, business goals, or brand aesthetic in simple natural language or paste your scratch notes.',
    icon: MessageSquare,
    color: 'from-blue-500 to-indigo-600',
    highlight: 'Natural Language Engine'
  },
  {
    step: '02',
    title: 'Keep Chatting & Iterating',
    subtitle: 'Conversational design co-pilot',
    description: 'Tweak colors, swap component layouts, add pricing tables, insert contact forms, or rewrite copy just by talking to the AI in real-time.',
    icon: Sparkles,
    color: 'from-purple-500 to-pink-600',
    highlight: 'Real-Time DOM Hot-Reload'
  },
  {
    step: '03',
    title: 'Automated Stack Assembly',
    subtitle: 'Production-grade code output',
    description: 'The AI constructs clean, accessible HTML5, Tailwind CSS, React components, schema markup, and responsive layouts automatically.',
    icon: Code2,
    color: 'from-emerald-500 to-teal-600',
    highlight: 'Clean AST Output'
  },
  {
    step: '04',
    title: '1-Click NVMe Cloud Launch',
    subtitle: 'Instant global deployment',
    description: 'Deploy instantly onto HostingSpell ultra-fast NVMe cloud servers with free SSL certificates, custom domain mapping, and cPanel access.',
    icon: Cloud,
    color: 'from-sky-500 to-blue-600',
    highlight: 'Enterprise NVMe Edge'
  }
];

const AI_POWERUPS = [
  {
    title: 'Visual Canvas & Palette Engine',
    description: 'Generate harmonized HSL color tokens, dark mode toggle variants, and modern typography pairs automatically.',
    icon: Palette
  },
  {
    title: 'Autonomous Copy & Asset Studio',
    description: 'AI drafts SEO-optimized headlines, product copy, and high-resolution visual graphics tailor-made for your industry.',
    icon: Zap
  },
  {
    title: 'Conversational Code Refactor',
    description: 'Ask the AI to refactor layout grids, add sticky mobile bars, or integrate lead capture forms with simple text prompts.',
    icon: Bot
  },
  {
    title: 'High-Uptime Cloud Integration',
    description: 'Backed by LiteSpeed Enterprise web servers, Imunify360 AI security layer, and automated JetBackup 5 daily snapshots.',
    icon: Shield
  }
];

export default function AiWebDevWorkflow() {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section class="py-24 bg-background border-b border-border/40 relative overflow-hidden">
      
      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        
        {/* Section Header */}
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Zap class="w-3.5 h-3.5" /> How It Works
          </div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            From Raw Prompt to <span class="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Live Website</span> in 4 Simple Steps
          </h2>
          <p class="text-muted-foreground text-base sm:text-lg">
            No coding required. Build, customize, and refine your website through continuous natural conversation.
          </p>
        </div>

        {/* 4-Step Interactive Workflow Cards Grid */}
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {WORKFLOW_STEPS.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeStep === index;
            return (
              <div
                key={item.step}
                onClick={() => setActiveStep(index)}
                class={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 relative flex flex-col justify-between ${
                  isActive
                    ? 'bg-card border-primary shadow-xl shadow-primary/10 scale-[1.02]'
                    : 'bg-card/60 hover:bg-card border-border hover:border-primary/40'
                }`}
              >
                <div>
                  <div class="flex items-center justify-between mb-6">
                    <span class={`text-2xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-mono`}>
                      {item.step}
                    </span>
                    <div class={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon class="w-5 h-5" />
                    </div>
                  </div>

                  <span class="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-1 rounded-full inline-block mb-3">
                    {item.highlight}
                  </span>

                  <h3 class="text-lg font-bold mb-1">{item.title}</h3>
                  <p class="text-xs font-medium text-primary/80 mb-3">{item.subtitle}</p>
                  <p class="text-muted-foreground text-xs leading-relaxed">{item.description}</p>
                </div>

                <div class="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-primary">
                  <span>{isActive ? 'Active Step' : 'Click to preview'}</span>
                  <ArrowRight class={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1' : ''}`} />
                </div>

                {/* Top Active Border Highlight */}
                {isActive && (
                  <div class="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-b-full"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Feature Power-ups Banner Grid */}
        <div class="bg-card/70 border border-border/80 rounded-3xl p-8 sm:p-12 relative overflow-hidden glass-card">
          <div class="max-w-2xl mb-8">
            <h3 class="text-2xl sm:text-3xl font-extrabold mb-3">Engineered for Extreme Speed & Conversion</h3>
            <p class="text-muted-foreground text-sm sm:text-base">
              Every site generated by HostingSpell AI Web Engine is built on enterprise standards: blazing fast loading, mobile responsive, and SEO optimized out of the box.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AI_POWERUPS.map((powerup, i) => {
              const Icon = powerup.icon;
              return (
                <div key={i} class="bg-background/80 border border-border/60 p-5 rounded-2xl">
                  <div class="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 text-primary flex items-center justify-center mb-4">
                    <Icon class="w-4 h-4" />
                  </div>
                  <h4 class="font-bold text-sm mb-2">{powerup.title}</h4>
                  <p class="text-muted-foreground text-xs leading-relaxed">{powerup.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
