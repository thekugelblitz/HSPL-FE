import { INDIA_VPS_USE_CASES } from "@/lib/constants-vps-india";

export function UseCases() {
    return (
        <section className="py-16 md:py-24 bg-background dark:bg-background" id="use-cases">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-center mb-14">
                    <p className="text-primary font-bold mb-2 text-sm uppercase tracking-wide">
                        Built for Every Workload
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        India VPS Use Cases That{" "}
                        <span className="text-blue-600">Drive Results</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        From solo developers to enterprise teams — our affordable India VPS adapts to
                        your workload, whether you are launching a startup or running mission-critical apps.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {INDIA_VPS_USE_CASES.map((useCase) => (
                        <div
                            key={useCase.title}
                            className="bg-card dark:bg-card border border-border rounded-xl p-6 flex flex-col hover:shadow-md transition-shadow"
                        >
                            <span className="inline-flex self-start text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 mb-4">
                                {useCase.tag}
                            </span>
                            <h3 className="text-base font-bold mb-2 leading-snug">{useCase.title}</h3>
                            <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                                {useCase.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
