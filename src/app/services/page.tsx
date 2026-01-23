"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function ServicesPage() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-deep-charcoal dark:text-white font-sans selection:bg-primary/30">
            <Header />
            <main>
                {/* Hero Section */}
                <section className="pt-20 pb-16 bg-white dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 tracking-wider uppercase">
                            Expertise & Capabilities
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-deep-charcoal dark:text-white leading-tight mb-8">
                            Our <span className="text-primary">Services</span>
                        </h1>
                        <p className="text-xl text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            AllMake은 최신 기술 스택과 풍부한 경험을 바탕으로 비즈니스의 디지털 전환을 이끕니다.<br className="hidden md:block" />
                            기획부터 배포까지, 최상의 품질과 속도로 전문적인 개발 솔루션을 제공합니다.
                        </p>
                    </div>
                </section>

                <section className="py-20 space-y-32">
                    {/* Web Development */}
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                    <span className="material-symbols-outlined text-5xl">desktop_windows</span>
                                </div>
                                <h2 className="text-3xl font-extrabold mb-4 text-deep-charcoal dark:text-white">Web Development</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                    비즈니스 목표를 달성하기 위한 고성능 맞춤형 웹 애플리케이션을 구축합니다. 최신 프레임워크를 사용하여 확장성과 유지보수성이 뛰어난 최적의 솔루션을 제공합니다.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">React.js</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Next.js</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">TypeScript</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Node.js</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Tailwind CSS</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Python/Django</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary font-bold">check</span>
                                        <span>반응형 디자인 및 크로스 브라우징 최적화</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary font-bold">check</span>
                                        <span>SEO 최적화 및 검색 엔진 노출 강화</span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="rounded-3xl overflow-hidden shadow-xl">
                                    <img alt="Web Development Interface" className="w-full h-auto object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABSmXZwpY-B8IZmhM7X7R7OP5IgzdBtjZrVsBAdnGTFsix6RFJaO2QIMD-nXA92PYTsX5PosBQL_suhEJI8Ag28qzWJ8k9xWlRsyzF2ivknKNCNfx7T6Fx0Og-JnJAAI0GlGzecdK3rAPkFP7RiGyNtSdki79RnLz4a5YDkEtB-SZzT3in8U8ykf28Nis2f00V-deBW9EOF4hw_TTQSvyou8Zrfur2J1sofvcyiebXiiFY03Z0UNoiwJ9eJMo_OfpiYXTBvD622Yg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Apps */}
                    <div className="bg-white dark:bg-gray-800/30 py-24">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                <div>
                                    <div className="rounded-3xl overflow-hidden shadow-xl">
                                        <img alt="Mobile App Development" className="w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDuXS9gvL1QGxYwBD98VyPJPKw8nF_sbt7W7BxJwfDGqVBMTolSH3CBeYm7Wg_0U3BGUCjW3Q8nxJQdHNGZePc1B8Ho3pczWhrVALGdA4xeSzU_gayx53JWTzDKOahI7cAnScndtIondGkcTDd0g6juBI1tOXjzWZcTV2QxaJLEYXwDFRqI5i-Q2AlhhaZ95upXLpI6Ij8vNqOS2lBVkzfB7T01m3ZziEOS7TKidCn0AXA1spvFCycdXNbk70KozWGUUYFndkeawY" />
                                    </div>
                                </div>
                                <div>
                                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                        <span className="material-symbols-outlined text-5xl">smartphone</span>
                                    </div>
                                    <h2 className="text-3xl font-extrabold mb-4 text-deep-charcoal dark:text-white">Mobile Apps</h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                        iOS와 Android 환경 모두에서 원활하게 작동하는 고성능 모바일 애플리케이션을 개발합니다. 네이티브급 퍼포먼스와 직관적인 사용성을 보장합니다.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Flutter</span>
                                        <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">React Native</span>
                                        <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Swift</span>
                                        <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Kotlin</span>
                                        <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Firebase</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                            <span className="material-symbols-outlined text-primary font-bold">check</span>
                                            <span>스토어 등록 지원 및 서비스 런칭 관리</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                            <span className="material-symbols-outlined text-primary font-bold">check</span>
                                            <span>푸시 알림 및 외부 API 연동 최적화</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* UI/UX Design */}
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="order-2 md:order-1">
                                <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8">
                                    <span className="material-symbols-outlined text-5xl">palette</span>
                                </div>
                                <h2 className="text-3xl font-extrabold mb-4 text-deep-charcoal dark:text-white">UI/UX Design</h2>
                                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                    사용자 중심의 사고를 기반으로 아름답고 사용하기 편리한 디자인을 창조합니다. 높은 전환율과 사용자 만족도를 위한 정밀한 UX 설계를 제공합니다.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Figma</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Adobe XD</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">After Effects</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Prototyping</span>
                                    <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Design Systems</span>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary font-bold">check</span>
                                        <span>유저 시나리오 분석 및 프로토타이핑</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                        <span className="material-symbols-outlined text-primary font-bold">check</span>
                                        <span>브랜드 아이덴티티를 반영한 맞춤 디자인</span>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 md:order-2">
                                <div className="rounded-3xl overflow-hidden shadow-xl">
                                    <img alt="UI/UX Design Process" className="w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlzQKI4eFxpNQ8Am0SikWhhYwb2NGedCkIoUhVPzDLeV9a-QMvLx_KW28kC3E6bnvs-_rYG6WNYX7sw9kw4j4iqCiWtU7hxzg-gedKTYmLZvZEi_303MKyt2FV8AgN5ZTv9lDa7RnMdGtbJN5wX-SR6Gwo3NbkIeSQQA2Cvkm6-bnSN5w-fyLcxZP1SFy1C_-bP195WNKF2Ff-F_g8cLxqT71UVgQqGZOEdnymkMw5G4IC1mWLTFR1GjjbHUH4kJgNt9fE9Cw8VFg" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blockchain Solutions */}
                    <div className="bg-white dark:bg-gray-800/30 py-24">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="grid md:grid-cols-2 gap-16 items-center">
                                <div>
                                    <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-primary/20">
                                        <img alt="Blockchain Technology" className="w-full h-[400px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-vpytXw0F6wB7ecPxxRaXseGkabtJKcJyrDZgrt5AeBmkUhSeMim11XaoMw1UivPYpSaJuy7CRWVPs8zTUugjw2EuQoJWoDLWT9LBDVaNVgcSxSBz-7pFmKmZ-LY0zRtwep7cFkLqXrDtsgmCOc0lHaSBrOiOoI3VWsBYTIJge7kipoGpZIUs-cYycOQKtfsSk2XJC7EeOWkLRg0IpimCqnQRyUPLsvreIGouwvwU53dfXG92c152zeXGJnudGGk5bUi5g3INVt8" />
                                    </div>
                                </div>
                                <div>
                                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20">
                                        <span className="material-symbols-outlined text-5xl">currency_bitcoin</span>
                                    </div>
                                    <h2 className="text-3xl font-extrabold mb-4 text-primary">Blockchain Solutions</h2>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                        이더리움 기반 Solidity를 이용한 분산앱 및 BTC, ETH, XRP 등의 거래소형 지갑 개발을 지원합니다. 안전하고 투명한 Web3 생태계를 위한 기술력을 제공합니다.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-primary/30 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Solidity</span>
                                        <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-primary/30 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Ethereum</span>
                                        <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-primary/30 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Web3.js</span>
                                        <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-primary/30 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Smart Contracts</span>
                                        <span className="px-3 py-1 bg-white dark:bg-gray-800 border border-primary/30 rounded-full text-xs font-semibold text-gray-600 dark:text-gray-300">Hyperledger</span>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                            <span className="material-symbols-outlined text-primary font-bold">check</span>
                                            <span>스마트 컨트랙트 개발 및 보안 감사</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                                            <span className="material-symbols-outlined text-primary font-bold">check</span>
                                            <span>NFT 민팅 사이트 및 마켓플레이스 구축</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="mb-24 px-6">
                    <div className="max-w-7xl mx-auto bg-deep-charcoal dark:bg-gray-900 rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[100px]"></div>
                        <div className="relative z-10 text-center">
                            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">최고의 파트너와 함께 시작하세요.</h2>
                            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">아이디어만 가져오셔도 좋습니다. AllMake이 비즈니스의 성공적인 디지털 구현을 끝까지 책임집니다.</p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                                <button className="bg-primary text-deep-charcoal px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white transition-colors w-full md:w-auto">
                                    지금 바로 상담하기
                                </button>
                                <button className="border-2 border-gray-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:border-primary transition-colors w-full md:w-auto">
                                    포트폴리오 더보기
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButton />
        </div>
    );
}
