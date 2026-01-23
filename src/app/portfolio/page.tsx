"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

type Category = "All" | "Web" | "Mobile" | "Blockchain" | "UI/UX";

interface Project {
    id: string;
    category: Category;
    title: string;
    description: string;
    image: string;
}

const projects: Project[] = [
    {
        id: "1",
        category: "Blockchain",
        title: "NeoBank Assets",
        description: "A decentralized asset management platform featuring real-time smart contract auditing and seamless wallet integration.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABSmXZwpY-B8IZmhM7X7R7OP5IgzdBtjZrVsBAdnGTFsix6RFJaO2QIMD-nXA92PYTsX5PosBQL_suhEJI8Ag28qzWJ8k9xWlRsyzF2ivknKNCNfx7T6Fx0Og-JnJAAI0GlGzecdK3rAPkFP7RiGyNtSdki79RnLz4a5YDkEtB-SZzT3in8U8ykf28Nis2f00V-deBW9EOF4hw_TTQSvyou8Zrfur2J1sofvcyiebXiiFY03Z0UNoiwJ9eJMo_OfpiYXTBvD622Yg",
    },
    {
        id: "2",
        category: "Web",
        title: "Global Storefront",
        description: "Scalable e-commerce engine optimized for lightning-fast performance and cross-border payment processing.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAoYqZNpGMoO08QoVSIyRb-WLkJM0D-x2YpdX4qB_nJB2zmkiE6q67j0isM5GeP4GkiyORqZfySw056EOMDh7d1JWYpAq1uL9PddEdvPJ0nAassZn8Nad-33IM-OwSvfjPoleiBxBJasX2r6iaD5ZI6W7jD1FP9TC_6F29WIxVExeTFfLRzqAoPJbAAMh6YiWaqIFVGnkyVpNO3z72pH_8wjlmylP6J_Enn7lTgr1jh6xYXyIBl9JItkHGUcvPcSCnlSvSH8WDxjKo",
    },
    {
        id: "3",
        category: "Mobile",
        title: "VitaConnect",
        description: "High-performance Flutter application for comprehensive health monitoring with wearable device synchronization.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1PWInVn1TemOTn0yVvwHyLVSm6j0Y_pERf4pN4XR--_X0r81s9XvqI5qxKP0BcDQjwTta9qVtyz3FbxiTf0Mn_Ql__1kWMMVd4eXO-Yo5DqkpTfs4RH8-WQU4mH6oNzASqRMSWIfzNmPSCn-thQaq_fDwmPFe3TkIXDwDPWoKEQUsM8-rStRL-4PZNHg8w9PJaSZCX4nPkgmWIV6i5kJuW0STuz6RsDp5F26axIhXpHYss91U088cTItCUPN0AN90wcY0akbdNdY",
    },
    {
        id: "4",
        category: "UI/UX",
        title: "Smart Logistics Hub",
        description: "User-centric interface redesign for a complex supply chain management system, increasing operator efficiency by 40%.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDOsBRI2aBv9hNDIJJDz0qKuivVuA_yLGAmbSnJYoiIisI6hgI-nQcDwbUmH1B7XOCye5m9igFWBsW9zFrtqhjr5cP1uRb0Jpt8WQxj8Z0mMOyP26PfPr2lV3dKyA6PKO9fUeEu4Ot-0llmn1Q_WhJCMobeh-ZQjSp92Mcsh7RajiSwLX3n7p-gvzszUZeYLgYZQMmzNNY15bsyKucD0nEtr4_LUY6D_gFFKFlR7Sfy-jztN85n35xEYNuu1X7NrrVkbEzV36sKBUM",
    },
    {
        id: "5",
        category: "Blockchain",
        title: "Ether Flow",
        description: "Automated DAO governance platform with transparent voting mechanisms and treasury management solutions.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-8GcE2Pc1BVDdt9tKL4vcmF5f5wnRzdzV5AVF-G5-Bqoh5W2Fg2JGzgROucxn_-Iq5CCrRmgCou7yF9GsUoHK-t0B1TOS1bpWTLn0VQatRmSS3Zz9zRoUyNTBRO9bixKlj7T2WJOmrReGNN4btgDT-Fp4ZXnjqWlYfVXSCLqwzlIEuShJDQgaf1XJIy5Ef0t7vM_cn3QSNlomZd-knjdhIQc2-JFuDoaaaDkYNNM0_6z5bgM-Z5vW_gv6MAXLV032KM4TnF4HPHE",
    },
    {
        id: "6",
        category: "Web",
        title: "Sync Task Manager",
        description: "Collaborative workspace tool designed for remote teams with real-time syncing and intuitive resource allocation.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCXuNiW9_pqrUarBc9v2I6IGVzouxA_32epGkoidoRnWmVYpIVgyhwC8Q2GIj9n3tTmSlNcK28OUfaYH8nnXURrp5A0U9adlglrmG6o3MtT9Deuu0M-l6vs-A4cHWe6CJvxyL3a4cON3-PvFb0FR0p8DYEomOsbNVtjArstj3P9SzxSd06Q20KP8Dk2QtscTOb7-wGs0_gRnfCIH1401eLRpPvq1UZu2ith9wVTwnATM4oN4S-cmxBXWwOY2DV4xseuCwTMIyIloTE",
    },
];

const categories: Category[] = ["All", "Web", "Mobile", "Blockchain", "UI/UX"];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const filteredProjects = projects.filter(
        (project) => activeCategory === "All" || project.category === activeCategory
    );

    return (
        <div className="bg-background-light dark:bg-background-dark text-deep-charcoal dark:text-white font-sans selection:bg-primary/30">
            <Header />
            <main>
                <section className="pt-20 pb-16 px-6">
                    <div className="max-w-7xl mx-auto text-center">
                        <h2 className="text-5xl md:text-6xl font-black text-deep-charcoal dark:text-white mb-6">Our Portfolio</h2>
                        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            We partner with ambitious brands to drive digital transformation through cutting-edge technology and human-centered design.
                        </p>
                    </div>
                </section>

                <section className="pb-12 px-6">
                    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-8 py-2.5 rounded-full font-bold text-sm border-2 transition-all ${activeCategory === category
                                        ? "bg-primary text-white border-primary"
                                        : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-100 dark:border-gray-700 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {category}
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
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            src={project.image}
                                        />
                                    </div>
                                    <div className="p-8">
                                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-deep-charcoal dark:text-white mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButton />
        </div>
    );
}
