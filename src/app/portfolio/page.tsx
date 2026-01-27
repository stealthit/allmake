"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

type Category = "All" | "Web" | "Mobile" | "Blockchain" | "UI/UX";

interface Project {
    id: string;
    category: Category;
    title: string;
    description: string;
    image: string;
}

const projects: Project[] = [
    {
        id: "1",
        category: "Blockchain",
        title: "블록체인 기반 게임 서비스",
        description: "투명한 게임 내 자산 소유권 보전과 공정한 보상을 제공하는 차세대 Web3 게이밍 플랫폼.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuABSmXZwpY-B8IZmhM7X7R7OP5IgzdBtjZrVsBAdnGTFsix6RFJaO2QIMD-nXA92PYTsX5PosBQL_suhEJI8Ag28qzWJ8k9xWlRsyzF2ivknKNCNfx7T6Fx0Og-JnJAAI0GlGzecdK3rAPkFP7RiGyNtSdki79RnLz4a5YDkEtB-SZzT3in8U8ykf28Nis2f00V-deBW9EOF4hw_TTQSvyou8Zrfur2J1sofvcyiebXiiFY03Z0UNoiwJ9eJMo_OfpiYXTBvD622Yg",
    },
    {
        id: "2",
        category: "Web",
        title: "삼성전자 AI 서비스",
        description: "AI 기반의 차세대 서비스 연동 및 지능형 데이터 처리를 위한 삼성전자 통합 AI 솔루션 플랫폼.",
        image: "/images/portfolio-samsung-ai.png",
    },
    {
        id: "3",
        category: "Mobile",
        title: "Mobis Proactive AI Simulator",
        description: "실시간 차량 상태 데이터를 기반으로 능동적인 시나리오를 제안하고 테스트하는 현대모비스 AI 시뮬레이션 플랫폼.",
        image: "/images/portfolio-mobis.png",
    },
    {
        id: "4",
        category: "UI/UX",
        title: "스마트물류플랫폼 구축 및 운영 사업",
        description: "실시간 물류 추적, 재고 관리 및 운송 최적화를 지원하는 가시성 중심의 엔터프라이즈 스마트 물류 통합 관리 플랫폼.",
        image: "/images/portfolio-logistics.png",
    },

    {
        id: "5",
        category: "Web",
        title: "캐논코리아 MPS시스템 개발",
        description: "프린터 및 복합기 관리를 위한 통합 MPS(Managed Print Service) 시스템. 실시간 모니터링, 자동 소모품 관리 및 효율적인 출력 환경을 제공합니다.",
        image: "/images/portfolio-canon-mps.png",
    },
    {
        id: "6",
        category: "Web",
        title: "중국 현지 인플루언서 자동 매칭 플랫폼",
        description: "AI 기반 매칭으로 중국 샤오홍슈 인플루언서와 브랜드를 연결하는 마케팅 플랫폼. 100% 온라인 진행으로 효율적인 중국 시장 진출을 지원합니다.",
        image: "/images/portfolio-redclick.png",
    },
    {
        id: "7",
        category: "Web",
        title: "AI자막 생성 플랫폼",
        description: "음성 인식 기술을 활용하여 자동으로 자막을 생성하고 편집할 수 있는 지능형 콘텐츠 제작 지원 플랫폼.",
        image: "/images/portfolio-ai-subtitle.png",
    },
    {
        id: "8",
        category: "UI/UX",
        title: "어린이골프게임 UI&UX 작업",
        description: "어린이들을 위한 직관적이고 즐거운 골프 게임 인터페이스 디자인. 모션 인식 기반의 캐릭터 선택 및 직관적인 게임 플레이 경험을 제공합니다.",
        image: "/images/portfolio-golf.png",
    },
    {
        id: "9",
        category: "Web",
        title: "RMS플랫폼 CITY EARTH 관제 시스템",
        description: "도시 인프라 및 건물 관리를 위한 지능형 서비스 로봇 통합 관제 플랫폼. 실시간 로봇 상태 모니터링, 작업 스케줄링 및 데이터 분석 대시보드를 제공합니다.",
        image: "/images/portfolio-city-earth.png",
    },
    {
        id: "10",
        category: "Web",
        title: "CJ E&M BDP 시스템 개선작업",
        description: "엔터테인먼트 빅데이터 분석 플랫폼(BDP)의 사용자 인터페이스 및 데이터 시각화 개선. 데이터 조회 속도 향상과 사용자 중심의 시뮬레이션 기능을 강화했습니다.",
        image: "/images/portfolio-cj-bdp.png",
    },
    {
        id: "11",
        category: "Web",
        title: "컬처릿 게임음악제작 플랫폼",
        description: "사용자가 손쉽게 게임 음악을 제작하고 편집할 수 있는 웹 기반 DAW(Digital Audio Workstation) 시스템. 노트 에디팅, 가상 악기 연동 및 실시간 통계 기능을 제공합니다.",
        image: "/images/portfolio-cultureit.png",
    },
    {
        id: "12",
        category: "Web",
        title: "LG유플러스 U2 드라이브 개발",
        description: "기업용 클라우드 저장소 및 협업 플랫폼. 대용량 파일 관리, 공유 권한 설정, 팀 협업 드라이브 등의 기능을 제공하며 현대적인 인터페이스와 효율적인 파일 관리 시스템을 갖추고 있습니다.",
        image: "/images/portfolio-lguplus-u2.png",
    },
    {
        id: "13",
        category: "Web",
        title: "PCN FISS 시스템 개발",
        description: "부산광역시 시설물 및 선로 관리를 위한 지능형 시설 관리 시스템(FISS). 지도 기반의 실시간 위치 추적, 시설물 상세 정보 조회 및 유지보수 관리 기능을 제공합니다.",
        image: "/images/portfolio-pcn-fiss.png",
    },
    {
        id: "14",
        category: "Mobile",
        title: "에이비웍스 골프스윙3D 분석 개발",
        description: "AI 기반의 3D 골프 스윙 분석 시스템. 사용자의 스윙 영상을 실시간으로 분석하여 자세 교정, 비거리 측정 및 클럽 경로 최적화 등의 전문적인 데이터를 제공합니다.",
        image: "/images/portfolio-abworks-golf.png",
    },
    {
        id: "15",
        category: "UI/UX",
        title: "KT AICE 플랫폼 UI,UX 개선 작업",
        description: "AI 인재 양성을 위한 KT AICE 자격인증 교육 및 시험 플랫폼의 사용자 경험(UX)과 인터페이스(UI) 고도화 작업. 학습 편의성과 전문성 강화를 위한 디자인 개선.",
        image: "/images/portfolio-kt-aice.png",
    },
    {
        id: "16",
        category: "Web",
        title: "KT 통합광고 플랫폼 개발",
        description: "다양한 광고 매체를 통합 관리하고 최적화된 광고 효과를 제공하는 KT의 통합 광고 플랫폼 개발. 사용자 맞춤형 타겟팅과 실시간 성과 분석 기능을 제공합니다.",
        image: "/images/portfolio-kt-ad-platform.png",
    },
    {
        id: "17",
        category: "Web",
        title: "LG유플러스 콜라보레이션 플랫폼 서비스",
        description: "원활한 팀 협업과 프로젝트 관리를 위한 LG유플러스 콜라보레이션 플랫폼 개발. 실시간 문서 공유, 화상 회의 및 작업 진척도 추적 기능을 제공합니다.",
        image: "/images/portfolio-lguplus-collaboration.png",
    },
    {
        id: "18",
        category: "Web",
        title: "오비고 인포테인먼트 캐빈 서비스 개발",
        description: "차량 내 인포테인먼트 시스템을 위한 캐빈 서비스 개발. 개인화된 콘텐츠, 엔터테인먼트 및 편의 기능을 제공하여 사용자 경험을 향상시킵니다.",
        image: "/images/portfolio-obigo-infotainment-cabin-new.png",
    },
];

