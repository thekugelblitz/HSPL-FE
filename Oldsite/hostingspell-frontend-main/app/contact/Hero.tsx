import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils";
import ChatButton from "@/components/shared/ChatButton"

export function Hero() {
    return (
        <section className="relative bg-background dark:bg-background">
            {/* Pattern background */}
            <div
                className={cn(
                    "absolute inset-0 z-0",
                    "[background-size:20px_20px]",
                    "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
                    "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]",
                )}
            />

            {/* Content */}
            <div className="container relative z-20 mx-auto px-4 mt-16 md:pt-8 md:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-foreground">
                        <span className="text-blue-600">NEED HELP?</span>
                    </h1>

                    <p className="mt-6 text-xl text-muted-foreground text-balance">
                        Have any questions or need extra assistance?
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://2hs.in/ticket" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto dark:text-white">
                                SUBMIT A REQUEST →
                            </Button>
                        </a>

                        <ChatButton />
                    </div>
                </div>
            </div>

            {/* Radial mask overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        </section>

    )
}
