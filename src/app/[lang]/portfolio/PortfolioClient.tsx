"use client";

import { useState } from "react";
import Link from "next/link";

export default function PortfolioClient({ dictionary, lang }: { dictionary: any, lang: string }) {
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        { id: "all", label: dictionary.portfolio_page.categories.all },
        { id: "web", label: dictionary.portfolio_page.categories.web },
        { id: "mobile", label: dictionary.portfolio_page.categories.mobile },
        { id: "blockchain", label: dictionary.portfolio_page.categories.blockchain },
        { id: "uiux", label: dictionary.portfolio_page.categories.uiux },
    ];

    const projects: { id: string; category: string; image: string; categoryKey: string }[] = [
        { id: "2", category: "Web", categoryKey: "web", image: "/images/portfolio-samsung-ai.png" },
        { id: "3", category: "Mobile", categoryKey: "mobile", image: "/images/portfolio-mobis.png" },
        { id: "4", category: "UI/UX", categoryKey: "uiux", image: "/images/portfolio-logistics.png" },
        { id: "5", category: "Web", categoryKey: "web", image: "/images/portfolio-canon-mps.png" },
        { id: "6", category: "Web", categoryKey: "web", image: "/images/portfolio-redclick.png" },
        { id: "7", category: "Web", categoryKey: "web", image: "/images/portfolio-ai-subtitle.png" },
        { id: "8", category: "UI/UX", categoryKey: "uiux", image: "/images/portfolio-golf.png" },
        { id: "9", category: "Web", categoryKey: "web", image: "/images/portfolio-city-earth.png" },
        { id: "10", category: "Web", categoryKey: "web", image: "/images/portfolio-cj-bdp.png" },
        { id: "11", category: "Web", categoryKey: "web", image: "/images/portfolio-cultureit.png" },
        { id: "12", category: "Web", categoryKey: "web", image: "/images/portfolio-lguplus-u2.png" },
        { id: "13", category: "Web", categoryKey: "web", image: "/images/portfolio-pcn-fiss.png" },
        { id: "14", category: "Mobile", categoryKey: "mobile", image: "/images/portfolio-abworks-golf.png" },
        { id: "15", category: "UI/UX", categoryKey: "uiux", image: "/images/portfolio-kt-aice.png" },
        { id: "16", category: "Web", categoryKey: "web", image: "/images/portfolio-kt-ad-platform.png" },
        { id: "17", category: "Web", categoryKey: "web", image: "/lg-uplus-collab.png" },
        { id: "18", category: "Web", categoryKey: "web", image: "/images/portfolio-obigo-infotainment-cabin-new.png" },
        { id: "19", category: "Blockchain", categoryKey: "blockchain", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABSmXZwpY-B8IZmhM7X7R7OP5IgzdBtjZrVsBAdnGTFsix6RFJaO2QIMD-nXA92PYTsX5PosBQL_suhEJI8Ag28qzWJ8k9xWlRsyzF2ivknKNCNfx7T6Fx0Og-JnJAAI0GlGzecdK3rAPkFP7RiGyNtSdki79RnLz4a5YDkEtB-SZzT3in8U8ykf28Nis2f00V-deBW9EOF4hw_TTQSvyou8Zrfur2J1sofvcyiebXiiFY03Z0UNoiwJ9eJMo_OfpiYXTBvD622Yg" },
    ];

    const filteredProjects = projects.filter(
        (project) => activeCategory === "All" || dictionary.portfolio_page.categories[project.categoryKey] === activeCategory
    );

    // Helper to get translated category label
    const getCategoryLabel = (key: string) => dictionary.portfolio_page.categories[key];

    return (
        <>
            <section className="relative overflow-hidden pt-20 pb-16 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 tracking-wider uppercase">
                        {dictionary.portfolio_page.badge}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-deep-charcoal dark:text-white leading-tight mb-8">
                        {dictionary.portfolio_page.title_prefix} <span className="text-primary">{dictionary.portfolio_page.title_highlight}</span>
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {dictionary.portfolio_page.desc}
                    </p>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]"></div>
                </div>
            </section>

            <section className="pt-12 pb-12 px-6">
                <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.label)}
                            className={`px-8 py-2.5 rounded-full font-bold text-sm border-2 transition-all ${activeCategory === cat.label
                                ? "bg-primary text-white border-primary"
                                : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-100 dark:border-gray-700 hover:border-primary hover:text-primary"
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            </section>

            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 portfolio-card transition-all duration-300">
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        alt={dictionary.portfolio_page.items[project.id].title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        src={project.image}
                                    />
                                </div>
                                <div className="p-8">
                                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
                                        {getCategoryLabel(project.categoryKey)}
                                    </span>
                                    <h3 className="text-2xl font-bold text-deep-charcoal dark:text-white mb-3">
                                        {dictionary.portfolio_page.items[project.id].title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        {dictionary.portfolio_page.items[project.id].desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
