/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface HeaderProps {
    dictionary: Record<string, any>;
    lang: string;
}

export default function Header({ dictionary, lang }: HeaderProps) {
    const pathname = usePathname();
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Determines if a link is active
    const isActive = (path: string) => {
        // Strip the lang prefix from pathname for comparison
        const pathWithoutLang = pathname.replace(`/${lang}`, "") || "/";
        return pathWithoutLang === path;
    };

    // Helper to get localized href
    const getLocalizedHref = (path: string) => {
        return `/${lang}${path === "/" ? "" : path}`;
    };

    const navLinks = [
        { href: "/", label: dictionary.nav.home },
        { href: "/portfolio", label: dictionary.nav.portfolio },
        { href: "/services", label: dictionary.nav.services },
        { href: "/about", label: dictionary.nav.about },
        { href: "/contact", label: dictionary.nav.contact },
    ];

    const toggleLanguage = () => {
        const newLang = lang === "ko" ? "en" : "ko";
        const newPath = pathname.replace(`/${lang}`, `/${newLang}`);
        router.push(newPath);
    };

    return (
        <header className={`sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 ${isMenuOpen
            ? "bg-white dark:bg-background-dark"
            : "bg-white/80 dark:bg-background-dark/80 backdrop-blur-md"
            }`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href={`/${lang}`} className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-2xl">developer_mode_tv</span>
                    </div>
                    <h1 className="text-2xl font-extrabold tracking-tight text-deep-charcoal dark:text-white">STEALTH</h1>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={getLocalizedHref(link.href)}
                            className={`text-sm font-bold transition-colors ${isActive(link.href) ? 'text-primary' : 'hover:text-primary dark:text-gray-400 dark:hover:text-primary'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="hidden sm:flex bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-deep-charcoal dark:text-white px-3 py-2 rounded-lg font-bold text-xs transition-colors items-center gap-1"
                    >
                        <span className="material-symbols-outlined text-base">language</span>
                        {lang === "ko" ? "EN" : "KR"}
                    </button>

                    <Link href={getLocalizedHref("/quote/step1")} className="hidden sm:inline-block bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all mint-shadow">
                        {dictionary.nav.quote}
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-deep-charcoal dark:text-white hover:text-primary transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className="material-symbols-outlined text-3xl">
                            {isMenuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 top-20 z-40 bg-white dark:bg-background-dark">
                    <nav className="flex flex-col p-8 gap-6">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={getLocalizedHref(link.href)}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-2xl font-black transition-colors ${isActive(link.href) ? 'text-primary' : 'text-deep-charcoal dark:text-gray-400 hover:text-primary'}`}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <div className="flex justify-center mt-4">
                            <button
                                onClick={() => {
                                    toggleLanguage();
                                    setIsMenuOpen(false);
                                }}
                                className="flex bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full font-bold text-sm items-center gap-2"
                            >
                                <span className="material-symbols-outlined text-base">language</span>
                                {lang === "ko" ? "English" : "한국어"}
                            </button>
                        </div>

                        <div className="mt-4 pt-8 border-t border-gray-100 dark:border-gray-800">
                            <Link
                                href={getLocalizedHref("/quote/step1")}
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full bg-primary text-white text-center py-5 rounded-2xl font-bold text-xl transition-all mint-shadow"
                            >
                                {dictionary.nav.quote}
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
