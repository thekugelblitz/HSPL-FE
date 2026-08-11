import React, { useState, useEffect, useRef } from 'react';
import { 
  Sparkles, Wand2, Send, Bot, User, Code2, Monitor, Tablet, Smartphone, 
  RefreshCw, Zap, CheckCircle2, ArrowRight, Layout, Palette, Globe, 
  Cpu, MessageSquare, Play, Copy, Check, Terminal, Eye, Layers, ChevronRight
} from 'lucide-react';
import { Button } from "@/components/ui/button";

interface PresetPrompt {
  id: string;
  title: string;
  category: string;
  prompt: string;
  color: string;
  previewType: 'saas' | 'ecommerce' | 'portfolio' | 'clinic';
}

const PRESET_PROMPTS: PresetPrompt[] = [
  {
    id: 'saas',
    title: 'AI Copywriter SaaS Platform',
    category: 'SaaS & Tech',
    prompt: 'Build a high-converting dark-mode SaaS landing page for an AI Copywriting assistant with glassmorphism hero, live interactive feature tabs, pricing table, and testimonials grid.',
    color: 'from-blue-500 to-indigo-600',
    previewType: 'saas'
  },
  {
    id: 'ecommerce',
    title: 'Sustainable Eco-Footwear Store',
    category: 'E-Commerce',
    prompt: 'Create a clean, minimalist e-commerce storefront for eco-friendly sneakers with interactive 3D product view, sustainability badge counter, customer reviews, and 1-click checkout modal.',
    color: 'from-emerald-500 to-teal-600',
    previewType: 'ecommerce'
  },
  {
    id: 'portfolio',
    title: 'Cyberpunk 3D Design Studio',
    category: 'Portfolio',
    prompt: 'Design a futuristic neon cyberpunk portfolio for a 3D digital agency with glowing interactive canvas, project grid, client logo marquee, and direct booking form.',
    color: 'from-purple-500 to-pink-600',
    previewType: 'portfolio'
  },
  {
    id: 'clinic',
    title: 'Modern Healthcare & Dental Clinic',
    category: 'Services',
    prompt: 'Build a trustworthy, warm medical clinic website with online appointment booking scheduler, doctor profile cards, insurance calculator, and live chat support.',
    color: 'from-sky-500 to-blue-600',
    previewType: 'clinic'
  }
];

const CHAT_SIMULATIONS: Record<string, { role: 'ai' | 'user'; text: string; action?: string; delay?: number }[]> = {
  saas: [
    { role: 'user', text: 'Build a high-converting dark-mode SaaS landing page for an AI Copywriting assistant with glassmorphism hero, live feature tabs, pricing table, and testimonials.' },
    { role: 'ai', text: '⚡ Analyzing requirements... Initializing Next-Gen Design System with HSL Dark Mode & Glassmorphic tokens.', action: 'Setting up typography & color tokens...' },
    { role: 'ai', text: '✨ Generating Hero Section: "Transform Raw Thoughts into Viral Copy in 3 Seconds". Adding animated glowing gradients & CTA button.', action: 'Building Hero Component...' },
    { role: 'ai', text: '🎨 Injecting interactive Feature Tabs (AI Editor, SEO Optimizer, Tone Switcher) & 3-Tier Pricing Matrix.', action: 'Assembling layout tree...' },
    { role: 'ai', text: '🚀 Your AI-Powered SaaS site is ready! Test the live preview or chat to make instant edits.', action: 'Compilation complete in 1.4s.' }
  ],
  ecommerce: [
    { role: 'user', text: 'Create a minimalist e-commerce storefront for eco-friendly sneakers with product view & sustainability counter.' },
    { role: 'ai', text: '🌿 Initializing Eco-Friendly Aesthetic Theme (Sage & Warm Stone palette, clean typography).', action: 'Configuring theme...' },
    { role: 'ai', text: '👟 Generating Product Hero: "Step into the Future of Zero-Carbon Footwear". Adding interactive shoe selector.', action: 'Building Product Showcase...' },
    { role: 'ai', text: '📊 Integrating Real-Time Impact Counter (14,200kg Plastic Saved) & Stripe-ready checkout modal.', action: 'Connecting checkout engine...' },
    { role: 'ai', text: '✨ Eco Store Ready! Try tweaking colors or layout in chat.' }
  ],
  portfolio: [
    { role: 'user', text: 'Design a futuristic neon cyberpunk portfolio for a 3D digital agency with interactive grid & booking form.' },
    { role: 'ai', text: '🌌 Activating Cyberpunk Dark Mode Palette (Neon Violet #8B5CF6 & Cyan #06B6D4 with glass borders).', action: 'Loading Cyberpunk Shader...' },
    { role: 'ai', text: '⚡ Building Dynamic Agency Canvas: "We Sculpt the Next Dimension of Digital Experiences".', action: 'Injecting Hero Section...' },
    { role: 'ai', text: '🎨 Layout Assembly: 3D Interactive Project Showcase Grid + Instant Client Booking Modal.', action: 'Compiling preview...' },
    { role: 'ai', text: '🔥 Cyberpunk Portfolio Live! Use prompt refinements to customize.' }
  ],
  clinic: [
    { role: 'user', text: 'Build a trustworthy medical clinic website with online appointment booking scheduler & doctor profiles.' },
    { role: 'ai', text: '🩺 Applying Clinical Clean Palette (Trust Blue & Soft Emerald, accessible WCAG AAA contrast).', action: 'Initializing layout...' },
    { role: 'ai', text: '🏥 Generating Hero: "World-Class Dental & Specialist Care Designed Around You". Adding appointment widget.', action: 'Building Booking Engine...' },
    { role: 'ai', text: '👨‍⚕️ Adding Specialist Team Directory & Interactive Insurance Coverage Checker.', action: 'Finalizing components...' },
    { role: 'ai', text: '✨ Medical Clinic Site Ready! Instant cloud deployment ready.' }
  ]
};

