import * as React from "react";
import { Server, Globe, Cpu, Check, ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const tabsData = [
  {
    id: "hosting",
    label: "Hosting",
    icon: Server,
    title: "Optimized Cloud Hosting for Every Need",
    description: "Launch your website in minutes with our high-performance cloud infrastructure. Pre-configured for speed and security.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2034&ixlib=rb-4.0.3",
    features: [
      "NVMe SSD Storage",
      "Free SSL Certificates",
      "LiteSpeed Web Server",
      "Daily Automated Backups"
    ],
    cta: "View Hosting Plans",
    href: "/cloud-hosting"
  },
  {
    id: "domains",
    label: "Domains",
    icon: Globe,
    title: "Secure Your Perfect Domain Name",
    description: "Your digital identity starts here. Register, transfer, or manage your domains with our easy-to-use control panel.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072&ixlib=rb-4.0.3",
    features: [
      "Free WHOIS Privacy",
      "Instant Activation",
      "DNS Management",
      "Domain Forwarding"
    ],
    cta: "Search Domains",
    href: "/domain"
  },
  {
    id: "vps",
    label: "VPS",
    icon: Cpu,
    title: "Dedicated Power & Complete Control",
    description: "Scale your applications with dedicated resources. Root access and custom server configurations available.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    features: [
      "Full Root Access",
      "Dedicated IP Address",
      "KVM Virtualization",
      "Custom OS Installation"
    ],
    cta: "Deploy a Server",
    href: "/vps"
  }
];

export function FeatureTabs() {
  const [activeTab, setActiveTab] = React.useState("hosting");

  const currentData = tabsData.find(t => t.id === activeTab) || tabsData[0];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-screen-xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">Hosting That Grows With You</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Everything you need to build, scale, and manage your online presence in one place.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-muted/50 p-1.5 rounded-xl border border-border/50">
            {tabsData.map(tab => {
              const TabIcon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-background text-foreground shadow-sm ring-1 ring-border"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  <TabIcon className={`w-4 h-4 ${activeTab === tab.id ? "text-primary" : ""}`} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content */}
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 z-10 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                {(() => {
                  const CurrentIcon = currentData.icon;
                  return <CurrentIcon className="w-4 h-4" />;
                })()}
                {currentData.label} Services
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-4">{currentData.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {currentData.description}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {currentData.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="bg-primary/10 p-1 rounded-full shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="font-medium text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a href={currentData.href}>
                  <Button className="gap-2 px-8 h-12 text-base">
                    {currentData.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Content - Visual */}
            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl z-10 border border-border/50">
              <img 
                src={currentData.image} 
                alt={currentData.title}
                width={600}
                height={400}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
            </div>

          </div>
          
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
