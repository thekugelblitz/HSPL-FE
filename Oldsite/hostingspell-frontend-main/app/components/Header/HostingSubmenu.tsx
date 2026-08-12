'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export interface HostingSubmenuItem {
    key: string;
    title: string;
    desc: string;
    href: string;
    lightIcon: string;
    darkIcon: string;
}

interface HostingSubmenuProps {
    items: HostingSubmenuItem[];
}

export function HostingSubmenu({ items }: HostingSubmenuProps) {
    const pathname = usePathname();

    return (
        <div className="absolute left-0 top-full w-[700px] bg-white dark:bg-gray-900 rounded-b-xl rounded-tr-xl rounded-tl-none shadow-lg grid grid-cols-3 gap-4 px-4 py-4 z-30 border-t-0">
            {items.map((item) => {
                const isActive = pathname === item.href;

                return (
                    <Link
                        key={item.key}
                        href={item.href}
                        className={`flex flex-col items-start text-start group p-3 rounded-xl transition w-full ${isActive
                                ? 'bg-blue-600 text-white dark:bg-blue-700'
                                : 'bg-transparent hover:bg-blue-600 dark:hover:bg-blue-700'
                            }`}
                    >
                        <Image
                            src={item.lightIcon}
                            alt={item.title}
                            width={32}
                            height={32}
                            className={`mb-2 transition ${
                                isActive ? 'hidden' : 'block dark:hidden group-hover:hidden'
                            }`}
                        />
                        <Image
                            src={item.darkIcon}
                            alt={item.title}
                            width={32}
                            height={32}
                            className={`mb-2 transition ${
                                isActive ? 'block' : 'hidden dark:block group-hover:block'
                            }`}
                        />
                        <span
                            className={`font-bold text-lg leading-tight whitespace-pre-line transition-colors ${isActive ? 'text-white' : 'text-gray-900 dark:text-white group-hover:text-white'
                                }`}
                        >
                            {item.title}
                        </span>
                        <span
                            className={`text-xs font-semibold mt-1 transition-colors ${isActive ? 'text-white' : 'text-gray-600 dark:text-gray-300 group-hover:text-white'
                                }`}
                        >
                            {item.desc}
                        </span>
                    </Link>
                );
            })}
        </div>
    );
}
