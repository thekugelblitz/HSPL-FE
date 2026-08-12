'use client';

export default function GlowSpots() {
    return (
        <div className="dark:block hidden fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Top Left */}
            <div className="absolute w-[400px] h-[400px] top-[-10%] left-[-10%] rounded-full opacity-[0.15] blur-[160px] bg-[radial-gradient(circle,#3b82f6_0%,transparent_70%)] animate-pulse" />
            {/* Center Left */}
            <div className="absolute w-[300px] h-[300px] top-[35%] left-[10%] rounded-full opacity-[0.1] blur-[160px] bg-[radial-gradient(circle,#2563eb_0%,transparent_70%)] animate-pulse" />
            {/* Center Right */}
            <div className="absolute w-[350px] h-[350px] top-[45%] left-[70%] rounded-full opacity-[0.1] blur-[160px] bg-[radial-gradient(circle,#1d4ed8_0%,transparent_70%)] animate-pulse" />
            {/* Bottom Right */}
            <div className="absolute w-[400px] h-[400px] bottom-[-15%] right-[-10%] rounded-full opacity-[0.15] blur-[160px] bg-[radial-gradient(circle,#60a5fa_0%,transparent_70%)] animate-pulse" />
        </div>
    );
}
