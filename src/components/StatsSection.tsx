export default function StatsSection() {
    return (
        <section className="bg-white dark:bg-background-dark/50 py-16 border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="flex items-center gap-6 p-8 rounded-2xl bg-background-light dark:bg-gray-800/30">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl font-bold">check_circle</span>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-deep-charcoal dark:text-white mb-1">100+</p>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">완료된 프로젝트</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 p-8 rounded-2xl bg-background-light dark:bg-gray-800/30">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            <span className="material-symbols-outlined text-3xl font-bold">groups</span>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-deep-charcoal dark:text-white mb-1">10+</p>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">기술 전문가</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 p-8 rounded-2xl bg-background-light dark:bg-gray-800/30 border-2 border-primary/20">
                        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white">
                            <span className="material-symbols-outlined text-3xl">star</span>
                        </div>
                        <div>
                            <p className="text-4xl font-black text-deep-charcoal dark:text-white mb-1">98%</p>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-widest">고객 만족도</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
