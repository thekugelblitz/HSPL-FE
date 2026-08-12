'use client';

import dynamic from 'next/dynamic';

// Lazy load GlowSpots on client side only
const GlowSpots = dynamic(() => import('./GlowSpots'), {
	ssr: false,
	loading: () => null,
});

export default function GlowSpotsClient() {
	return <GlowSpots />;
}
