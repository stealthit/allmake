import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../../i18n-config";

export default async function Contact({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);

    return (
        <>
            <div className="relative overflow-hidden pt-20 pb-24 bg-white dark:bg-background-dark text-center px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 tracking-wider uppercase">
                        {dictionary.contact.badge}
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black text-deep-charcoal dark:text-white leading-tight mb-8">
                        {dictionary.contact.hero_title_prefix}<span className="text-primary">{dictionary.contact.hero_title_suffix}</span>
                    </h1>
                    <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        {dictionary.contact.hero_desc_1}<br className="hidden md:block" />
                        {dictionary.contact.hero_desc_2}
                    </p>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]"></div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-5xl px-6 pb-32 mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Address Card */}
                    <div className="bg-white dark:bg-white/5 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/10 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-300">
                        <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">location_on</span>
                        </div>
                        <h3 className="text-xl font-bold text-deep-charcoal dark:text-white mb-3">{dictionary.contact.office_title}</h3>
                        <p className="text-gray-500 dark:text-white/70 leading-relaxed">
                            {dictionary.contact.office_addr_1}<br />{dictionary.contact.office_addr_2}
                        </p>
                    </div>

                    {/* Phone Card */}
                    <div className="bg-white dark:bg-white/5 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/10 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-300">
                        <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">call</span>
                        </div>
                        <h3 className="text-xl font-bold text-deep-charcoal dark:text-white mb-3">{dictionary.contact.phone_title}</h3>
                        <p className="text-gray-500 dark:text-white/70 text-lg font-medium">
                            {dictionary.contact.phone_value}
                        </p>
                    </div>

                    {/* Email Card */}
                    <div className="bg-white dark:bg-white/5 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-white/10 flex flex-col items-center text-center group hover:border-primary/30 transition-all duration-300">
                        <div className="w-16 h-16 shrink-0 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                            <span className="material-symbols-outlined text-3xl">mail</span>
                        </div>
                        <h3 className="text-xl font-bold text-deep-charcoal dark:text-white mb-3">{dictionary.contact.email_title}</h3>
                        <p className="text-gray-500 dark:text-white/70 font-medium">
                            {dictionary.contact.email_value}
                        </p>
                    </div>
                </div>

                {/* Map Section */}
                <div className="rounded-[2.5rem] overflow-hidden border border-gray-100 dark:border-white/10 shadow-xl h-[450px] bg-gray-100 dark:bg-gray-800 relative group">
                    <iframe
                        className="w-full h-full grayscale-[0.2] contrast-[1.1] transition-all duration-700"
                        src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%ED%95%A9%EC%A0%95%EB%8F%99%20358-3&t=&z=16&ie=UTF8&iwloc=&output=embed"
                        loading="lazy"
                        style={{ border: 0 }}
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        title="STEALTH Office Location"
                    ></iframe>
                    <div className="absolute inset-x-0 bottom-0 p-6 pointer-events-none">
                        <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md px-6 py-4 rounded-2xl inline-flex items-center gap-3 shadow-lg border border-white/20">
                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                            <span className="text-sm font-bold text-deep-charcoal dark:text-white">{dictionary.contact.map_hint}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
