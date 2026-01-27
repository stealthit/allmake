import Link from "next/link";

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden pt-16 pb-24 md:pt-32 md:pb-40">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                <div className="z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 tracking-wider uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        차세대 소프트웨어 파트너
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black text-deep-charcoal dark:text-white leading-[1.1] mb-8">
                        STEALTH: <span className="text-primary">디지털 혁신</span>의 <br />미래를 건설하다
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-lg leading-relaxed">
                        AI, 블록체인 및 UI/UX 솔루션으로 <br className="hidden md:block" />
                        기업의 혁신과 성장을 이끄는 최적의 파트너입니다.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link href="/quote/step1" className="bg-primary hover:scale-105 transition-transform text-white px-8 py-4 rounded-xl font-bold text-lg mint-shadow">
                            견적 문의하기
                        </Link>
                        <Link href="/portfolio" className="border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-colors px-8 py-4 rounded-xl font-bold text-lg">
                            포트폴리오 보기
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
