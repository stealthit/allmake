"use client";

import { useState } from "react";

interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
}

const services: Service[] = [
    {
        id: "web",
        icon: "desktop_windows",
        title: "웹 개발",
        description: "성능과 확장성을 고려한 최신 프레임워크 기반의 맞춤형 웹 애플리케이션 구축.",
    },
    {
        id: "mobile",
        icon: "smartphone",
        title: "모바일 앱",
        description: "iOS 및 Android를 위한 고성능 네이티브 및 크로스 플랫폼 모바일 경험 제공.",
    },
    {
        id: "uiux",
        icon: "palette",
        title: "UI/UX 디자인",
        description: "높은 전환율과 심미적 아름다움에 초점을 맞춘 사용자 중심 디자인.",
    },
    {
        id: "blockchain",
        icon: "currency_bitcoin",
        title: "블록체인 솔루션",
        description: "Web3 시대를 위한 스마트 계약, DApp 및 원활한 지갑 통합 전문 기술.",
    },
];

export default function ServicesSection() {
    const [activeId, setActiveId] = useState<string>("blockchain");

    return (
        <section className="py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">How we can help</h2>
                <h3 className="text-4xl md:text-5xl font-black text-deep-charcoal dark:text-white">Our Core Services</h3>
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
