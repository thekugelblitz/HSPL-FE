import { NextResponse } from "next/server";

export async function GET() {
    const nowUTC = new Date();

    // Convert UTC → IST (UTC+5:30)
    const istOffset = 5.5 * 60;
    const utcMinutes = nowUTC.getUTCHours() * 60 + nowUTC.getUTCMinutes();
    const istMinutes = (utcMinutes + istOffset) % (24 * 60);

    const istHours = Math.floor(istMinutes / 60);
    const istMins = istMinutes % 60;

    // 24h format (for comparisons)
    const istString24h = `${istHours.toString().padStart(2, "0")}:${istMins
        .toString()
        .padStart(2, "0")}`;

    // 12h AM/PM (for display)
    const displayHours = ((istHours + 11) % 12) + 1;
    const ampm = istHours >= 12 ? "PM" : "AM";
    const istString12h = `${displayHours}:${istMins
        .toString()
        .padStart(2, "0")} ${ampm}`;

    return NextResponse.json({
        istHours,
        istMins,
        istString24h,
        istString12h,
    });
}
