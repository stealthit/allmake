import Link from "next/link";

export default function HeroSection({ dictionary, lang }: { dictionary: any; lang?: string }) {
    const isEn = lang === "en";

    return (
        <section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 tracking-wider uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        {dictionary.home.hero.badge}
                    </div>
                    <h1 className={`font-black text-deep-charcoal dark:text-white leading-[1.1] mb-8 ${isEn ? "text-4xl md:text-6xl" : "text-5xl md:text-7xl"}`}>
                        {dictionary.home.hero.title_prefix} <span className="text-primary">{dictionary.home.hero.title_highlight}</span> {dictionary.home.hero.title_suffix}
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
                        {dictionary.home.hero.desc}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/quote/step1" className="bg-primary hover:scale-105 transition-transform text-white px-8 py-4 rounded-xl font-bold text-lg mint-shadow">
                            {dictionary.home.hero.cta_quote}
                        </Link>
                        <Link href="/portfolio" className="border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-colors px-8 py-4 rounded-xl font-bold text-lg">
                            {dictionary.home.hero.cta_portfolio}
                        </Link>
                    </div>
                </div>
                <div className="relative">
                    <div className="w-full aspect-square rounded-[2rem] bg-gradient-to-br from-primary/20 to-transparent absolute -top-10 -right-10 blur-3xl opacity-50"></div>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            alt="Futuristic software development dashboard with glassmorphism elements"
                            className="w-full h-full object-cover"
                            src="/images/hero-banner.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
