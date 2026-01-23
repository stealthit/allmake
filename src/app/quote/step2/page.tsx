
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default function QuoteStep2() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        budget: "",
        timeline: "time2", // Default to standard
        requirements: "",
    });

    const handleBudgetChange = (id: string) => {
        setFormData((prev) => ({ ...prev, budget: id }));
    };

    const handleTimelineChange = (id: string) => {
        setFormData((prev) => ({ ...prev, timeline: id }));
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, requirements: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, we would save this state to context or pass it via query params.
        // For now, we just navigate to Step 3.
        console.log("Step 2 Data:", formData);
        router.push("/quote/step3");
    };

    return (
        <>
            <Header />
            <main className="py-12 md:py-20 px-6 bg-background-light dark:bg-background-dark">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <div className="flex justify-between items-end mb-4">
                            <div className="flex flex-col">
                                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-1">
                                    Step 02 / 03
                                </span>
                                <h3 className="text-xl font-bold text-deep-charcoal dark:text-white">
                                    프로젝트 상세 정보
                                </h3>
                            </div>
                            <span className="text-gray-400 text-sm font-medium">50% 완료</span>
                        </div>
                        <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="h-full bg-primary w-1/2 transition-all duration-500"></div>
                        </div>
                    </div>

                    <div className="">
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <section>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="material-symbols-outlined text-primary">
                                        payments
                                    </span>
                                    <h3 className="text-xl font-bold text-deep-charcoal dark:text-white">
                                        예상 예산 범위를 선택해 주세요
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { id: "budget1", label: "500만원 ~ 1,000만원 미만" },
                                        { id: "budget2", label: "1,000만원 ~ 3,000만원 미만" },
                                        { id: "budget3", label: "3,000만원 ~ 5,000만원 미만" },
                                        { id: "budget4", label: "5,000만원 이상" },
                                    ].map((item) => (
                                        <div key={item.id}>
                                            <input
                                                type="radio"
                                                id={item.id}
                                                name="budget"
                                                value={item.id}
                                                checked={formData.budget === item.id}
                                                onChange={() => handleBudgetChange(item.id)}
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor={item.id}
                                                className={`flex items-center justify-between p-5 border-2 rounded-2xl cursor-pointer transition-all group ${formData.budget === item.id
                                                    ? "bg-white dark:bg-gray-800 border-primary card-shadow-selected scale-[1.02]"
                                                    : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-600 hover:border-primary/50"
                                                    }`}
                                            >
                                                <span className={`font-bold transition-colors ${formData.budget === item.id
                                                    ? "text-deep-charcoal dark:text-white"
                                                    : "text-gray-700 dark:text-gray-300 group-hover:text-primary"
                                                    }`}>
                                                    {item.label}
                                                </span>
                                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${formData.budget === item.id
                                                    ? "bg-primary text-white"
                                                    : "border-2 border-gray-100 dark:border-gray-600 group-hover:border-primary"
                                                    }`}>
                                                    {formData.budget === item.id && (
                                                        <span className="material-symbols-outlined text-sm">
                                                            check
                                                        </span>
                                                    )}
                                                </div>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="material-symbols-outlined text-primary">
                                        calendar_today
                                    </span>
                                    <h3 className="text-xl font-bold text-deep-charcoal dark:text-white">
                                        희망하는 개발 기간은 어느 정도인가요?
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        {
                                            id: "time1",
                                            label: "1개월 이내",
                                            sub: "빠른 개발",
                                        },
                                        {
                                            id: "time2",
                                            label: "2~4개월",
                                            sub: "표준 기간",
                                        },
                                        {
                                            id: "time3",
                                            label: "4개월 이상",
                                            sub: "대규모 프로젝트",
                                        },
                                    ].map((item) => (
                                        <div key={item.id}>
                                            <input
                                                type="radio"
                                                id={item.id}
                                                name="timeline"
                                                value={item.id}
                                                checked={formData.timeline === item.id}
                                                onChange={() => handleTimelineChange(item.id)}
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor={item.id}
                                                className={`flex flex-col items-center justify-center p-6 border-2 rounded-2xl cursor-pointer transition-all group text-center ${formData.timeline === item.id
                                                    ? "bg-white dark:bg-gray-800 border-primary card-shadow-selected scale-[1.02]"
                                                    : "bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-600 hover:border-primary/50"
                                                    }`}
                                            >
                                                <span className="text-sm text-gray-400 mb-1">
                                                    {item.sub}
                                                </span>
                                                <span className={`font-bold transition-colors ${formData.timeline === item.id
                                                    ? "text-deep-charcoal dark:text-white"
                                                    : "text-gray-700 dark:text-gray-300 group-hover:text-primary"
                                                    }`}>
                                                    {item.label}
                                                </span>
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <div className="flex items-center gap-2 mb-6">
                                    <span className="material-symbols-outlined text-primary">
                                        description
                                    </span>
                                    <h3 className="text-xl font-bold text-deep-charcoal dark:text-white">
                                        추가 요구사항이나 궁금한 점을 적어주세요
                                    </h3>
                                </div>
                                <textarea
                                    className="w-full px-6 py-5 rounded-2xl border-2 border-gray-100 dark:border-gray-600 dark:bg-white/5 focus:border-primary focus:ring-0 text-gray-700 dark:text-gray-200 placeholder:text-gray-300 transition-all"
                                    placeholder="예: 프로젝트의 핵심 기능, 참고하고 싶은 벤치마킹 서비스, 선호하는 디자인 무드 등을 자유롭게 작성해 주세요."
                                    rows={5}
                                    value={formData.requirements}
                                    onChange={handleTextChange}
                                ></textarea>
                            </section>

                            <div className="flex flex-col md:flex-row items-center gap-4 pt-6">
                                <Link
                                    href="/quote/step1"
                                    className="w-full md:w-1/3 py-5 rounded-2xl font-bold text-gray-400 border-2 border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined">arrow_back</span>
                                    이전 단계로
                                </Link>
                                <button
                                    className="w-full md:w-2/3 py-5 rounded-2xl font-bold text-white bg-primary hover:scale-[1.02] transition-transform btn-shadow flex items-center justify-center gap-2"
                                    type="submit"
                                >
                                    다음 단계로 (3/3)
                                    <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <p className="mt-8 text-center text-gray-400 text-sm">
                        입력하신 정보는 파트너십 구축을 위한 검토 용도로만 사용됩니다.
                    </p>
                </div>
            </main>
            <Footer />
            <FloatingButton />
        </>
    );
}
