"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { useLocation } from "./LocationContext";

type Currency = "INR" | "USD";

interface CurrencyContextType {
	currency: Currency;
	setCurrency: (c: Currency) => void;
	loading: boolean;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
	const { location, loading: locationLoading } = useLocation();
	const [currency, setCurrency] = useState<Currency>("USD"); // temporary default
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (!locationLoading && location) {
			const stored = localStorage.getItem("currency") as Currency | null;
			if (stored) {
				setCurrency(stored);
			} else {
				const country = location.country_name?.toLowerCase() || "";
				const countryCode = location.country?.toLowerCase() || "";
				setCurrency((country === "india" || countryCode === "in") ? "INR" : "USD");
			}
			setLoading(false); // currency is now determined
		}
	}, [location, locationLoading]);

	// Persist currency changes
	useEffect(() => {
		if (!loading) localStorage.setItem("currency", currency);
	}, [currency, loading]);

	return (
		<CurrencyContext.Provider value={{ currency, setCurrency, loading }}>
			{children}
		</CurrencyContext.Provider>
	);
}

export function useCurrency() {
	const ctx = useContext(CurrencyContext);
	if (!ctx) throw new Error("useCurrency must be used within a CurrencyProvider");
	return ctx;
}
