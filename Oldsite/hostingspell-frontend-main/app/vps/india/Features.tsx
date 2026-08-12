import { Gauge, HardDrive, Shield, Cpu, Network, TrendingUp } from "lucide-react";
import { INDIA_VPS_FEATURES } from "@/lib/constants-vps-india";

const icons = [
    <HardDrive className="h-7 w-7 text-blue-500" key="storage" />,
    <Cpu className="h-7 w-7 text-green-500" key="cpu" />,
    <Network className="h-7 w-7 text-orange-500" key="network" />,
    <Gauge className="h-7 w-7 text-purple-500" key="kvm" />,
    <TrendingUp className="h-7 w-7 text-pink-500" key="scale" />,
    <Shield className="h-7 w-7 text-red-500" key="security" />,
];

export function Features() {
    return (
        <section className="py-16 md:py-24 bg-background dark:bg-background" id="features">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-center mb-14">
                    <p className="text-primary font-bold mb-2 text-sm uppercase tracking-wide">
                        Why Choose HostingSpell
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Enterprise-Grade{" "}
                        <span className="text-blue-600">India VPS Infrastructure</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Purpose-built for Indian businesses that demand local performance, rock-solid uptime,
                        and transparent pricing — without compromising on control or security.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {INDIA_VPS_FEATURES.map((feature, index) => (
                        <div
                            key={feature.title}
                            className="bg-card dark:bg-card border border-border rounded-xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                                {icons[index]}
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
