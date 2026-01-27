
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function QuoteStep3() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        privacy: false,
    });
    const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

    const privacyPolicy = `
1. 개인정보의 수집 및 이용 목적
STEALTH는 고객 문의 응대 및 서비스 제공을 위해 최소한의 개인정보를 수집하고 있습니다.

2. 수집하는 개인정보 항목
- 필수항목: 이름, 이메일, 전화번호, 회사명
- 서비스 이용 과정에서 생성되는 정보: 접속 로그, 쿠키, 접속 IP 정보 등

3. 개인정보의 보유 및 이용기간
이용자의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 일정 기간 동안 보존합니다.

4. 동의 거부 권리
귀하는 개인정보 수집 및 이용에 대한 동의를 거부할 권리가 있습니다. 다만, 동의를 거부할 경우 상담 및 서비스 이용에 제한이 있을 수 있습니다.
    `;

    const termsOfService = `
제1조 (목적)
본 약관은 STEALTH가 제공하는 웹사이트 및 관련 서비스의 이용조건 및 절차에 관한 사항을 규정함을 목적으로 합니다.

제2조 (약관의 효력 및 변경)
1. 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지함으로써 효율이 발생합니다.
2. STEALTH는 필요한 경우 관계법령을 위배하지 않는 범위 내에서 본 약관을 개정할 수 있습니다.

제3조 (서비스 이용)
1. 이용자는 본 약관 및 관계법령을 준수해야 합니다.
2. STEALTH는 안정적인 서비스 제공을 위해 최선을 다하나, 시스템 점검 등 필요한 경우 서비스의 전부 또는 일부를 일시적으로 중단할 수 있습니다.

제4조 (면책사항)
STEALTH는 천재지변, 서비스 점검 등 불가항력적인 사유로 발생한 손해에 대해 책임을 지지 않습니다.
    `;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Get data from previous steps
        const typeId = sessionStorage.getItem("quote_type") || "";
        const budgetId = sessionStorage.getItem("quote_budget") || "";
        const timelineId = sessionStorage.getItem("quote_timeline") || "";
        const requirements = sessionStorage.getItem("quote_requirements") || "";

        const typeLabels: Record<string, string> = {
            web: "웹 서비스",
            app: "모바일 앱",
            ai: "AI 솔루션",
            blockchain: "블록체인",
        };

        const budgetLabels: Record<string, string> = {
            budget1: "500만원 ~ 1,000만원 미만",
            budget2: "1,000만원 ~ 3,000만원 미만",
            budget3: "3,000만원 ~ 5,000만원 미만",
            budget4: "5,000만원 이상",
        };

        const timelineLabels: Record<string, string> = {
            time1: "1개월 이내",
            time2: "2~4개월",
            time3: "4개월 이상",
        };

        const fullMessage = `
[의뢰 상세 요구사항]
${requirements || "(작성 내용 없음)"}

[추가 정보]
- 예산 범위: ${budgetLabels[budgetId] || "선택 안 함"}
- 희망 기간: ${timelineLabels[timelineId] || "선택 안 함"}
        `.trim();

        // Call API to send email
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    company: formData.company,
                    type: '견적 문의',
                    categories: [typeLabels[typeId] || typeId || "미지정"],
                    message: fullMessage,
                }),
            });

            if (response.ok) {
                alert("견적 문의가 성공적으로 접수되었습니다.\n담당자가 확인 후 빠르게 연락드리겠습니다.");

                // Clear state
                sessionStorage.removeItem("quote_type");
                sessionStorage.removeItem("quote_budget");
                sessionStorage.removeItem("quote_timeline");
                sessionStorage.removeItem("quote_requirements");

                router.push("/");
            } else {
                alert("접수 중 오류가 발생했습니다.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("서버 연결에 실패했습니다.");
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark">
            <Header />
            <main className="flex-grow flex flex-col items-center py-20 px-6">
                <div className="w-full max-w-2xl">
                    <div className="mb-16">
                        <div className="flex justify-between items-end mb-4">
                            <div className="flex items-center gap-2">
                                <span className="bg-primary/10 text-primary font-bold text-xs px-3 py-1 rounded-full">
                                    STEP 3
                                </span>
                                <h1 className="text-lg font-bold text-deep-charcoal dark:text-white">마지막 단계</h1>
                            </div>
                            <span className="text-primary font-bold text-sm">100%</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="step-progress-fill h-full bg-primary w-full"></div>
                        </div>
                    </div>

                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-deep-charcoal dark:text-white">
                            연락처를 남겨주세요
                        </h2>
                        <p className="text-gray-500 text-lg">
                            기재해주신 정보를 바탕으로 전담 매니저가 연락을 드립니다.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-white/5 p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                                        성함
                                    </label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-2xl border-2 border-gray-50 dark:border-gray-700 focus:border-primary focus:ring-0 transition-all outline-none text-gray-700 dark:text-white bg-gray-50/50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-900 focus:bg-white dark:focus:bg-gray-900"
                                        placeholder="성함을 입력해주세요"
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                                        회사명
                                    </label>
                                    <input
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-2xl border-2 border-gray-50 dark:border-gray-700 focus:border-primary focus:ring-0 transition-all outline-none text-gray-700 dark:text-white bg-gray-50/50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-900 focus:bg-white dark:focus:bg-gray-900"
                                        placeholder="올메이크 (개인인 경우 성함)"
                                        required
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                                    이메일 주소
                                </label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-50 dark:border-gray-700 focus:border-primary focus:ring-0 transition-all outline-none text-gray-700 dark:text-white bg-gray-50/50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-900 focus:bg-white dark:focus:bg-gray-900"
                                    placeholder="example@company.com"
                                    required
                                    type="email"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                                    연락처
                                </label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-50 dark:border-gray-700 focus:border-primary focus:ring-0 transition-all outline-none text-gray-700 dark:text-white bg-gray-50/50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-900 focus:bg-white dark:focus:bg-gray-900"
                                    placeholder="010-0000-0000"
                                    required
                                    type="tel"
                                />
                            </div>
                            <div className="pt-2">
                                <label className="flex items-start gap-4 cursor-pointer group">
                                    <div className="relative flex items-center mt-0.5">
                                        <input
                                            name="privacy"
                                            checked={formData.privacy}
                                            onChange={handleChange}
                                            className="peer h-6 w-6 rounded-lg border-2 border-gray-200 text-primary focus:ring-primary transition-all cursor-pointer"
                                            id="privacy"
                                            required
                                            type="checkbox"
                                        />
                                    </div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                        <span className="text-primary font-bold">(필수)</span>{" "}
                                        개인정보 수집 및 이용에 동의합니다.
                                        <button
                                            type="button"
                                            onClick={() => setModalContent({ title: "이용 약관", content: termsOfService })}
                                            className="text-gray-400 underline decoration-gray-300 underline-offset-4 ml-2 hover:text-gray-600 dark:hover:text-gray-300 font-normal"
                                        >
                                            약관보기
                                        </button>
                                    </span>
                                </label>
                            </div>
                            <div className="pt-6">
                                <button
                                    className="w-full bg-primary hover:bg-[#00c2a5] text-white py-6 rounded-2xl font-bold text-xl transition-all mint-shadow transform active:scale-[0.99]"
                                    type="submit"
                                >
                                    제출하기
                                </button>
                                <p className="text-center text-gray-400 text-xs mt-6 flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-sm">
                                        lock
                                    </span>
                                    입력하신 정보는 안전하게 보호됩니다.
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="mt-12 text-center">
                        <button
                            className="text-gray-400 font-bold text-sm flex items-center justify-center gap-2 mx-auto hover:text-gray-600 dark:hover:text-gray-300 transition-colors group"
                            onClick={() => router.back()}
                        >
                            <span className="material-symbols-outlined text-lg group-hover:-translate-x-1 transition-transform">
                                arrow_back
                            </span>
                            이전 단계로 돌아가기
                        </button>
                    </div>
                </div>
            </main>
            <Footer />

            {/* Modal */}
            {modalContent && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setModalContent(null)}
                    ></div>
                    <div className="relative bg-white dark:bg-gray-900 w-full max-w-2xl max-h-[80vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col animate-in fade-in zoom-in duration-300">
                        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                            <h3 className="text-xl font-bold text-deep-charcoal dark:text-white">{modalContent.title}</h3>
                            <button
                                onClick={() => setModalContent(null)}
                                className="w-10 h-10 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>
                        <div className="p-8 overflow-y-auto custom-scrollbar">
                            <pre className="whitespace-pre-wrap font-sans text-gray-600 dark:text-gray-400 leading-relaxed">
                                {modalContent.content}
                            </pre>
                        </div>
                        <div className="p-6 border-t border-gray-100 dark:border-gray-800 text-center">
                            <button
                                onClick={() => setModalContent(null)}
                                className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:brightness-95 transition-all"
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
