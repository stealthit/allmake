import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import Link from "next/link";

export default async function About({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);

    return (
        <>
            <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-32 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-8 tracking-wider uppercase">
                        {dictionary.about.badge}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-deep-charcoal dark:text-white leading-tight mb-8">
                        {dictionary.about.hero_title_prefix}<span className="text-primary">STEALTH</span>
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {dictionary.about.hero_desc_1}<br className="hidden md:block" />
                        {dictionary.about.hero_desc_2}
                    </p>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]"></div>
                </div>
            </section>

            <section className="py-24 bg-background-light dark:bg-gray-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">{dictionary.about.core_values_badge}</h2>
                        <h3 className="text-3xl md:text-4xl font-black text-deep-charcoal dark:text-white">{dictionary.about.core_values_title}</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 text-center card-hover">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
                                <span className="material-symbols-outlined text-4xl">handshake</span>
                            </div>
                            <h4 className="text-2xl font-bold mb-4">{dictionary.about.value_trust_title}</h4>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed break-keep">
                                {dictionary.about.value_trust_desc_1}<br />
                                {dictionary.about.value_trust_desc_2}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 text-center card-hover">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
                                <span className="material-symbols-outlined text-4xl">lightbulb</span>
                            </div>
                            <h4 className="text-2xl font-bold mb-4">{dictionary.about.value_innovation_title}</h4>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed break-keep">
                                {dictionary.about.value_innovation_desc_1}<br />
                                {dictionary.about.value_innovation_desc_2}
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 text-center card-hover">
                            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
                                <span className="material-symbols-outlined text-4xl">trending_up</span>
                            </div>
                            <h4 className="text-2xl font-bold mb-4">{dictionary.about.value_growth_title}</h4>
                            <p className="text-gray-500 dark:text-gray-400 leading-relaxed break-keep">
                                {dictionary.about.value_growth_desc_1}<br />
                                {dictionary.about.value_growth_desc_2}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">{dictionary.about.history_badge}</h2>
                        <h3 className="text-3xl md:text-4xl font-black text-deep-charcoal dark:text-white">{dictionary.about.history_title}</h3>
                    </div>
                    <div className="relative">
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 timeline-line -translate-x-1/2"></div>
                        <div className="space-y-16">
                            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                                <div className="md:w-1/2 md:pr-12 text-left md:text-right order-2 md:order-1 pl-20 md:pl-0">
                                    <span className="text-primary font-black text-2xl">2026</span>
                                    <h4 className="text-xl font-bold mt-2">{dictionary.about.history_2026_title}</h4>
                                    <p className="text-gray-500 mt-2">{dictionary.about.history_2026_desc}</p>
                                </div>
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-white dark:border-background-dark z-10"></div>
                                <div className="md:w-1/2 md:pl-12 order-3"></div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                                <div className="md:w-1/2 md:pr-12 order-1"></div>
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-white dark:border-background-dark z-10"></div>
                                <div className="md:w-1/2 md:pl-12 text-left order-2 pl-20 md:pl-12">
                                    <span className="text-primary font-black text-2xl">2025</span>
                                    <h4 className="text-xl font-bold mt-2">{dictionary.about.history_2025_title}</h4>
                                    <p className="text-gray-500 mt-2">{dictionary.about.history_2025_desc}</p>
                                </div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                                <div className="md:w-1/2 md:pr-12 text-left md:text-right order-2 md:order-1 pl-20 md:pl-0">
                                    <span className="text-primary font-black text-2xl">2024</span>
                                    <h4 className="text-xl font-bold mt-2">{dictionary.about.history_2024_title}</h4>
                                    <p className="text-gray-500 mt-2">{dictionary.about.history_2024_desc}</p>
                                </div>
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-white dark:border-background-dark z-10"></div>
                                <div className="md:w-1/2 md:pl-12 order-3"></div>
                            </div>
                            <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                                <div className="md:w-1/2 md:pr-12 order-1"></div>
                                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-white dark:border-background-dark z-10"></div>
                                <div className="md:w-1/2 md:pl-12 text-left order-2 pl-20 md:pl-12">
                                    <span className="text-primary font-black text-2xl">2019</span>
                                    <h4 className="text-xl font-bold mt-2">{dictionary.about.history_2019_title}</h4>
                                    <p className="text-gray-500 mt-2">{dictionary.about.history_2019_desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mb-24 px-6 pt-12">
                <div className="max-w-7xl mx-auto bg-deep-charcoal dark:bg-gray-900 rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[100px]"></div>
                    <div className="relative z-10 md:flex items-center justify-between gap-12">
                        <div className="flex-1 min-w-0">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 break-keep leading-tight">{dictionary.about.cta_title}</h2>
                            <p className="text-gray-400 text-lg mb-0">{dictionary.about.cta_desc}</p>
                        </div>
                        <div className="mt-10 md:mt-0 flex flex-col gap-4 flex-shrink-0">
                            <Link href={`/${lang}/consultation`} className="bg-primary text-deep-charcoal px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white transition-all text-center mint-shadow whitespace-nowrap">
                                {dictionary.about.cta_button}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
