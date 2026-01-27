
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function ConsultationPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-deep-charcoal dark:text-gray-100 antialiased min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow">
                <section className="pt-16 pb-12 text-center">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 tracking-wider uppercase">
                            Contact Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-deep-charcoal dark:text-white mb-4">지금 바로 상담하기</h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            각 분야의 전문가가 귀하의 프로젝트를 위해 대기하고 있습니다.<br />
                            궁금하신 점이 있다면 언제든 편하게 연락주세요.
                        </p>
                    </div>
                </section>
                <section className="pb-24 px-6">
                    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white dark:bg-gray-800/50 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm card-hover flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                <span className="material-symbols-outlined text-5xl">support_agent</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">기획/영업</h3>
                            <p className="text-gray-400 text-sm mb-6">프로젝트 초기 상담 및 견적 문의</p>
                            <div className="text-3xl md:text-4xl font-black text-deep-charcoal dark:text-white mb-10 tracking-tight">
                                010-6720-0007
                            </div>
                            <a className="w-full bg-primary hover:bg-opacity-90 text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mint-shadow" href="tel:010-6720-0007">
                                <span className="material-symbols-outlined">call</span>
                                전화하기
                            </a>
                        </div>
                        <div className="bg-white dark:bg-gray-800/50 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm card-hover flex flex-col items-center text-center">
                            <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                <span className="material-symbols-outlined text-5xl">code</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">개발</h3>
                            <p className="text-gray-400 text-sm mb-6">기술 협업 및 개발 프로세스 문의</p>
                            <div className="text-3xl md:text-4xl font-black text-deep-charcoal dark:text-white mb-10 tracking-tight">
                                010-2798-1801
                            </div>
                            <a className="w-full bg-primary hover:bg-opacity-90 text-white py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 mint-shadow" href="tel:010-2798-1801">
                                <span className="material-symbols-outlined">call</span>
                                전화하기
                            </a>
                        </div>
                    </div>

                </section>
            </main>
            <Footer />
            <FloatingButton />
        </div>
    );
}
