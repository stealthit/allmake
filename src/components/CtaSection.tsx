import Link from "next/link";

export default function CtaSection({ dictionary }: { dictionary: any }) {
    return (
        <section className="mb-24 px-6">
            <div className="max-w-7xl mx-auto bg-deep-charcoal dark:bg-gray-900 rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[100px]"></div>
                <div className="relative z-10 md:flex items-center justify-between gap-12">
                    <div className="flex-1 min-w-0">
                        <h2 className="text-lg md:text-2xl lg:text-3xl font-black text-white mb-6 whitespace-nowrap overflow-hidden text-ellipsis">{dictionary.home.cta.title}</h2>
                        <p className="text-gray-400 text-lg mb-0">
                            {dictionary.home.cta.desc}
                        </p>
                    </div>
                    <div className="mt-10 md:mt-0 flex flex-col gap-4 flex-shrink-0">
                        <Link href="/consultation" className="bg-primary text-deep-charcoal px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white transition-colors text-center whitespace-nowrap">
                            {dictionary.home.cta.button}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
