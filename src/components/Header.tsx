"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-2xl">developer_mode_tv</span>
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-deep-charcoal dark:text-white">AllMake</h1>
                </div>
                <nav className="hidden md:flex items-center gap-10">
                    <Link
                        href="/"
                        className={`text-sm font-bold transition-colors ${isActive('/') ? 'text-primary' : 'hover:text-primary'}`}
                    >
                        HOME
                    </Link>
                    <Link
                        href="/portfolio"
                        className={`text-sm font-bold transition-colors ${isActive('/portfolio') ? 'text-primary' : 'hover:text-primary'}`}
                    >
                        PORTFOLIO
                    </Link>
                    <Link
                        href="/services"
                        className={`text-sm font-bold transition-colors ${isActive('/services') ? 'text-primary' : 'hover:text-primary'}`}
                    >
                        SERVICES
                    </Link>
                    <Link
                        href="/about"
                        className={`text-sm font-bold transition-colors ${isActive('/about') ? 'text-primary' : 'hover:text-primary'}`}
                    >
                        ABOUT
                    </Link>
                    <Link
                        href="/contact"
                        className={`text-sm font-bold transition-colors ${isActive('/contact') ? 'text-primary' : 'hover:text-primary'}`}
                    >
                        CONTACT
                    </Link>
                </nav>
                <button className="bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all mint-shadow">
                    견적 문의하기
                </button>
            </div>
        </header>
    );
}
