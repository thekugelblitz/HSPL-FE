// src/components/blocks/PlanComparisonTable.tsx
import React, { useState, useMemo } from 'react';
import { 
  Check, 
  X, 
  ChevronDown, 
  ChevronUp, 
  Info, 
  Server, 
  Zap, 
  ShieldCheck, 
  Sliders, 
  ArrowRight,
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { comparisonData } from '../../lib/comparisonData';
import type { FeatureRow, PlanHeader } from '../../lib/comparisonData';

interface PlanComparisonTableProps {
  /**
   * Optional service key to lock the table to a single comparison.
   * If not provided, a tabbed switcher will be rendered.
   * Options: 'cloud' | 'premium' | 'vps' | 'reseller' | 'webuzo' | 'webuzoreseller' | 'wordpress' | 'nodejs' | 'combo'
   */
  service?: 'cloud' | 'premium' | 'vps' | 'reseller' | 'webuzo' | 'webuzoreseller' | 'wordpress' | 'nodejs' | 'combo';
}

export const PlanComparisonTable: React.FC<PlanComparisonTableProps> = ({ service }) => {
  const isLocked = !!service;
  
  // Tabs to display if not locked
  const serviceTabs = [
    { key: 'cloud', label: 'Cloud NVMe', icon: Server },
    { key: 'premium', label: 'Premium cPanel', icon: Sparkles },
    { key: 'webuzo', label: 'Webuzo Shared', icon: Zap },
    { key: 'reseller', label: 'Reseller WHM', icon: ShieldCheck },
    { key: 'webuzoreseller', label: 'Webuzo Reseller', icon: ShieldCheck },
    { key: 'vps', label: 'KVM VPS', icon: Sliders },
    { key: 'wordpress', label: 'WordPress', icon: Zap },
    { key: 'nodejs', label: 'Node.js', icon: ArrowRight },
    { key: 'combo', label: 'Free Domain Combo', icon: HelpCircle },
  ];

  const [activeService, setActiveService] = useState<string>(service || 'cloud');
  const [showDifferencesOnly, setShowDifferencesOnly] = useState<boolean>(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({});

  const currentData = useMemo(() => {
    return comparisonData[activeService] || comparisonData.cloud;
  }, [activeService]);

  // Helper to toggle category expansion
  const toggleCategory = (categoryName: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryName]: prev[categoryName] === false ? true : false
    }));
  };

  // Helper to check if row has different values across the active plans
  const isRowDifferent = (row: FeatureRow, plans: PlanHeader[]) => {
    if (plans.length <= 1) return false;
    const firstVal = row.values[plans[0].name];
    return plans.some(plan => row.values[plan.name] !== firstVal);
  };

  // Process and filter the categories and features
  const filteredCategories = useMemo(() => {
    return currentData.categories.map(category => {
      const filteredFeatures = category.features.filter(row => {
        if (!showDifferencesOnly) return true;
        return isRowDifferent(row, currentData.plans);
      });

      return {
        ...category,
        features: filteredFeatures
      };
    }).filter(category => category.features.length > 0);
  }, [currentData, showDifferencesOnly]);

  const toggleAllCategories = (expand: boolean) => {
    const nextState: Record<string, boolean> = {};
    currentData.categories.forEach(cat => {
      nextState[cat.name] = expand;
    });
    setExpandedCategories(nextState);
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden border-t border-border/40">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 max-w-screen-xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary mb-3">
            <Sliders className="w-3.5 h-3.5" /> Full Feature Matrix
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            Compare Specs Side-by-Side
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            {isLocked 
              ? currentData.subtitle 
              : "Select a hosting tier to explore deep hardware allocations, software inclusions, and SLA limits."}
          </p>
        </div>

        {/* Tab switcher for service types (Render only if not locked) */}
        {!isLocked && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 p-1.5 bg-muted/30 border border-border/40 rounded-2xl max-w-4xl mx-auto backdrop-blur-sm">
            {serviceTabs.map((tab) => {
              const TabIcon = tab.icon;
              const isActive = activeService === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => {
                    setActiveService(tab.key);
                    setShowDifferencesOnly(false);
                    setExpandedCategories({});
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-200 ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]' 
                      : 'text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                  }`}
                >
                  <TabIcon className="w-4 h-4 shrink-0" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Filters and Utility Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-6 p-4 bg-muted/20 border border-border/50 rounded-2xl">
          <div className="flex items-center gap-3">
            <label className="relative flex items-center gap-2.5 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={showDifferencesOnly}
                onChange={(e) => setShowDifferencesOnly(e.target.checked)}
                className="peer sr-only"
              />
              <div className="h-5 w-9 rounded-full bg-muted border border-border transition-all peer-checked:bg-primary peer-checked:border-primary after:absolute after:top-[3px] after:left-[3px] after:h-3.5 after:w-3.5 after:rounded-full after:bg-muted-foreground after:transition-all peer-checked:after:translate-x-4 peer-checked:after:bg-primary-foreground"></div>
              <span className="text-xs sm:text-sm font-bold text-foreground">Show Differences Only</span>
            </label>
          </div>

          <div className="flex items-center gap-2 justify-end">
            <button
              onClick={() => toggleAllCategories(true)}
              className="px-3 py-1.5 text-xs font-semibold hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-all"
            >
              Expand All
            </button>
            <span className="text-border">|</span>
            <button
              onClick={() => toggleAllCategories(false)}
              className="px-3 py-1.5 text-xs font-semibold hover:bg-muted rounded-lg text-muted-foreground hover:text-foreground transition-all"
            >
              Collapse All
            </button>
          </div>
        </div>

        {/* Swipe Horizontal Cue for Mobile */}
        <div className="block lg:hidden text-right mb-2">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full animate-pulse">
            Swipe horizontally to compare ➔
          </span>
        </div>

        {/* Comparison Table Card */}
        <div className="glass-card rounded-3xl border border-border/80 glow-card shadow-2xl overflow-hidden backdrop-blur-xl bg-card/40">
          <div className="overflow-x-auto relative">
            <table className="w-full text-left border-collapse min-w-[768px] table-fixed">
              
              {/* Table Head (Sticky) */}
              <thead className="sticky top-0 z-30 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
                <tr>
                  {/* Features Column Head */}
                  <th className="sticky left-0 z-40 bg-background/95 p-6 w-[240px] text-xs font-black text-muted-foreground uppercase tracking-wider border-r border-border/40 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.1)]">
                    Specification List
                  </th>
                  
                  {/* Plan Columns Head */}
                  {currentData.plans.map((plan) => (
                    <th 
                      key={plan.name} 
                      className={`p-6 text-center align-top relative ${
                        plan.isPopular 
                          ? 'bg-primary/[0.04] border-x border-primary/20' 
                          : ''
                      }`}
                    >
                      {plan.isPopular && (
                        <div className="absolute top-0 inset-x-0 flex justify-center">
                          <span className="text-[9px] font-black uppercase tracking-wider bg-primary text-primary-foreground px-3 py-0.5 rounded-b-lg shadow-sm">
                            POPULAR CHOICE 🔥
                          </span>
                        </div>
                      )}
                      
                      <div className="space-y-1.5 pt-2">
                        <div className="text-xs font-black text-muted-foreground uppercase tracking-wider">
                          {plan.tagline}
                        </div>
                        <div className="text-xl sm:text-2xl font-black text-foreground">
                          {plan.name}
                        </div>
                        <div className="flex items-baseline justify-center gap-0.5">
                          <span className="text-2xl font-black text-primary">{plan.price}</span>
                          <span className="text-xs font-semibold text-muted-foreground">{plan.billingCycle}</span>
                        </div>
                        {plan.discount && (
                          <div className="inline-block text-[10px] font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded uppercase">
                            {plan.discount}
                          </div>
                        )}
                        <div className="pt-2">
                          <a 
                            href={plan.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className={`inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl text-xs font-extrabold transition-all duration-200 ${
                              plan.isPopular 
                                ? 'bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/25' 
                                : 'bg-muted text-foreground hover:bg-muted/80'
                            }`}
                          >
                            <span>Buy Plan</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>

              {/* Table Body */}
              <tbody className="divide-y divide-border/40 text-sm">
                
                {filteredCategories.map((category) => {
                  const isCatExpanded = expandedCategories[category.name] !== false;
                  
                  return (
                    <React.Fragment key={category.name}>
                      {/* Category Header Row */}
                      <tr className="bg-muted/30">
                        <td 
                          colSpan={currentData.plans.length + 1} 
                          className="py-3 px-6 font-black text-foreground text-xs uppercase tracking-wider cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => toggleCategory(category.name)}
                        >
                          <div className="flex items-center gap-2">
                            {isCatExpanded ? (
                              <ChevronUp className="w-4 h-4 text-primary shrink-0" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-primary shrink-0" />
                            )}
                            <span>{category.name}</span>
                            <span className="ml-2 text-[10px] text-muted-foreground font-semibold uppercase">
                              ({category.features.length} parameters)
                            </span>
                          </div>
                        </td>
                      </tr>

                      {/* Feature Rows */}
                      {isCatExpanded && category.features.map((row) => (
                        <tr 
                          key={row.name} 
                          className="hover:bg-muted/10 transition-colors group/row"
                        >
                          {/* Feature Name Column (Sticky left) */}
                          <td className="sticky left-0 z-20 bg-background/95 p-4 font-bold text-foreground border-r border-border/40 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.1)] flex items-center justify-between group-hover/row:bg-muted/20 transition-all">
                            <span className="text-xs sm:text-sm">{row.name}</span>
                            {row.description && (
                              <div className="group/tooltip relative inline-block ml-1.5 cursor-help text-muted-foreground hover:text-foreground shrink-0">
                                <Info className="w-3.5 h-3.5" />
                                <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 w-60 rounded-xl bg-popover border border-border p-3 text-[11px] leading-relaxed font-semibold text-popover-foreground opacity-0 shadow-xl transition-all duration-200 group-hover/tooltip:opacity-100 group-hover/tooltip:-translate-y-1 z-50">
                                  {row.description}
                                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-popover"></div>
                                </div>
                              </div>
                            )}
                          </td>

                          {/* Value Columns */}
                          {currentData.plans.map((plan) => {
                            const value = row.values[plan.name];
                            return (
                              <td 
                                key={plan.name} 
                                className={`p-4 text-center border-b border-border/40 font-medium ${
                                  plan.isPopular 
                                    ? 'bg-primary/[0.02] border-x border-primary/10' 
                                    : ''
                                }`}
                              >
                                {typeof value === 'boolean' ? (
                                  value ? (
                                    <div className="inline-flex p-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                                      <Check className="w-4 h-4" />
                                    </div>
                                  ) : (
                                    <div className="inline-flex p-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive">
                                      <X className="w-4 h-4" />
                                    </div>
                                  )
                                ) : (
                                  <span className={`text-xs sm:text-sm ${
                                    value.toString().toLowerCase().includes('unlimited') || 
                                    value.toString().toLowerCase().includes('free')
                                      ? 'text-primary font-bold' 
                                      : 'text-foreground/90'
                                  }`}>
                                    {value}
                                  </span>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </React.Fragment>
                  );
                })}

                {/* Bottom CTA Row */}
                <tr>
                  <td className="sticky left-0 z-20 bg-background/95 p-6 border-r border-border/40 shadow-[4px_0_8px_-4px_rgba(0,0,0,0.1)]"></td>
                  {currentData.plans.map((plan) => (
                    <td 
                      key={plan.name} 
                      className={`p-6 text-center ${
                        plan.isPopular 
                          ? 'bg-primary/[0.04] border-x border-primary/20' 
                          : ''
                      }`}
                    >
                      <a 
                        href={plan.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 ${
                          plan.isPopular 
                            ? 'bg-primary text-primary-foreground hover:opacity-90 shadow-md shadow-primary/25 hover:scale-[1.02]' 
                            : 'bg-muted text-foreground hover:bg-muted/80 hover:scale-[1.02]'
                        }`}
                      >
                        <span>Choose {plan.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>

            </table>
          </div>
        </div>

        {/* Small footprint info pill */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-muted/40 border border-border/80 text-muted-foreground text-xs font-semibold shadow-sm">
            <Info className="w-3.5 h-3.5 text-primary shrink-0" />
            <span>All pricing is subject to standard TOS and billing policies. 30-day money-back guarantee is applicable on hosting service fees.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