const categories: Category[] = ["All", "Web", "Mobile", "Blockchain", "UI/UX"];

export default function PortfolioPage() {
    const [activeCategory, setActiveCategory] = useState<Category>("All");

    const filteredProjects = projects.filter(
        (project) => activeCategory === "All" || project.category === activeCategory
    );

    return (
        <div className="bg-background-light dark:bg-background-dark text-deep-charcoal dark:text-white font-sans selection:bg-primary/30">
            <Header />
            <main>
                <section className="relative overflow-hidden pt-20 pb-16 bg-white dark:bg-background-dark">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary font-bold text-xs mb-6 tracking-wider uppercase">
                            Success Stories & Projects
                        </div>
                        <h1 className="text-5xl md:text-6xl font-black text-deep-charcoal dark:text-white leading-tight mb-8">
                            Our <span className="text-primary">Portfolio</span>
                        </h1>
                        <p className="text-lg text-gray-500 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            우리는 야심찬 브랜드의 파트너로서 최첨단 기술과 <br className="hidden md:block" />
                            인간 중심의 디자인을 통해 디지털 혁신을 이끌어갑니다.
                        </p>
                    </div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary rounded-full blur-[120px]"></div>
                    </div>
                </section>

                <section className="pt-12 pb-12 px-6">
                    <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-8 py-2.5 rounded-full font-bold text-sm border-2 transition-all ${activeCategory === category
                                    ? "bg-primary text-white border-primary"
                                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border-gray-100 dark:border-gray-700 hover:border-primary hover:text-primary"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </section>

                <section className="pb-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-700 portfolio-card transition-all duration-300">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            src={project.image}
                                        />
                                    </div>
                                    <div className="p-8">
                                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4 uppercase tracking-wider">
                                            {project.category}
                                        </span>
                                        <h3 className="text-2xl font-bold text-deep-charcoal dark:text-white mb-3">
                                            {project.title}
                                        </h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
            <FloatingButton />
        </div>
    );
}
