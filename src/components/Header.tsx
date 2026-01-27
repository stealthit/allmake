"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path: string) => pathname === path;

    const navLinks = [
        { href: "/", label: "HOME" },
        { href: "/portfolio", label: "PORTFOLIO" },
        { href: "/services", label: "SERVICES" },
        { href: "/about", label: "ABOUT" },
        { href: "/contact", label: "CONTACT" },
    ];

    return (
        <header className={`sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 ${isMenuOpen
            ? "bg-white dark:bg-background-dark"
            : "bg-white/80 dark:bg-background-dark/80 backdrop-blur-md"
            }`}>
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
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
                            href={link.href}
                            className={`text-sm font-bold transition-colors ${isActive(link.href) ? 'text-primary' : 'hover:text-primary dark:text-gray-400 dark:hover:text-primary'}`}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Link href="/quote/step1" className="hidden sm:inline-block bg-primary hover:bg-opacity-90 text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all mint-shadow">
                        견적 문의하기
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
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-2xl font-black transition-colors ${isActive(link.href) ? 'text-primary' : 'text-deep-charcoal dark:text-gray-400 hover:text-primary'}`}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                            <Link
                                href="/quote/step1"
                                onClick={() => setIsMenuOpen(false)}
                                className="block w-full bg-primary text-white text-center py-5 rounded-2xl font-bold text-xl transition-all mint-shadow"
                            >
                                견적 문의하기
                            </Link>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}
