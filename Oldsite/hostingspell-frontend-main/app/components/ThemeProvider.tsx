"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="system"      // or "dark" if you prefer dark by default
            enableSystem
            disableTransitionOnChange
            {...props}                // let consumers override if needed
        >
            {children}
        </NextThemesProvider>
    );
}
