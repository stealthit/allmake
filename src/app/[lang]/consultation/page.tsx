import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../../i18n-config";

export default async function ConsultationPage({ params }: { params: { lang: Locale } }) {
    const dictionary = await getDictionary(params.lang);

    return (
        <>
            <section className="pt-16 pb-12 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 tracking-wider uppercase">
                        {dictionary.consultation.badge}
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-deep-charcoal dark:text-white mb-4">{dictionary.consultation.title}</h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        {dictionary.consultation.desc}
                    </p>
                </div>
            </section>
            <section className="pb-24 px-6">
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white dark:bg-gray-800/50 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm card-hover flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                            <span className="material-symbols-outlined text-5xl">support_agent</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{dictionary.consultation.planning_title}</h3>
                        <p className="text-gray-400 text-sm mb-6">{dictionary.consultation.planning_desc}</p>
                        <div className="text-3xl md:text-4xl font-black text-deep-charcoal dark:text-white mb-10 tracking-tight">
                            {dictionary.consultation.planning_phone}
                        </div>
                        <a className="w-full bg-primary hover:bg-opacity-90 text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mint-shadow" href={`tel:${dictionary.consultation.planning_phone}`}>
                            <span className="material-symbols-outlined">call</span>
                            {dictionary.consultation.call_button}
                        </a>
                    </div>
                    <div className="bg-white dark:bg-gray-800/50 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm card-hover flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                            <span className="material-symbols-outlined text-5xl">code</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{dictionary.consultation.dev_title}</h3>
                        <p className="text-gray-400 text-sm mb-6">{dictionary.consultation.dev_desc}</p>
                        <div className="text-3xl md:text-4xl font-black text-deep-charcoal dark:text-white mb-10 tracking-tight">
                            {dictionary.consultation.dev_phone}
                        </div>
                        <a className="w-full bg-primary hover:bg-opacity-90 text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mint-shadow" href={`tel:${dictionary.consultation.dev_phone}`}>
                            <span className="material-symbols-outlined">call</span>
                            {dictionary.consultation.call_button}
                        </a>
                    </div>
                </div>

            </section>
        </>
    );
}