const SAMPLE_CODE: Record<string, { html: string; tailwind: string }> = {
  saas: {
    html: `<section class="min-h-screen bg-slate-950 text-white py-20 relative overflow-hidden">
  <div class="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-[120px]"></div>
  <div class="container mx-auto px-4 max-w-5xl relative z-10 text-center">
    <span class="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-widest mb-6 inline-block">✨ Powered by AI Web Builder</span>
    <h1 class="text-5xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
      Transform Raw Thoughts Into <span class="text-blue-500">Viral Copy</span> in Seconds
    </h1>
    <p class="text-slate-400 text-lg max-w-2xl mx-auto mb-8">Stop staring at blank pages. Let our multi-model AI agent draft, optimize, and publish high-converting copy across all channels.</p>
    <div class="flex justify-center gap-4">
      <button class="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition shadow-lg shadow-blue-500/25">Start Free Trial →</button>
      <button class="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 rounded-xl font-semibold">Watch Demo</button>
    </div>
  </div>
</section>`,
    tailwind: `// Tailwind CSS v4 Theme Config
@theme {
  --color-brand-primary: #3B82F6;
  --color-brand-accent: #8B5CF6;
  --font-display: 'Inter', sans-serif;
}`
  },
  ecommerce: {
    html: `<div class="bg-zinc-900 text-zinc-100 min-h-screen">
  <header class="border-b border-zinc-800 p-6 flex justify-between items-center">
    <div class="font-bold text-xl tracking-wider text-emerald-400">ECO-STRIDE</div>
    <nav class="flex gap-6 text-sm text-zinc-400">
      <a href="#" class="text-white">Shop</a>
      <a href="#">Impact</a>
      <a href="#">Materials</a>
    </nav>
  </header>
  <main class="container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <span class="text-emerald-400 text-sm font-bold uppercase tracking-widest">100% Recycled Ocean Plastic</span>
      <h1 class="text-4xl font-extrabold mt-2 mb-4">The Zero-Carbon Daily Runner</h1>
      <p class="text-zinc-400 mb-6">Engineered with sugarcane foam soles and recycled ocean thread for unmatched comfort and zero impact on Mother Earth.</p>
      <div class="text-3xl font-extrabold mb-6">$129.00 <span class="text-sm font-normal text-emerald-400">Free Worldwide Shipping</span></div>
      <button class="w-full py-4 bg-emerald-500 text-zinc-950 font-bold rounded-xl hover:bg-emerald-400 transition">Add to Bag & Plant 5 Trees</button>
    </div>
  </main>
</div>`,
    tailwind: `@theme {
  --color-eco-accent: #10B981;
}`
  },
  portfolio: {
    html: `<section class="bg-black text-white min-h-screen p-12 relative">
  <div class="border border-purple-500/30 rounded-3xl p-8 bg-zinc-950/80 backdrop-blur-2xl">
    <div class="text-purple-400 font-mono text-sm mb-4">// CYBERPUNK 3D STUDIO</div>
    <h1 class="text-6xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent mb-6">
      WE BUILD VIRTUAL WORLDS
    </h1>
    <p class="text-zinc-400 text-xl max-w-xl mb-8">Immersive WebGL interactive experiences, 3D brand environments, and next-generation Web3 visual architectures.</p>
  </div>
</section>`,
    tailwind: `@theme {
  --color-neon-purple: #A855F7;
  --color-neon-cyan: #06B6D4;
}`
  },
  clinic: {
    html: `<section class="bg-slate-900 text-slate-100 py-16 px-8">
  <div class="max-w-4xl mx-auto text-center">
    <span class="bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold">Care That Puts You First</span>
    <h1 class="text-4xl font-bold mt-4 mb-4">Modern Healthcare Designed for Human Comfort</h1>
    <p class="text-slate-400 mb-8">Same-day appointments, state-of-the-art diagnostic care, and compassionate specialists devoted to your family's health.</p>
    <div class="bg-slate-850 border border-slate-800 rounded-2xl p-6 shadow-2xl">
      <h3 class="font-semibold mb-4 text-left">Book Your Visit Online</h3>
      <div class="grid md:grid-cols-3 gap-4">
        <input type="text" placeholder="Select Specialty" class="bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm" />
        <input type="date" class="bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm" />
        <button class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg p-3 text-sm">Find Available Slots</button>
      </div>
    </div>
  </div>
</section>`,
    tailwind: `@theme {
  --color-clinical-blue: #0EA5E9;
}`
  }
};

