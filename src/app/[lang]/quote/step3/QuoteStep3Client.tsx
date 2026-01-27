"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function QuoteStep3Client({ dictionary, lang }: { dictionary: any, lang: string }) {
    const router = useRouter();
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        email: "",
        phone: "",
        privacy: false,
    });
    const [modalContent, setModalContent] = useState<{ title: string; content: string } | null>(null);

    const privacyPolicy = dictionary.quote.step3.privacy_policy_content;
    const termsOfService = dictionary.quote.step3.terms_service_content;

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
            web: dictionary.quote.types.web_title,
            app: dictionary.quote.types.app_title,
            ai: dictionary.quote.types.ai_title,
            blockchain: dictionary.quote.types.blockchain_title,
        };

        const budgetLabels: Record<string, string> = {
            budget1: dictionary.quote.step2.budget_1,
            budget2: dictionary.quote.step2.budget_2,
            budget3: dictionary.quote.step2.budget_3,
            budget4: dictionary.quote.step2.budget_4,
        };

        const timelineLabels: Record<string, string> = {
            time1: dictionary.quote.step2.timeline_1_label,
            time2: dictionary.quote.step2.timeline_2_label,
            time3: dictionary.quote.step2.timeline_3_label,
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
                alert(dictionary.quote.step3.success_alert);

                // Clear state
                sessionStorage.removeItem("quote_type");
                sessionStorage.removeItem("quote_budget");
                sessionStorage.removeItem("quote_timeline");
                sessionStorage.removeItem("quote_requirements");

                router.push(`/${lang}`);
            } else {
                alert(dictionary.quote.step3.fail_alert);
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert(dictionary.quote.step3.error_alert);
        }
    };

    return (
        <div className="bg-background-light dark:bg-background-dark">
            <div className="flex-grow flex flex-col items-center py-20 px-6">
                <div className="w-full max-w-2xl">
                    <div className="mb-16">
                        <div className="flex justify-between items-end mb-4">
                            <div className="flex items-center gap-2">
                                <span className="bg-primary/10 text-primary font-bold text-xs px-3 py-1 rounded-full">
                                    {dictionary.quote.step3.step_label}
                                </span>
                                <h1 className="text-lg font-bold text-deep-charcoal dark:text-white">{dictionary.quote.step3.title}</h1>
                            </div>
                            <span className="text-primary font-bold text-sm">{dictionary.quote.step3.progress}</span>
                        </div>
                        <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div className="step-progress-fill h-full bg-primary w-full"></div>
                        </div>
                    </div>

                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-deep-charcoal dark:text-white">
                            {dictionary.quote.step3.hero_title}
                        </h2>
                        <p className="text-gray-500 text-lg">
                            {dictionary.quote.step3.hero_desc}
                        </p>
                    </div>

                    <div className="bg-white dark:bg-white/5 p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100 dark:border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                                        {dictionary.quote.step3.label_name}
                                    </label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-2xl border-2 border-gray-50 dark:border-gray-700 focus:border-primary focus:ring-0 transition-all outline-none text-gray-700 dark:text-white bg-gray-50/50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-900 focus:bg-white dark:focus:bg-gray-900"
                                        placeholder={dictionary.quote.step3.placeholder_name}
                                        required
                                        type="text"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                                        {dictionary.quote.step3.label_company}
                                    </label>
                                    <input
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        className="w-full px-5 py-4 rounded-2xl border-2 border-gray-50 dark:border-gray-700 focus:border-primary focus:ring-0 transition-all outline-none text-gray-700 dark:text-white bg-gray-50/50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-900 focus:bg-white dark:focus:bg-gray-900"
                                        placeholder={dictionary.quote.step3.placeholder_company}
                                        required
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                                    {dictionary.quote.step3.label_email}
                                </label>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-50 dark:border-gray-700 focus:border-primary focus:ring-0 transition-all outline-none text-gray-700 dark:text-white bg-gray-50/50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-900 focus:bg-white dark:focus:bg-gray-900"
                                    placeholder={dictionary.quote.step3.placeholder_email}
                                    required
                                    type="email"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">
                                    {dictionary.quote.step3.label_phone}
                                </label>
                                <input
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-50 dark:border-gray-700 focus:border-primary focus:ring-0 transition-all outline-none text-gray-700 dark:text-white bg-gray-50/50 dark:bg-gray-800 hover:bg-white dark:hover:bg-gray-900 focus:bg-white dark:focus:bg-gray-900"
                                    placeholder={dictionary.quote.step3.placeholder_phone}
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
                                        {dictionary.quote.step3.privacy_agree}
                                        <button
                                            type="button"
                                            onClick={() => setModalContent({ title: dictionary.quote.step3.modal_title, content: termsOfService })}
                                            className="text-gray-400 underline decoration-gray-300 underline-offset-4 ml-2 hover:text-gray-600 dark:hover:text-gray-300 font-normal"
                                        >
                                            {dictionary.quote.step3.privacy_view}
                                        </button>
                                    </span>
                                </label>
                            </div>
                            <div className="pt-6">
                                <button
                                    className="w-full bg-primary hover:bg-[#00c2a5] text-white py-6 rounded-2xl font-bold text-xl transition-all mint-shadow transform active:scale-[0.99]"
                                    type="submit"
                                >
                                    {dictionary.quote.step3.submit_button}
                                </button>
                                <p className="text-center text-gray-400 text-xs mt-6 flex items-center justify-center gap-1">
                                    <span className="material-symbols-outlined text-sm">
                                        lock
                                    </span>
                                    {dictionary.quote.step3.secure_msg}
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
                            {dictionary.quote.step3.prev_button}
                        </button>
                    </div>
                </div>
            </div>

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
                                {dictionary.quote.step3.modal_close}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
