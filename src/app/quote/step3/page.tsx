
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Call API to log data (simulating email send)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    type: 'Quote Request (Step 3)',
                    // In a real app, include data from steps 1 & 2 here
                }),
            });

            if (response.ok) {
                alert("견적 문의가 성공적으로 접수되었습니다.\n담당자가 확인 후 빠르게 연락드리겠습니다.");
                router.push("/"); // Redirect to Home
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
                                        <a
                                            className="text-gray-400 underline decoration-gray-300 underline-offset-4 ml-2 hover:text-gray-600 dark:hover:text-gray-300 font-normal"
                                            href="#"
                                        >
                                            약관보기
                                        </a>
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
        </div>
    );
}