export default function AiWebDevHero() {
  const [selectedPreset, setSelectedPreset] = useState<PresetPrompt>(PRESET_PROMPTS[0]);
  const [promptInput, setPromptInput] = useState<string>(PRESET_PROMPTS[0].prompt);
  const [chatMessages, setChatMessages] = useState<{ role: 'ai' | 'user'; text: string; action?: string }[]>(CHAT_SIMULATIONS.saas);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'code' | 'chat'>('preview');
  const [viewport, setViewport] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [codeCopied, setCodeCopied] = useState<boolean>(false);
  const [chatRefinementInput, setChatRefinementInput] = useState<string>('');
  
  // Custom states applied through "Keep Chatting" edits
  const [activeTheme, setActiveTheme] = useState<'dark' | 'light' | 'neon'>('dark');
  const [hasDarkMode, setHasDarkMode] = useState<boolean>(true);
  const [hasPricing, setHasPricing] = useState<boolean>(true);
  const [hasTestimonials, setHasTestimonials] = useState<boolean>(true);
  const [refinementBadge, setRefinementBadge] = useState<string | null>(null);

  const chatContainerRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<any>(null);

  // Clean up any running stream timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSelectPreset = (preset: PresetPrompt) => {
    setSelectedPreset(preset);
    setPromptInput(preset.prompt);
    triggerGeneration(preset.id, preset.prompt);
  };

  const triggerGeneration = (typeId: string, customText?: string) => {
    // Clear any active running simulation timer first to prevent race conditions
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    setIsGenerating(true);
    setRefinementBadge(null);
    const simulation = CHAT_SIMULATIONS[typeId] || CHAT_SIMULATIONS.saas;
    
    // Set initial user prompt message safely
    const initialUserMsg = { role: 'user' as const, text: customText || promptInput };
    setChatMessages([initialUserMsg]);

    // Stream simulated AI response messages safely
    let index = 1;
    timerRef.current = setInterval(() => {
      if (index < simulation.length && simulation[index]) {
        const nextMsg = simulation[index];
        setChatMessages(prev => [...prev.filter(Boolean), nextMsg]);
        index++;
      } else {
        if (timerRef.current) {
          clearInterval(timerRef.current);
          timerRef.current = null;
        }
        setIsGenerating(false);
      }
    }, 600);
  };

  const handleRefineChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatRefinementInput.trim() || isGenerating) return;

    const userText = chatRefinementInput.trim();
    setChatRefinementInput('');
    setIsGenerating(true);

    const newChatMsg = { role: 'user' as const, text: userText };
    setChatMessages(prev => [...prev, newChatMsg]);

    const lower = userText.toLowerCase();

    setTimeout(() => {
      let aiResponseText = `I've updated your website based on "${userText}". Applied layout mutations, re-indexed CSS tokens, and regenerated preview components in real-time.`;
      let badge = 'Refined with AI Chat';

      if (lower.includes('dark mode') || lower.includes('dark')) {
        setActiveTheme('dark');
        setHasDarkMode(true);
        aiResponseText = `✨ Switched primary styling tokens to Ultra-Dark AMOLED mode with sleek glassmorphism borders!`;
        badge = 'Dark Mode Applied';
      } else if (lower.includes('pricing') || lower.includes('plan')) {
        setHasPricing(true);
        aiResponseText = `📊 Inserted 3-tier competitive Pricing Matrix with monthly/yearly billing toggle and instant checkouts!`;
        badge = 'Pricing Matrix Added';
      } else if (lower.includes('testimonial') || lower.includes('review') || lower.includes('social proof')) {
        setHasTestimonials(true);
        aiResponseText = `⭐️ Injected Social Proof Testimonials Grid with verified client ratings and company badges!`;
        badge = 'Testimonials Injected';
      } else if (lower.includes('cyan') || lower.includes('neon') || lower.includes('purple')) {
        setActiveTheme('neon');
        aiResponseText = `🌌 Applied Neon Cyberpunk gradient accents across CTAs, hero typography, and card borders!`;
        badge = 'Neon Theme Active';
      }

      setRefinementBadge(badge);
      setChatMessages(prev => [...prev, {
        role: 'ai',
        text: aiResponseText,
        action: 'Refining live DOM components...'
      }]);
      setIsGenerating(false);
    }, 800);
  };

  const copyCodeToClipboard = () => {
    const code = SAMPLE_CODE[selectedPreset.previewType]?.html || '';
    navigator.clipboard.writeText(code);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  return (
    <section class="dark relative bg-[#0B0C0E] text-white pt-16 pb-24 overflow-hidden border-b border-zinc-800/90 shadow-2xl">
      {/* Glow Background Orbs & Grid */}
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-blue-600/20 via-indigo-600/10 to-transparent blur-[140px] pointer-events-none -z-10"></div>
      <div class="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none -z-10"></div>

      <div class="container mx-auto px-4 max-w-screen-xl relative z-10">
        
        {/* Header Badge & Title */}
        <div class="text-center max-w-4xl mx-auto mb-12">
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide mb-6 animate-pulse">
            <Sparkles class="w-4 h-4 text-blue-400" />
            <span>AI-Powered Website Development Platform</span>
            <span class="bg-blue-600 text-white text-[10px] px-2 py-0.5 rounded-full font-bold uppercase">New</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-[1.15] text-white">
            One Prompt. <span class="bg-gradient-to-r from-blue-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">Keep Chatting</span> & Build Your Dream into Reality!
          </h1>

          <p class="text-zinc-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Stop waiting weeks for agency deliverables. Describe your business vision once, then converse naturally with our AI Web Co-Pilot to generate, tweak, style, and launch production-grade websites instantly on NVMe Cloud.
          </p>

          {/* Quick Preset Chips */}
          <div class="mt-8 flex flex-wrap justify-center items-center gap-2 sm:gap-3">
            <span class="text-xs font-semibold text-zinc-400 uppercase tracking-wider mr-2 hidden sm:inline-block">Try Presets:</span>
            {PRESET_PROMPTS.map(preset => (
              <button
                key={preset.id}
                onClick={() => handleSelectPreset(preset)}
                class={`text-xs sm:text-sm px-3.5 py-1.5 rounded-full font-medium transition-all flex items-center gap-1.5 border cursor-pointer ${
                  selectedPreset.id === preset.id
                    ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-500/25 scale-105'
                    : 'bg-zinc-900/90 hover:bg-zinc-800 text-zinc-300 border-zinc-800 hover:border-blue-500/50 hover:text-white'
                }`}
              >
                <Wand2 class="w-3.5 h-3.5 text-blue-400" />
                <span>{preset.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Primary Interactive AI Studio & Chat Simulator Container */}
        <div class="glass-card rounded-2xl border border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-2xl bg-zinc-950/90 text-white">
          
          {/* Studio Header Bar */}
          <div class="bg-zinc-900/90 border-b border-zinc-800/80 p-3 sm:p-4 flex flex-wrap items-center justify-between gap-4">
            
            {/* Window Controls & Status */}
            <div class="flex items-center gap-3">
              <div class="flex items-center gap-1.5">
                <span class="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span class="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
              </div>
              <div class="h-4 w-px bg-border mx-1"></div>
              <div class="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                <Cpu class="w-3.5 h-3.5 text-primary animate-spin" />
                <span>HostingSpell AI Web Engine v4.2</span>
                {isGenerating && (
                  <span class="text-emerald-400 font-mono text-[11px] animate-pulse">● Compiling DOM...</span>
                )}
              </div>
            </div>

            {/* Viewport Switcher & Mode Tabs */}
            <div class="flex items-center gap-2 sm:gap-4">
              {/* Tab Switcher */}
              <div class="bg-muted p-1 rounded-lg flex items-center gap-1 text-xs">
                <button
                  onClick={() => setActiveTab('preview')}
                  class={`px-3 py-1 rounded-md font-semibold transition flex items-center gap-1.5 ${
                    activeTab === 'preview' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Eye class="w-3.5 h-3.5 text-blue-400" />
                  <span>Live Preview</span>
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  class={`px-3 py-1 rounded-md font-semibold transition flex items-center gap-1.5 ${
                    activeTab === 'code' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Code2 class="w-3.5 h-3.5 text-purple-400" />
                  <span>Code Inspector</span>
                </button>
                <button
                  onClick={() => setActiveTab('chat')}
                  class={`px-3 py-1 rounded-md font-semibold transition flex items-center gap-1.5 ${
                    activeTab === 'chat' ? 'bg-background text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <MessageSquare class="w-3.5 h-3.5 text-emerald-400" />
                  <span>AI Log</span>
                </button>
              </div>

              {/* Viewport Modes (For Preview) */}
              {activeTab === 'preview' && (
                <div class="hidden md:flex items-center gap-1 bg-muted p-1 rounded-lg">
                  <button
                    onClick={() => setViewport('desktop')}
                    title="Desktop View"
                    class={`p-1.5 rounded transition ${viewport === 'desktop' ? 'bg-background text-foreground' : 'text-muted-foreground'}`}
                  >
                    <Monitor class="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewport('tablet')}
                    title="Tablet View"
                    class={`p-1.5 rounded transition ${viewport === 'tablet' ? 'bg-background text-foreground' : 'text-muted-foreground'}`}
                  >
                    <Tablet class="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewport('mobile')}
                    title="Mobile View"
                    class={`p-1.5 rounded transition ${viewport === 'mobile' ? 'bg-background text-foreground' : 'text-muted-foreground'}`}
                  >
                    <Smartphone class="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Main Grid: Left Panel (Interactive Chat) & Right Panel (Live Rendered Canvas) */}
          <div class="grid lg:grid-cols-12 min-h-[560px] bg-background/50">
            
            {/* Left Column: Interactive Conversational Stream (4 Cols) */}
            <div class="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-border/60 p-4 flex flex-col justify-between bg-card/40">
              
              <div class="mb-3 flex items-center justify-between">
                <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  <Bot class="w-4 h-4 text-primary" />
                  <span>Co-Pilot Chat Stream</span>
                </div>
                <span class="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                  <span class="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span> Live Session
                </span>
              </div>

              {/* Scrollable Chat Message History */}
              <div ref={chatContainerRef} class="flex-1 overflow-y-auto max-h-[380px] space-y-3.5 pr-2 mb-4 scrollbar-thin">
                {chatMessages.filter(msg => msg && msg.role).map((msg, index) => (
                  <div
                    key={index}
                    class={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {msg.role === 'ai' && (
                      <div class="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center text-primary shrink-0 mt-0.5">
                        <Bot class="w-4 h-4" />
                      </div>
                    )}
                    <div class={`max-w-[85%] text-xs sm:text-sm p-3 rounded-2xl ${
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-tr-none font-medium shadow-sm'
                        : 'bg-card border border-border text-foreground rounded-tl-none space-y-1.5 shadow-sm'
                    }`}>
                      <p class="leading-relaxed">{msg.text}</p>
                      {msg.action && (
                        <div class="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 inline-block">
                          {msg.action}
                        </div>
                      )}
                    </div>
                    {msg.role === 'user' && (
                      <div class="w-7 h-7 rounded-lg bg-zinc-700 flex items-center justify-center text-white shrink-0 mt-0.5">
                        <User class="w-4 h-4" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* "Keep Chatting" Interactive Refinement Form */}
              <form onSubmit={handleRefineChatSubmit} class="relative">
                <div class="text-[11px] font-semibold text-muted-foreground mb-1.5 flex items-center justify-between">
                  <span class="flex items-center gap-1">
                    <Sparkles class="w-3 h-3 text-amber-400" /> Keep Chatting to Refine Site:
                  </span>
                </div>
                <div class="flex items-center gap-2">
                  <input
                    type="text"
                    value={chatRefinementInput}
                    onChange={(e) => setChatRefinementInput(e.target.value)}
                    placeholder="e.g., Add dark mode, insert pricing table..."
                    class="w-full bg-background border border-border/80 rounded-xl px-3 py-2 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition"
                  />
                  <Button
                    type="submit"
                    disabled={isGenerating || !chatRefinementInput.trim()}
                    size="icon"
                    className="h-8 w-8 rounded-xl bg-primary text-primary-foreground shrink-0"
                  >
                    <Send class="w-3.5 h-3.5" />
                  </Button>
                </div>

                {/* Quick Action Pills for Chat */}
                <div class="flex flex-wrap gap-1.5 mt-2">
                  <button
                    type="button"
                    onClick={() => { setChatRefinementInput('Switch to AMOLED Dark Mode'); }}
                    class="text-[10px] bg-muted hover:bg-accent px-2 py-0.5 rounded-md text-muted-foreground hover:text-foreground transition"
                  >
                    + Dark Mode
                  </button>
                  <button
                    type="button"
                    onClick={() => { setChatRefinementInput('Add 3-tier Pricing Matrix'); }}
                    class="text-[10px] bg-muted hover:bg-accent px-2 py-0.5 rounded-md text-muted-foreground hover:text-foreground transition"
                  >
                    + Pricing Table
                  </button>
                  <button
                    type="button"
                    onClick={() => { setChatRefinementInput('Include Client Testimonials'); }}
                    class="text-[10px] bg-muted hover:bg-accent px-2 py-0.5 rounded-md text-muted-foreground hover:text-foreground transition"
                  >
                    + Testimonials
                  </button>
                  <button
                    type="button"
                    onClick={() => { setChatRefinementInput('Apply Neon Cyberpunk accents'); }}
                    class="text-[10px] bg-muted hover:bg-accent px-2 py-0.5 rounded-md text-muted-foreground hover:text-foreground transition"
                  >
                    + Neon Theme
                  </button>
                </div>
              </form>

            </div>

            {/* Right Column: Live Rendered Canvas / Code Inspector (8 Cols) */}
            <div class="lg:col-span-8 p-4 sm:p-6 flex flex-col justify-between items-center bg-zinc-950/60 relative overflow-hidden">
              
              {/* Active Refinement Badge Banner */}
              {refinementBadge && (
                <div class="w-full mb-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs px-3 py-1.5 rounded-xl flex items-center justify-between animate-fade-in">
                  <span class="flex items-center gap-1.5 font-medium">
                    <CheckCircle2 class="w-4 h-4 text-emerald-400" />
                    <span>Live Change Applied: <strong>{refinementBadge}</strong></span>
                  </span>
                  <span class="text-[10px] font-mono text-emerald-300">Instant Preview Synced</span>
                </div>
              )}

              {/* Viewport Wrapper */}
              <div class={`w-full transition-all duration-300 flex-1 flex flex-col justify-center ${
                viewport === 'mobile' ? 'max-w-sm mx-auto' : viewport === 'tablet' ? 'max-w-xl mx-auto' : 'w-full'
              }`}>
                
                {/* 1. PREVIEW TAB CONTENT */}
                {activeTab === 'preview' && (
                  <div class={`w-full rounded-2xl border border-zinc-800 shadow-2xl p-6 sm:p-8 relative overflow-hidden transition-all duration-500 ${
                    activeTheme === 'neon'
                      ? 'bg-black text-white border-purple-500/50 shadow-purple-500/10'
                      : activeTheme === 'light'
                      ? 'bg-white text-zinc-900 border-zinc-200'
                      : 'bg-zinc-950 text-white border-zinc-800'
                  }`}>
                    
                    {/* Simulated Header Navigation */}
                    <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                      <div class="flex items-center gap-2 font-bold text-lg tracking-tight">
                        <div class="w-6 h-6 rounded-lg bg-blue-500 flex items-center justify-center text-white text-xs">
                          {selectedPreset.previewType === 'ecommerce' ? '🌿' : selectedPreset.previewType === 'portfolio' ? '⚡' : selectedPreset.previewType === 'clinic' ? '🩺' : '✨'}
                        </div>
                        <span>{selectedPreset.title.split(' ')[0]} Studio</span>
                      </div>
                      <div class="hidden sm:flex items-center gap-4 text-xs font-semibold text-zinc-400">
                        <span>Features</span>
                        <span>Solutions</span>
                        <span>Pricing</span>
                        <span class="px-3 py-1 bg-blue-600 text-white rounded-lg font-bold">Launch App</span>
                      </div>
                    </div>

                    {/* Simulated Dynamic Hero Content based on Preset */}
                    {selectedPreset.previewType === 'saas' && (
                      <div class="text-center py-6 space-y-4">
                        <span class="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-bold border border-blue-500/30">
                          ✨ AI Copywriter Engine v4.0
                        </span>
                        <h2 class="text-2xl sm:text-3xl font-extrabold tracking-tight">
                          Transform Raw Ideas into <span class="text-blue-400">Viral Copy</span> Instantly
                        </h2>
                        <p class="text-zinc-400 text-xs sm:text-sm max-w-md mx-auto">
                          Multi-model AI co-pilot that writes landing page copy, ad campaigns, and SEO blogs automatically.
                        </p>
                        <div class="flex justify-center gap-3 pt-2">
                          <button class="px-5 py-2.5 bg-blue-600 text-white font-bold rounded-xl text-xs shadow-lg shadow-blue-500/30">Start 14-Day Free Trial</button>
                          <button class="px-5 py-2.5 bg-zinc-800 text-zinc-300 font-semibold rounded-xl text-xs border border-zinc-700">Watch Demo</button>
                        </div>
                      </div>
                    )}

                    {selectedPreset.previewType === 'ecommerce' && (
                      <div class="py-4 space-y-4">
                        <span class="text-emerald-400 text-xs font-bold uppercase tracking-widest">100% Recycled Ocean Material</span>
                        <h2 class="text-2xl sm:text-3xl font-extrabold">The Zero-Carbon Eco Sneaker</h2>
                        <p class="text-zinc-400 text-xs sm:text-sm">Sugarcane soles & recycled thread for maximum comfort.</p>
                        <div class="flex items-center justify-between bg-zinc-900/80 p-4 rounded-xl border border-zinc-800">
                          <div>
                            <div class="text-xl font-bold text-emerald-400">$129.00</div>
                            <div class="text-[10px] text-zinc-500">Free Worldwide Shipping</div>
                          </div>
                          <button class="px-4 py-2 bg-emerald-500 text-zinc-950 font-bold rounded-lg text-xs">Add to Cart</button>
                        </div>
                      </div>
                    )}

                    {selectedPreset.previewType === 'portfolio' && (
                      <div class="py-4 space-y-4">
                        <div class="text-purple-400 font-mono text-xs">// CYBERPUNK 3D STUDIO</div>
                        <h2 class="text-2xl sm:text-3xl font-black bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                          WE SCULPT DIGITAL REALITIES
                        </h2>
                        <p class="text-zinc-400 text-xs sm:text-sm">WebGL 3D canvases, metaverse environments & futuristic UI interfaces.</p>
                        <div class="p-3 bg-purple-950/40 border border-purple-500/30 rounded-xl text-xs text-purple-200">
                          🔥 Available for Q3 2026 Enterprise Projects
                        </div>
                      </div>
                    )}

                    {selectedPreset.previewType === 'clinic' && (
                      <div class="py-4 space-y-4">
                        <span class="text-sky-400 text-xs font-semibold bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">Compassionate Healthcare</span>
                        <h2 class="text-2xl sm:text-3xl font-bold">Next-Gen Medical & Dental Care</h2>
                        <p class="text-zinc-400 text-xs sm:text-sm">Same-day appointments with top board-certified physicians.</p>
                        <div class="bg-zinc-900 p-3 rounded-xl border border-zinc-800 text-xs flex gap-2">
                          <input type="text" placeholder="Select Specialty" class="bg-zinc-950 border border-zinc-800 p-2 rounded text-xs w-full" readOnly value="General Dentistry" />
                          <button class="bg-sky-500 text-zinc-950 font-bold px-3 py-2 rounded shrink-0">Book</button>
                        </div>
                      </div>
                    )}

                    {/* Dynamically Appended Elements via "Keep Chatting" */}
                    {hasPricing && (
                      <div class="mt-6 pt-6 border-t border-white/10">
                        <div class="text-xs font-bold mb-3 flex items-center justify-between">
                          <span class="text-blue-400 uppercase tracking-wider text-[10px]">Injected Component: Pricing Matrix</span>
                          <span class="text-[10px] text-zinc-500">Auto-Generated</span>
                        </div>
                        <div class="grid grid-cols-3 gap-2 text-center text-xs">
                          <div class="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                            <div class="font-bold text-[11px]">Starter</div>
                            <div class="text-xs font-extrabold text-blue-400 mt-1">$19/mo</div>
                          </div>
                          <div class="bg-blue-600/20 p-2.5 rounded-lg border border-blue-500/40 relative">
                            <span class="absolute -top-2 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-[8px] font-bold px-1.5 py-0.2 rounded-full">Pro</span>
                            <div class="font-bold text-[11px]">Growth</div>
                            <div class="text-xs font-extrabold text-blue-400 mt-1">$49/mo</div>
                          </div>
                          <div class="bg-zinc-900 p-2.5 rounded-lg border border-zinc-800">
                            <div class="font-bold text-[11px]">Enterprise</div>
                            <div class="text-xs font-extrabold text-blue-400 mt-1">$199/mo</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {hasTestimonials && (
                      <div class="mt-4 pt-4 border-t border-white/10">
                        <div class="text-[10px] font-bold text-amber-400 mb-2 uppercase tracking-wider">Verified Reviews</div>
                        <div class="bg-zinc-900/60 p-2.5 rounded-lg border border-zinc-800 text-[11px] text-zinc-300 flex items-center justify-between">
                          <span>"Generated our full agency site in 2 minutes. Unbelievable speed!"</span>
                          <span class="text-amber-400 font-bold">★★★★★</span>
                        </div>
                      </div>
                    )}

                  </div>
                )}

                {/* 2. CODE INSPECTOR TAB */}
                {activeTab === 'code' && (
                  <div class="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 font-mono text-xs text-zinc-300 relative overflow-hidden">
                    <div class="flex items-center justify-between border-b border-zinc-800 pb-3 mb-3 text-zinc-400 text-[11px]">
                      <span class="flex items-center gap-1.5">
                        <Terminal class="w-3.5 h-3.5 text-purple-400" /> generated-index.html
                      </span>
                      <button
                        onClick={copyCodeToClipboard}
                        class="flex items-center gap-1 px-2.5 py-1 bg-zinc-800 hover:bg-zinc-700 rounded text-zinc-200 transition"
                      >
                        {codeCopied ? <Check class="w-3 h-3 text-emerald-400" /> : <Copy class="w-3 h-3" />}
                        <span>{codeCopied ? 'Copied!' : 'Copy Code'}</span>
                      </button>
                    </div>
                    <pre class="overflow-x-auto max-h-[320px] text-[11px] leading-relaxed text-blue-300/90 scrollbar-thin">
                      {SAMPLE_CODE[selectedPreset.previewType]?.html}
                    </pre>
                  </div>
                )}

                {/* 3. CHAT / AI ENGINE LOG TAB */}
                {activeTab === 'chat' && (
                  <div class="w-full bg-zinc-950 border border-zinc-800 rounded-2xl p-4 font-mono text-xs text-zinc-300 space-y-3">
                    <div class="text-xs font-bold text-emerald-400 border-b border-zinc-800 pb-2 flex items-center justify-between">
                      <span>AI Execution & AST Compilation Log</span>
                      <span class="text-[10px] text-zinc-500">Latency: 42ms</span>
                    </div>
                    <div class="space-y-1.5 text-[11px] text-zinc-400">
                      <div>[0.00s] Parsing natural language prompt specs...</div>
                      <div class="text-blue-400">[0.12s] Resolving HSL color variables and layout tokens...</div>
                      <div class="text-purple-400">[0.45s] Constructing AST for HTML5 & Tailwind CSS components...</div>
                      <div class="text-emerald-400">[0.88s] Validating responsive viewports & accessibility (WCAG 2.1 AAA)...</div>
                      <div class="text-amber-400">[1.20s] Binding NVMe Edge Server hot-reload listener...</div>
                      <div class="text-white font-bold">[1.40s] Ready for user chat interaction!</div>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom Canvas Footer Callout */}
              <div class="w-full mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between text-xs text-muted-foreground gap-3">
                <div class="flex items-center gap-2">
                  <Globe class="w-4 h-4 text-primary" />
                  <span>Hosted on HostingSpell High-Speed NVMe Edge</span>
                </div>
                <a
                  href="#ai-prompt-modal"
                  class="inline-flex items-center gap-1.5 font-bold text-primary hover:underline text-xs"
                >
                  <span>Build your real site now with AI &rarr;</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
