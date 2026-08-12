"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderLogoProps {
    gradient?: boolean;
    gradientColors?: [string, string]; // e.g. ["#6366F1", "#EC4899"]
}

function HSymbol({ gradient, gradientColors }: HeaderLogoProps) {
    return (
        <motion.svg
            key="logo-symbol"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 258 154"
            className="h-10 w-10"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
        >
            <defs>
                {gradient && gradientColors && (
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={gradientColors[0]} />
                        <stop offset="100%" stopColor={gradientColors[1]} />
                    </linearGradient>
                )}
            </defs>
            <g className={gradient ? "" : "fill-black dark:fill-white"}>
                <path d="M215.2 0V55.4H42.2V0H0V55.4V97.6V153H42.2V97.6H215.2V153H257.4V97.6V55.4V0H215.2Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M80.1004 29.4996C88.219 29.4996 94.8004 22.9182 94.8004 14.7996C94.8004 6.68101 88.219 0.0996094 80.1004 0.0996094C71.9818 0.0996094 65.4004 6.68101 65.4004 14.7996C65.4004 22.9182 71.9818 29.4996 80.1004 29.4996Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M131.6 29.4996H177.4C185.5 29.4996 192.1 22.8996 192.1 14.7996C192.1 6.69959 185.5 0.0996094 177.4 0.0996094H131.6C123.5 0.0996094 116.9 6.69959 116.9 14.7996C116.9 22.8996 123.5 29.4996 131.6 29.4996Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M154.4 66.3996C162.5 66.3996 169.1 59.7996 169.1 51.6996C169.1 43.5996 162.5 36.9996 154.4 36.9996C146.3 36.9996 139.7 43.5996 139.7 51.6996C139.7 59.7996 146.3 66.3996 154.4 66.3996Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M101.2 66.3996C109.3 66.3996 115.9 59.7996 115.9 51.6996C115.9 43.5996 109.3 36.9996 101.2 36.9996C93.1004 36.9996 86.5004 43.5996 86.5004 51.6996C86.5004 59.7996 93.1004 66.3996 101.2 66.3996Z" fill={gradient ? "url(#logoGradient)" : undefined} />
            </g>
        </motion.svg>
    );
}

