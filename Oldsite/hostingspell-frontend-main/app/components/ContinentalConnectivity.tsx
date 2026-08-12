'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLocation } from "@/context/LocationContext";
import CustomWorldMap from '@/components/ui/CustomWorldMap';


// Custom Mappign for location
const originalPoints = [
	{ lat: 25.0902, lng: -115.7129, label: 'United States', flag: '/flags/usa.png', available: true },
	{ lat: 40.0902, lng: -75.7129, label: 'Newyork', flag: '/flags/usa.png', available: true },
	{ lat: 38.0902, lng: -105.7129, label: 'Canada', flag: '/flags/canada.png', available: false },
	{ lat: 40.5074, lng: -15.1278, label: 'United Kingdom', flag: '/flags/united-kingdom.png', available: true },
	{ lat: 27.5074, lng: -8.1278, label: 'France', flag: '/flags/france.png', available: true },
	{ lat: -3.5937, lng: 60.9629, label: 'India', flag: '/flags/india.png', available: true },
	{ lat: -20.3521, lng: 93.8198, label: 'Singapore', flag: '/flags/singapore.png', available: true },
	{ lat: -50.3521, lng: 120.8198, label: 'Australia', flag: '/flags/australia.png', available: true },
];

// Real geo locations (used only to find closest match)
const realGeoData: Record<string, { lat: number; lng: number }> = {
	'United States': { lat: 37.0902, lng: -95.7129 },
	'Newyork': { lat: 0, lng: 0 },
	'Canada': { lat: 0, lng: 0 },
	'United Kingdom': { lat: 55.3781, lng: -3.4360 },
	'France': { lat: 46.6034, lng: 1.8883 },
	'India': { lat: 20.5937, lng: 78.9629 },
	'Singapore': { lat: 1.3521, lng: 103.8198 },
	'Australia': { lat: 0, lng: 0 },
};

function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
	const toRad = (v: number) => (v * Math.PI) / 180;
	const R = 6371; // km
	const dLat = toRad(lat2 - lat1);
	const dLon = toRad(lon2 - lon1);
	const a =
		Math.sin(dLat / 2) ** 2 +
		Math.cos(toRad(lat1)) *
		Math.cos(toRad(lat2)) *
		Math.sin(dLon / 2) ** 2;
	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	return R * c;
}

