export default function StatsSection({ dictionary }: { dictionary: any }) {
    return (
        <section className="bg-white dark:bg-background-dark/50 py-16 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center gap-6 p-8 rounded-2xl bg-deep-charcoal border border-gray-100 dark:border-gray-700">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl font-bold">check_circle</span>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-white mb-1">100+</p>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">{dictionary.home.stats.projects}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 p-8 rounded-2xl bg-deep-charcoal border border-gray-100 dark:border-gray-700">
                        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl font-bold">groups</span>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-white mb-1">10+</p>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">{dictionary.home.stats.experts}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 p-8 rounded-2xl bg-deep-charcoal border border-gray-100 dark:border-gray-700">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-3xl">star</span>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-white mb-1">100%</p>
                            <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">{dictionary.home.stats.satisfaction}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