function Wordmark({ gradient, gradientColors }: HeaderLogoProps) {
    return (
        <motion.svg
            key="logo-wordmark"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 600 150"
            className="h-10 w-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
        >
            <defs>
                {gradient && gradientColors && (
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={gradientColors[0]} />
                        <stop offset="100%" stopColor={gradientColors[1]} />
                    </linearGradient>
                )}
            </defs>
            <g className={gradient ? "" : "fill-black dark:fill-white"}>
                <path d="M359.9 123.999V89.3992H326.9V123.999H299.4V31.1992H327V68.0992H360V31.1992H387.5V123.999H359.9Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M477.901 87.9991C477.901 110.199 462.101 124.899 437.901 124.899C413.701 124.899 397.801 110.199 397.801 87.9991C397.801 65.5991 413.701 51.0991 437.901 51.0991C462.101 50.9991 477.901 65.5991 477.901 87.9991ZM424.801 88.1992C424.801 97.8991 430.001 104.199 437.901 104.199C445.701 104.199 450.901 97.7992 450.901 88.1992C450.901 78.6992 445.701 72.1992 437.901 72.1992C429.901 72.1992 424.801 78.6992 424.801 88.1992Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M548.001 59.4992L539.101 76.2992C529.301 71.2992 521.201 68.7992 515.501 68.7992C512.201 68.7992 510.101 69.9992 510.101 72.1992C510.101 80.2992 547.701 76.6992 547.701 101.299C547.701 116.099 534.901 125.099 516.101 125.099C503.401 125.099 491.601 121.699 482.201 114.899L490.401 98.0992C499.401 103.899 508.501 106.999 516.501 106.999C520.101 106.999 522.501 105.899 522.501 103.699C522.501 95.4992 485.701 99.4992 485.701 74.7992C485.701 59.6992 498.301 50.6992 516.401 50.6992C527.301 50.7992 538.201 53.7992 548.001 59.4992Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M608.5 120.5C603.5 123.4 595.8 125.1 588.5 125.1C573.1 125.2 562.8 116.4 562.8 101.4V72.6996H552.9V55.5996H562.8V35.5996H589.4V55.5996H607.1V72.6996H589.4V97.2996C589.4 101.9 591.8 104.2 595.5 104.2C597.6 104.2 600.5 103.3 603.7 102.1L608.5 120.5Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M646 31.3996C646 39.4996 640.3 45.1996 632.2 45.1996C624.1 45.1996 618.4 39.4996 618.4 31.3996C618.4 23.2996 624.1 17.5996 632.2 17.5996C640.3 17.6996 646 23.3996 646 31.3996ZM618.7 124V51.9996H645.4V124H618.7Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M737.201 78.2994V123.999H710.501V85.9994C710.501 78.7994 706.401 74.2994 700.201 74.2994C692.901 74.3994 688.401 80.0994 688.401 88.2994V123.999H661.701V51.9994H688.401V63.0994C693.401 55.1994 701.201 50.8994 711.301 50.8994C726.601 50.8994 737.201 61.5994 737.201 78.2994Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M821.8 117.8C821.8 138.1 805.8 150.9 782.2 150.9C768.8 150.9 756.8 146.7 749 141.5L757.9 123.5C764.3 127.7 772.6 130.1 780 130.1C789.7 130.1 795.4 125.6 795.4 118.6V111.3C790.8 116.9 784.3 119.9 776.1 119.9C758.6 119.9 745.9 106.1 745.9 85.0996C745.9 64.5996 758.2 51.0996 775.6 51.0996C784.1 51.0996 790.8 54.2996 795.5 59.7996V51.9996H822V117.8H821.8ZM795.3 85.7996C795.3 76.6996 790.4 70.6996 783 70.6996C775.7 70.6996 770.8 76.7996 770.8 85.7996C770.8 94.6996 775.7 100.6 783 100.6C790.4 100.7 795.3 94.6996 795.3 85.7996Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M904.501 40.1991L898.001 53.9991C887.901 47.8991 877.901 45.3991 870.901 45.3991C861.801 45.3991 855.801 48.7991 855.801 55.0991C855.801 75.3991 905.801 64.4992 905.701 97.8992C905.701 114.499 891.101 124.599 870.701 124.599C856.101 124.599 842.401 118.599 832.801 109.899L839.601 96.3992C849.101 105.099 861.101 109.899 871.001 109.899C881.901 109.899 888.301 105.799 888.301 98.5991C888.301 77.8991 838.301 89.4991 838.301 56.4991C838.301 40.5991 851.901 30.6991 872.101 30.6991C884.201 30.5991 895.901 34.4991 904.501 40.1991Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M997.201 88.9991C997.201 110.099 984.001 124.499 963.801 124.499C952.501 124.499 944.101 119.999 938.901 111.799V149.699H923.701V53.5991H939.001V65.7991C944.201 57.5991 952.601 53.0991 963.601 53.0991C983.601 52.9991 997.201 67.5991 997.201 88.9991ZM981.901 88.4991C981.901 75.3991 973.001 65.6991 960.501 65.6991C947.901 65.6991 939.001 75.1991 939.001 88.4991C939.001 102.099 947.901 111.499 960.501 111.499C973.001 111.499 981.901 101.999 981.901 88.4991Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M1075.1 94.6H1021.9C1024.3 105.5 1032.6 112.2 1043.7 112.2C1051.4 112.2 1058.4 109.3 1063.6 104L1071.7 112.6C1064.8 120.1 1054.8 124.5 1042.6 124.5C1020.9 124.5 1006.6 110.1 1006.6 88.9C1006.6 67.6 1021.3 53.2 1042.2 53C1066.8 53 1076.9 69.2 1075.1 94.6ZM1061.8 83.5C1061.3 72.1 1053.7 65.2 1042.2 65.2C1031.1 65.2 1023.3 72.2 1021.5 83.5H1061.8Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M1091.6 124V25.7998H1106.8V124H1091.6Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M1130.6 124V25.7998H1145.8V124H1130.6Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M215.3 0.5V55.9H42.2996V0.5H0.0996094V55.9V98.1V153.5H42.2996V98.1H215.3V153.5H257.5V98.1V55.9V0.5H215.3Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M80.2 29.9996C88.3186 29.9996 94.9 23.4182 94.9 15.2996C94.9 7.18101 88.3186 0.599609 80.2 0.599609C72.0814 0.599609 65.5 7.18101 65.5 15.2996C65.5 23.4182 72.0814 29.9996 80.2 29.9996Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M131.699 29.9996H177.499C185.599 29.9996 192.199 23.3996 192.199 15.2996C192.199 7.19959 185.599 0.599609 177.499 0.599609H131.699C123.599 0.599609 116.999 7.19959 116.999 15.2996C116.899 23.3996 123.499 29.9996 131.699 29.9996Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M80.2 153.4C88.3186 153.4 94.9 146.819 94.9 138.7C94.9 130.581 88.3186 124 80.2 124C72.0814 124 65.5 130.581 65.5 138.7C65.5 146.819 72.0814 153.4 80.2 153.4Z" fill={gradient ? "url(#logoGradient)" : undefined} />
                <path d="M177.4 124H131.6C123.5 124 116.9 130.6 116.9 138.7C116.9 146.8 123.5 153.4 131.6 153.4H177.4C185.5 153.4 192.1 146.8 192.1 138.7C192.2 130.6 185.6 124 177.4 124Z" fill={gradient ? "url(#logoGradient)" : undefined} />
            </g>
        </motion.svg>
    );
}

export default function HeaderLogo({ gradient, gradientColors }: HeaderLogoProps) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <div className="flex items-center gap-2">
            <Link href="/" className="font-semibold text-xl flex items-center">
                <AnimatePresence mode="wait">
                    {!scrolled ? (
                        <HSymbol gradient={gradient} gradientColors={gradientColors} />
                    ) : (
                        <Wordmark gradient={gradient} gradientColors={gradientColors} />
                    )}
                </AnimatePresence>
            </Link>
        </div>
    );
}