export default function ContinentalConnectivity() {
	const [points, setPoints] = useState(originalPoints);
	const { location, loading } = useLocation();

	useEffect(() => {
		const fetchUserCountry = async () => {
			try {

				// Only run after location is loaded
				if (!location || loading) return;

				const userLat = location.latitude ?? 40.7128; // fallback New York
				const userLng = location.longitude ?? -74.006;
				const userCountry = location.country_name?.toLowerCase() ?? "united states";

				// STEP 1: Distance-based closest match
				let closestPoint = null;
				let closestDistance = Infinity

				for (const point of originalPoints) {
					const real = realGeoData[point.label];
					if (!real) continue;

					const dist = getDistance(userLat, userLng, real.lat, real.lng);
					if (dist < closestDistance) {
						closestDistance = dist;
						closestPoint = point;
					}
				}

				// STEP 2: Use distance match if found
				if (closestPoint) {
					const updatedPoints = originalPoints.map((point) =>
						point.label === closestPoint.label
							? { ...point, label: 'Closest to You' }
							: point
					);
					setPoints(updatedPoints);
					return;
				}

				// STEP 3: Fallback to manual mapping by country name
				const manualMap: Record<string, string> = {
					// Americas
					'united states': 'United States', 'canada': 'United States', 'mexico': 'United States',
					'brazil': 'United States', 'argentina': 'United States', 'colombia': 'United States',
					'venezuela': 'United States', 'chile': 'United States', 'ecuador': 'United States',
					'peru': 'United States', 'bolivia': 'United States', 'paraguay': 'United States',
					'uruguay': 'United States', 'guyana': 'United States', 'suriname': 'United States',
					'panama': 'United States', 'costa rica': 'United States', 'guatemala': 'United States',
					'belize': 'United States', 'honduras': 'United States', 'el salvador': 'United States',
					'nicaragua': 'United States', 'jamaica': 'United States', 'haiti': 'United States',
					'dominican republic': 'United States', 'cuba': 'United States', 'bahamas': 'United States',
					'barbados': 'United States', 'trinidad and tobago': 'United States',

					// Europe
					'united kingdom': 'United Kingdom', 'ireland': 'United Kingdom',
					'france': 'France', 'germany': 'France', 'italy': 'France', 'spain': 'France',
					'portugal': 'France', 'belgium': 'France', 'netherlands': 'United Kingdom',
					'luxembourg': 'France', 'switzerland': 'France', 'austria': 'France',
					'denmark': 'United Kingdom', 'norway': 'United Kingdom', 'sweden': 'United Kingdom',
					'finland': 'United Kingdom', 'poland': 'United Kingdom', 'czech republic': 'United Kingdom',
					'slovakia': 'United Kingdom', 'hungary': 'France', 'greece': 'France', 'romania': 'France',
					'bulgaria': 'France', 'croatia': 'France', 'slovenia': 'France',
					'lithuania': 'United Kingdom', 'latvia': 'United Kingdom', 'estonia': 'United Kingdom',

					// South Asia
					'india': 'India', 'nepal': 'India', 'pakistan': 'India', 'bangladesh': 'India',
					'sri lanka': 'India', 'maldives': 'India', 'bhutan': 'India', 'afghanistan': 'India',

					// East & Southeast Asia
					'china': 'Singapore', 'japan': 'Singapore', 'south korea': 'Singapore',
					'north korea': 'Singapore', 'taiwan': 'Singapore', 'hong kong': 'Singapore',
					'macau': 'Singapore', 'vietnam': 'Singapore', 'laos': 'Singapore',
					'cambodia': 'Singapore', 'thailand': 'Singapore', 'myanmar': 'Singapore',
					'malaysia': 'Singapore', 'singapore': 'Singapore', 'philippines': 'Singapore',
					'indonesia': 'Singapore', 'brunei': 'Singapore', 'timor-leste': 'Singapore',

					// Oceania
					'australia': 'Singapore', 'new zealand': 'Singapore',

					// Africa — Split by region
					// North Africa
					'morocco': 'France', 'egypt': 'France', 'algeria': 'France', 'tunisia': 'France', 'libya': 'France',

					// West Africa
					'nigeria': 'France', 'ghana': 'France', 'senegal': 'France', 'ivory coast': 'France',
					'gambia': 'France', 'burkina faso': 'France', 'benin': 'France', 'togo': 'France',
					'mauritania': 'France', 'sierra leone': 'France', 'liberia': 'France', 'cape verde': 'France',
					'niger': 'France', 'guinea': 'France', 'guinea-bissau': 'France', 'mali': 'France',

					// East Africa
					'kenya': 'India', 'uganda': 'India', 'ethiopia': 'India', 'rwanda': 'India', 'tanzania': 'India',
					'somalia': 'India', 'sudan': 'India', 'djibouti': 'India', 'eritrea': 'India',

					// Southern Africa
					'south africa': 'India', 'zambia': 'India', 'botswana': 'India', 'namibia': 'India',
					'zimbabwe': 'India', 'eswatini': 'India', 'lesotho': 'India', 'mozambique': 'Singapore', 'malawi': 'India',

					// Central Africa
					'democratic republic of the congo': 'France', 'republic of the congo': 'France',
					'cameroon': 'France', 'chad': 'France', 'gabon': 'France', 'central african republic': 'France',
					'equatorial guinea': 'France',
				};

				const fallbackLabel = manualMap[userCountry] || 'United States';

				const updatedPoints = originalPoints.map((point) =>
					point.label === fallbackLabel
						? { ...point, label: 'Closest to You' }
						: point
				);

				setPoints(updatedPoints);
			} catch (err) {
				console.error('IP geolocation failed', err);

				// Hard fallback to United States
				const fallback = 'United States';
				const updatedPoints = originalPoints.map((point) =>
					point.label === fallback
						? { ...point, label: 'Closest to You' }
						: point
				);
				setPoints(updatedPoints);
			}
		};

		fetchUserCountry();
	}, [location, loading]); // ⚠️ depend on location & loading


	return (
		<section className="py-16 w-full max-w-none">
			<h2 className="text-3xl font-bold text-center mb-4">
				Continental Connectivity
			</h2>
			<p className="text-center text-muted-foreground mb-8">
				Our servers are stationed across four continents ensure lightning-fast
				speeds &<br />
				seamless accessibility for your website visitors worldwide
			</p>

			<div className="relative w-full overflow-x-auto md:overflow-visible">
				<div className="w-[1200px] md:w-full mx-auto">
					<CustomWorldMap points={points} />
				</div>
			</div>

			<div className="text-center mt-8">
				<Button size="lg">
					<a href="https://status.2hs.in/status/hs" className="text-white">Check Server Status</a>
				</Button>
				{/* <a href="https://stats.uptimerobot.com/jYxY9cjMnp">Check Server Status</a> */}
			</div>
		</section>
	);
}
