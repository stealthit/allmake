import Link from "next/link";

export default function CtaSection({ dictionary }: { dictionary: any }) {
    return (
        <section className="mb-24 px-6">
            <div className="max-w-7xl mx-auto bg-deep-charcoal dark:bg-gray-900 rounded-[2.5rem] p-16 md:p-32 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/20 blur-[120px]"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-tight tracking-tight">
                        {dictionary.home.cta.title}
                    </h2>
                    <p className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-12 leading-relaxed font-light">
                        {dictionary.home.cta.desc}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/consultation"
                            className="bg-primary text-deep-charcoal px-12 py-6 rounded-2xl font-bold text-lg md:text-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl text-center min-w-[240px]"
                        >
                            {dictionary.home.cta.button}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
