/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";

interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
}

export default function ServicesSection({ dictionary }: { dictionary: Record<string, any> }) {
    const [activeId, setActiveId] = useState<string | null>(null);

    const services: Service[] = [
        {
            id: "ai",
            icon: "psychology",
            title: dictionary.home.services.ai_title,
            description: dictionary.home.services.ai_desc,
        },
        {
            id: "web",
            icon: "desktop_windows",
            title: dictionary.home.services.web_title,
            description: dictionary.home.services.web_desc,
        },
        {
            id: "mobile",
            icon: "smartphone",
            title: dictionary.home.services.mobile_title,
            description: dictionary.home.services.mobile_desc,
        },
        {
            id: "blockchain",
            icon: "currency_bitcoin",
            title: dictionary.home.services.blockchain_title,
            description: dictionary.home.services.blockchain_desc,
        },
    ];

    return (
        <section className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">{dictionary.home.services.badge}</h2>
                <h3 className="text-4xl md:text-5xl font-black text-deep-charcoal dark:text-white">{dictionary.home.services.title}</h3>
            </div>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service) => {
                        const isActive = activeId === service.id;
                        return (
                            <div
                                key={service.id}
                                onClick={() => setActiveId(service.id)}
                                className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer card-hover ${isActive
                                    ? "bg-primary/5 dark:bg-primary/10 border-primary/20 ring-2 ring-primary ring-opacity-10"
                                    : "bg-white dark:bg-gray-800/50 border-gray-100 dark:border-gray-700"
                                    }`}
                            >
                                <div
                                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${isActive
                                        ? "bg-primary text-white"
                                        : "bg-background-light dark:bg-gray-700 text-primary"
                                        }`}
                                >
                                    <span className="material-symbols-outlined text-3xl">{service.icon}</span>
                                </div>
                                <h4
                                    className={`text-xl font-bold mb-4 transition-colors duration-300 ${isActive ? "text-primary" : ""
                                        }`}
                                >
                                    {service.title}
                                </h4>
                                <p
                                    className={`text-sm leading-relaxed transition-colors duration-300 ${isActive
                                        ? "text-gray-600 dark:text-gray-300"
                                        : "text-gray-500 dark:text-gray-400"
                                        }`}
                                >
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
