"use client";

import { ReactNode } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

export type LandscapeCardBaseProps = {
	image: string;
	imagedark?: string;
	variant?: "full" | "half";
	useGridSpan?: boolean; // when true, applies md:col-span-* like in HostingTabs
	reverseOnDesktop?: boolean; // when true, image appears on the left on desktop
	priority?: boolean;
	className?: string;
	imageClassName?: string;
	contentClassName?: string;
	overlayTopRight?: ReactNode;
	overlayBottomLeft?: ReactNode;
	children?: ReactNode; // content area on the text side
};

export default function LandscapeCardBase({
	image,
	imagedark,
	variant = "full",
	useGridSpan = false,
	reverseOnDesktop = false,
	priority = false,
	className = "",
	imageClassName = "",
	contentClassName = "",
	overlayTopRight,
	overlayBottomLeft,
	children,
}: LandscapeCardBaseProps) {
	const span = useGridSpan
		? variant === "full"
			? "md:col-span-3"
			: "md:col-span-2"
		: "";
	const minHeight = variant === "full" ? "md:min-h-[400px]" : "md:min-h-[300px]";

	const desktopOrder = reverseOnDesktop ? "md:order-first" : "md:order-last";

	return (
		<Card
			className={`rounded-2xl border shadow-sm overflow-hidden flex flex-col md:flex-row ${span} ${minHeight} py-0 ${className}`}
		>
			{/* Image side */}
			<div
				className={`relative w-full aspect-square md:w-[40%] md:aspect-square order-first ${desktopOrder} ${imageClassName}`}
			>
				{/* Light theme image */}
				<Image
					src={image}
					alt=""
					fill
					className="object-contain block dark:hidden"
					priority={priority}
				/>
				{/* Dark theme image (fallbacks to same image if none provided) */}
				<Image
					src={imagedark || image}
					alt=""
					fill
					className="object-contain hidden dark:block"
					priority={priority}
				/>

				{/* Optional overlays on image */}
				{overlayTopRight && (
					<div className="absolute top-4 right-4 z-10">{overlayTopRight}</div>
				)}
				{overlayBottomLeft && (
					<div className="absolute bottom-4 left-4 z-10">{overlayBottomLeft}</div>
				)}
			</div>

			{/* Content side */}
			<div className={`flex flex-col justify-center p-6 md:p-10 flex-1 ${contentClassName}`}>
				{children}
			</div>
		</Card>
	);
}
