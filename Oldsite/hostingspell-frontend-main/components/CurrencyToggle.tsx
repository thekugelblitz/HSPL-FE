"use client";

import { Button } from "@/components/ui/button"
import { useCurrency } from "@/context/CurrencyContext"
import { motion, AnimatePresence } from "framer-motion"

export function CurrencyToggle() {
    const { currency, setCurrency, loading } = useCurrency();

    // Don't render toggle until currency is determined
    if (loading || !currency) return null;

    const toggleCurrency = () => {
        setCurrency(currency === "INR" ? "USD" : "INR")
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleCurrency}
            className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white dark:bg-black dark:border-gray-800 overflow-hidden"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={currency}
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: -90, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-lg block"
                >
                    {currency === "INR" ? "₹" : "$"}
                </motion.span>
            </AnimatePresence>
            <span className="sr-only">Toggle currency</span>
        </Button>
    )
}
