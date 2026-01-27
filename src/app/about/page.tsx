
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Header />
            <main>
                <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-32 bg-white dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-8 tracking-wider uppercase">
                            About STEALTH
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-deep-charcoal dark:text-white leading-tight mb-8">
                            세상을 바꾸는 기술, <span className="text-primary">STEALTH</span>
                        </h1>
                        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            STEALTH는 끊임없는 기술 혁신을 통해 디지털 미래를 선도합니다.<br className="hidden md:block" />
                            우리는 고객의 비즈니스 가치를 극대화하는 최고의 소프트웨어 솔루션을 제공합니다.
                        </p>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]"></div>
                    </div>
                </section>

                <section className="py-24 bg-background-light dark:bg-gray-900/50">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">Core Values</h2>
                            <h3 className="text-3xl md:text-4xl font-black text-deep-charcoal dark:text-white">우리가 추구하는 가치</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 text-center card-hover">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
                                    <span className="material-symbols-outlined text-4xl">handshake</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-4">Trust</h4>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                    신뢰를 최우선으로 생각하며 고객과의 파트너십을 소중히 여깁니다.<br />
                                    투명한 소통으로 최선의 결과를 약속합니다.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 text-center card-hover">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
                                    <span className="material-symbols-outlined text-4xl">lightbulb</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-4">Innovation</h4>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                    기존의 틀을 깨는 혁신적인 사고로 새로운 디지털 가능성을 제시합니다.<br />
                                    최신 기술 트렌드를 선도합니다.
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-10 rounded-3xl border border-gray-100 dark:border-gray-700 text-center card-hover">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-8">
                                    <span className="material-symbols-outlined text-4xl">trending_up</span>
                                </div>
                                <h4 className="text-2xl font-bold mb-4">Growth</h4>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                                    고객사와 함께 성장하는 동반자로서<br />
                                    지속 가능한 비즈니스 성장을 위한 기술적 기반을 마련합니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-24 bg-white dark:bg-background-dark overflow-hidden">
                    <div className="max-w-4xl mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-primary font-bold text-sm tracking-[0.2em] uppercase mb-4">History</h2>
                            <h3 className="text-3xl md:text-4xl font-black text-deep-charcoal dark:text-white">STEALTH의 발자취</h3>
                        </div>
                        <div className="relative">
                            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 timeline-line -translate-x-1/2"></div>
                            <div className="space-y-16">
                                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                                    <div className="md:w-1/2 md:pr-12 text-left md:text-right order-2 md:order-1 pl-20 md:pl-0">
                                        <span className="text-primary font-black text-2xl">2026</span>
                                        <h4 className="text-xl font-bold mt-2">AI 시장 진출 및 서비스 확장</h4>
                                        <p className="text-gray-500 mt-2">AI 기반 컨텐츠 서비스 오픈 준비</p>
                                    </div>
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-white dark:border-background-dark z-10"></div>
                                    <div className="md:w-1/2 md:pl-12 order-3"></div>
                                </div>
                                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                                    <div className="md:w-1/2 md:pr-12 order-1"></div>
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-white dark:border-background-dark z-10"></div>
                                    <div className="md:w-1/2 md:pl-12 text-left order-2 pl-20 md:pl-12">
                                        <span className="text-primary font-black text-2xl">2025</span>
                                        <h4 className="text-xl font-bold mt-2">블록체인 및 AI 업무 확대</h4>
                                        <p className="text-gray-500 mt-2">전문 부서 신설 및 다수의 프로젝트 진행</p>
                                    </div>
                                </div>
                                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                                    <div className="md:w-1/2 md:pr-12 text-left md:text-right order-2 md:order-1 pl-20 md:pl-0">
                                        <span className="text-primary font-black text-2xl">2024</span>
                                        <h4 className="text-xl font-bold mt-2">100번째 프로젝트 돌파</h4>
                                        <p className="text-gray-500 mt-2">누적 완료 프로젝트 100건 달성 및 고객 만족도 100% 기록</p>
                                    </div>
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-white dark:border-background-dark z-10"></div>
                                    <div className="md:w-1/2 md:pl-12 order-3"></div>
                                </div>
                                <div className="relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0">
                                    <div className="md:w-1/2 md:pr-12 order-1"></div>
                                    <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-white dark:border-background-dark z-10"></div>
                                    <div className="md:w-1/2 md:pl-12 text-left order-2 pl-20 md:pl-12">
                                        <span className="text-primary font-black text-2xl">2019</span>
                                        <h4 className="text-xl font-bold mt-2">스텔스인터렉티브 설립</h4>
                                        <p className="text-gray-500 mt-2">차세대 소프트웨어 에이전시로 출범, 디지털 트랜스포메이션 리딩 시작</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="mb-24 px-6 pt-12">
                    <div className="max-w-7xl mx-auto bg-deep-charcoal dark:bg-gray-900 rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[100px]"></div>
                        <div className="relative z-10 md:flex items-center justify-between gap-12">
                            <div className="max-w-xl">
                                <h2 className="text-4xl md:text-5xl font-black text-white mb-6">디지털 여정을 시작할 준비가 되셨나요?</h2>
                                <p className="text-gray-400 text-lg mb-0">STEALTH와 함께 당신의 비즈니스를 디지털 혁신으로 이끄세요.</p>
                            </div>
                            <div className="mt-10 md:mt-0 flex flex-col gap-4">
                                <Link href="/consultation" className="bg-primary text-deep-charcoal px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white transition-all text-center mint-shadow">
                                    지금 바로 상담하기
                                </Link>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButton />
        </>
    );
}
