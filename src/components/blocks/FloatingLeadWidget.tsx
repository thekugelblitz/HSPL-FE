import React, { useState } from 'react';
import { MessageSquare, PhoneCall, Send, X, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export function FloatingLeadWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', contact: '', plan: 'Cloud NVMe Hosting', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsOpen(false);
      setFormData({ name: '', contact: '', plan: 'Cloud NVMe Hosting', message: '' });
    }, 3500);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Lead Capture Popup Modal */}
      {isOpen && (
        <div className="mb-4 w-[340px] sm:w-[380px] bg-zinc-950 border border-white/15 rounded-2xl p-5 shadow-2xl backdrop-blur-2xl text-white animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                <PhoneCall className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Instant Lead & Sales Assistance</h4>
                <p className="text-[11px] text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Advisor Online (Avg &lt; 5m response)
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-zinc-400 hover:text-white p-1 rounded-md hover:bg-white/10 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
              <h5 className="font-bold text-base">Request Submitted!</h5>
              <p className="text-xs text-zinc-300 leading-relaxed">
                Our hosting migration expert will contact you via WhatsApp/Email within 5 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block text-zinc-400 font-medium mb-1">Your Name</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Alex" 
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Email or WhatsApp Number</label>
                <input 
                  type="text" 
                  required 
                  placeholder="alex@example.com or +91..." 
                  value={formData.contact}
                  onChange={e => setFormData({ ...formData, contact: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Hosting Interested In</label>
                <select 
                  value={formData.plan}
                  onChange={e => setFormData({ ...formData, plan: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-blue-500"
                >
                  <option>Cloud NVMe Hosting ($1.29/mo)</option>
                  <option>cPanel Premium Hosting ($1.99/mo)</option>
                  <option>KVM VPS Hosting ($10/mo)</option>
                  <option>Free Website Migration Inquiry</option>
                  <option>Reseller WHM Hosting</option>
                </select>
              </div>

              <div>
                <label className="block text-zinc-400 font-medium mb-1">Message / Requirements</label>
                <textarea 
                  rows={2}
                  placeholder="Tell us what you're building..." 
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-white placeholder:text-zinc-600 focus:outline-none focus:border-blue-500 resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 font-bold text-xs text-white transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 mt-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Get Instant Quote & Migration Offer</span>
              </button>

              <p className="text-[10px] text-zinc-500 text-center pt-1">
                🔒 100% Privacy Protection • Zero Spam Guarantee
              </p>
            </form>
          )}
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-2xl hover:scale-105 transition-all shadow-blue-500/30 border border-white/20"
      >
        <MessageSquare className="w-4 h-4 animate-pulse" />
        <span className="hidden sm:inline">24/7 Live Sales & Migration Help</span>
        <span className="sm:hidden">Support</span>
      </button>
    </div>
  );
}
