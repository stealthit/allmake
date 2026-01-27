import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import Link from "next/link";

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);

    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden pt-20 pb-16 bg-white dark:bg-background-dark">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 tracking-wider uppercase">
                        {dictionary.services.badge}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-deep-charcoal dark:text-white leading-tight mb-8">
                        {dictionary.services.hero_title_prefix}<span className="text-primary">{dictionary.services.hero_title_main}</span>
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {dictionary.services.hero_desc_1}<br className="hidden md:block" />
                        {dictionary.services.hero_desc_2}
                    </p>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]"></div>
                </div>
            </section>

            <section className="py-20 space-y-32">
                {/* AI & Data Solutions */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                <span className="material-symbols-outlined text-5xl">psychology</span>
                            </div>
                            <h2 className="text-3xl font-extrabold mb-4 text-deep-charcoal dark:text-white">{dictionary.services.ai_title}</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                {dictionary.services.ai_desc}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">LLM (GPT, Claude)</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">PyTorch</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">TensorFlow</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">LangChain</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Data Engineering</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-primary font-bold">check</span>
                                    <span>{dictionary.services.ai_check_1}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-primary font-bold">check</span>
                                    <span>{dictionary.services.ai_check_2}</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-primary/10 to-transparent p-1">
                                <img alt="AI and Data Solutions" className="w-full h-auto object-cover rounded-[1.4rem]" src="/images/service-web.png" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Web Development */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                <span className="material-symbols-outlined text-5xl">desktop_windows</span>
                            </div>
                            <h2 className="text-3xl font-extrabold mb-4 text-deep-charcoal dark:text-white">{dictionary.services.web_title}</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                {dictionary.services.web_desc}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">React.js</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Next.js</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">TypeScript</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Node.js</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Tailwind CSS</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Python/Django</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-primary font-bold">check</span>
                                    <span>{dictionary.services.web_check_1}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-primary font-bold">check</span>
                                    <span>{dictionary.services.web_check_2}</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="rounded-3xl overflow-hidden shadow-xl">
                                <img alt="Web Development Interface" className="w-full h-auto object-cover" src="/images/service-web.png" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Apps */}
                <div className="bg-white dark:bg-gray-800/30 py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="rounded-3xl overflow-hidden shadow-xl">
                                    <img alt="Mobile App Development" className="w-full h-[400px] object-cover" src="/images/service-mobile.png" />
                                </div>
                            </div>
                            <div>
                                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                    <span className="material-symbols-outlined text-5xl">smartphone</span>
                                </div>
                                <h2 className="text-3xl font-extrabold mb-4 text-deep-charcoal dark:text-white">{dictionary.services.mobile_title}</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                    {dictionary.services.mobile_desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Flutter</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">React Native</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Swift</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Kotlin</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Firebase</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary font-bold">check</span>
                                        <span>{dictionary.services.mobile_check_1}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary font-bold">check</span>
                                        <span>{dictionary.services.mobile_check_2}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* UI/UX Design */}
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="order-2 md:order-1">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                <span className="material-symbols-outlined text-5xl">palette</span>
                            </div>
                            <h2 className="text-3xl font-extrabold mb-4 text-deep-charcoal dark:text-white">{dictionary.services.uiux_title}</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                {dictionary.services.uiux_desc}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-8">
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Figma</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Adobe XD</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">After Effects</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Prototyping</span>
                                <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Design Systems</span>
                            </div>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-primary font-bold">check</span>
                                    <span>{dictionary.services.uiux_check_1}</span>
                                </div>
                                <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                    <span className="material-symbols-outlined text-primary font-bold">check</span>
                                    <span>{dictionary.services.uiux_check_2}</span>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 md:order-2">
                            <div className="rounded-3xl overflow-hidden shadow-xl">
                                <img alt="UI/UX Design Process" className="w-full h-[400px] object-cover" src="/images/service-uiux.png" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Blockchain Solutions */}
                <div className="bg-white dark:bg-gray-800/30 py-24">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-primary/20">
                                    <img alt="Blockchain Technology" className="w-full h-[400px] object-cover" src="/images/service-blockchain.png" />
                                </div>
                            </div>
                            <div>
                                <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20">
                                    <span className="material-symbols-outlined text-5xl">currency_bitcoin</span>
                                </div>
                                <h2 className="text-3xl font-extrabold mb-4 text-primary">{dictionary.services.blockchain_title}</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                    {dictionary.services.blockchain_desc}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-primary/30 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Solidity</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-primary/30 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Ethereum</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-primary/30 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Web3.js</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-primary/30 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Smart Contracts</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-primary/30 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Hyperledger</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary font-bold">check</span>
                                        <span>{dictionary.services.blockchain_check_1}</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary font-bold">check</span>
                                        <span>{dictionary.services.blockchain_check_2}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="mb-24 px-6">
                <div className="max-w-7xl mx-auto bg-deep-charcoal dark:bg-gray-900 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[100px]"></div>
                    <div className="relative z-10 text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white mb-6">{dictionary.services.cta_title}</h2>
                        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">{dictionary.services.cta_desc}</p>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <Link href={`/${lang}/consultation`} className="bg-primary text-deep-charcoal px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white transition-colors w-full md:w-auto text-center">
                                {dictionary.services.cta_button_consult}
                            </Link>
                            <Link href={`/${lang}/portfolio`} className="border-2 border-gray-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:border-primary transition-colors w-full md:w-auto text-center">
                                {dictionary.services.cta_button_portfolio}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
