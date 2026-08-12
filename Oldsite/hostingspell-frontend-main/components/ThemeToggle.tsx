"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function ThemeToggle() {
	const { theme, setTheme, systemTheme } = useTheme();
	const [mounted, setMounted] = React.useState(false);
	const resolvedTheme = theme === "system" ? systemTheme : theme;

	React.useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	const toggleTheme = () => {
		setTheme(resolvedTheme === "light" ? "dark" : "light");
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={toggleTheme}
			className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white dark:bg-black dark:border-gray-800 overflow-hidden relative"
		>
			{/* SUN */}
			<motion.div
				initial={false}
				animate={{
					y: resolvedTheme === "light" ? 0 : 20,
					opacity: resolvedTheme === "light" ? 1 : 0,
				}}
				transition={{ duration: 0.5, ease: "easeInOut" }}
				className="absolute flex items-center justify-center"
			>
				<Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
			</motion.div>

			{/* MOON */}
			<motion.div
				initial={false}
				animate={{
					y: resolvedTheme === "dark" ? 0 : -20,
					opacity: resolvedTheme === "dark" ? 1 : 0,
				}}
				transition={{ duration: 0.5, ease: "easeInOut" }}
				className="absolute flex items-center justify-center"
			>
				<Moon className="h-[1.2rem] w-[1.2rem] text-cyan-300" />
			</motion.div>

			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
