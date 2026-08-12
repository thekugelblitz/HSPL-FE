'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItemProps {
    label: string;
    href: string;
    submenuHrefs?: string[];
    onClick?: () => void;
    isOpen?: boolean;
    isHosting?: boolean;
}

export function NavItem({
    label,
    href,
    submenuHrefs = [],
    onClick,
    isOpen = false,
    isHosting = false,
}: NavItemProps) {
    const pathname = usePathname();

    const isSubRouteActive = submenuHrefs.some((subHref) => pathname === subHref);
    const isActive = pathname === href || isSubRouteActive;

    return (
        <div className="relative flex flex-col items-center">
            <Link
                href={href}
                onClick={onClick}
                className={`px-2 py-2 pt-2 rounded-md text-xs font-bold tracking-wide uppercase transition-colors ${isOpen
                    ? 'bg-white text-blue-600 dark:bg-gray-900 dark:text-white rounded-b-none'
                    : isActive
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-800 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-800'
                    }`}
            >
                {label}
            </Link>

            {/* Indicator dots */}
            {(isActive || isSubRouteActive) && (
                <span className="absolute -bottom-1 z-[-1] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                    <span className="w-3 h-1.5 bg-blue-600 ml-1 rounded-sm"></span>
                </span>
            )}
        </div>
    );
}
