/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function QuoteStep1Client({ dictionary, lang }: { dictionary: Record<string, any>, lang: string }) {
    const router = useRouter();
    const [selectedType, setSelectedType] = useState<string | null>(null);

    const handleNext = () => {
        if (selectedType) {
            sessionStorage.setItem("quote_type", selectedType);
            router.push(`/${lang}/quote/step2`);
        }
    };

    const projectTypes = [
        {
            id: "web",
            icon: "desktop_windows",
            title: dictionary.quote.types.web_title,
            desc: dictionary.quote.types.web_desc,
        },
        {
            id: "app",
            icon: "smartphone",
            title: dictionary.quote.types.app_title,
            desc: dictionary.quote.types.app_desc,
        },
        {
            id: "ai",
            icon: "neurology",
            title: dictionary.quote.types.ai_title,
            desc: dictionary.quote.types.ai_desc,
        },
        {
            id: "blockchain",
            icon: "currency_bitcoin",
            title: dictionary.quote.types.blockchain_title,
            desc: dictionary.quote.types.blockchain_desc,
        },
    ];

    return (
        <>
            <div className="max-w-7xl mx-auto px-6 pt-16 pb-24">
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="flex justify-between items-end mb-4">
                        <div className="flex flex-col">
                            <span className="text-primary font-bold text-sm uppercase tracking-widest mb-1">
                                {dictionary.quote.step1.step_label}
                            </span>
                            <h3 className="text-xl font-bold text-deep-charcoal dark:text-white">
                                {dictionary.quote.step1.title}
                            </h3>
                        </div>
                        <span className="text-gray-400 text-sm font-medium">{dictionary.quote.step1.progress}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className="h-full bg-primary w-1/3 transition-all duration-500"></div>
                    </div>
                </div>

                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight text-deep-charcoal dark:text-white">
                        {dictionary.quote.step1.hero_title}
                    </h2>
                    <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mx-auto">
                        {dictionary.quote.step1.hero_desc}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20 max-w-7xl mx-auto">
                    {projectTypes.map((type) => (
                        <button
                            key={type.id}
                            onClick={() => setSelectedType(type.id)}
                            className={`group relative p-8 rounded-3xl transition-all text-left flex flex-col items-start min-h-[280px] border-2 ${selectedType === type.id
                                ? "bg-white dark:bg-gray-800 border-primary card-shadow-selected scale-[1.02]"
                                : "bg-white dark:bg-gray-800 border-transparent hover:border-gray-200 dark:hover:border-gray-700 card-shadow"
                                }`}
                        >
                            <div
                                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform group-hover:scale-110 ${selectedType === type.id
                                    ? "bg-primary/10 text-primary"
                                    : "bg-gray-50 dark:bg-gray-700 text-gray-400 group-hover:bg-primary/5 group-hover:text-primary"
                                    }`}
                            >
                                <span className="material-symbols-outlined text-4xl">
                                    {type.icon}
                                </span>
                            </div>
                            <div className="mt-auto">
                                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-white leading-tight">
                                    {type.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {type.desc}
                                </p>
                            </div>
                            <div className="absolute top-8 right-8">
                                {selectedType === type.id ? (
                                    <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                                        <span className="material-symbols-outlined text-white text-lg">
                                            check
                                        </span>
                                    </div>
                                ) : (
                                    <div className="w-7 h-7 border-2 border-gray-100 dark:border-gray-600 rounded-full group-hover:border-primary transition-colors"></div>
                                )}
                            </div>
                        </button>
                    ))}
                </div>

                <div className="flex flex-col items-center gap-6">
                    <button
                        onClick={handleNext}
                        className="w-full max-w-md py-5 bg-primary text-white text-xl font-bold rounded-2xl hover:bg-[#00c2a5] hover:-translate-y-1 transition-all btn-shadow disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                        disabled={!selectedType}
                    >
                        {dictionary.quote.step1.next_button}
                    </button>
                    <Link
                        href={`/${lang}`}
                        className="text-gray-400 font-medium hover:text-gray-600 dark:hover:text-gray-300 border-b border-transparent hover:border-gray-300 transition-all text-base"
                    >
                        {dictionary.quote.step1.later_button}
                    </Link>
                </div>
            </div >
        </>
    );
}
