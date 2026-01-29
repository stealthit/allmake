/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function QuoteStep2Client({ dictionary, lang }: { dictionary: Record<string, any>, lang: string }) {
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
        sessionStorage.setItem("quote_budget", formData.budget);
        sessionStorage.setItem("quote_timeline", formData.timeline);
        sessionStorage.setItem("quote_requirements", formData.requirements);
        router.push(`/${lang}/quote/step3`);
    };

    return (
        <>
            <div className="py-12 md:py-20 px-6 bg-background-light dark:bg-background-dark">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-16">
                        <div className="flex justify-between items-end mb-4">
                            <div className="flex flex-col">
                                <span className="text-primary font-bold text-sm uppercase tracking-widest mb-1">
                                    {dictionary.quote.step2.step_label}
                                </span>
                                <h3 className="text-xl font-bold text-deep-charcoal dark:text-white">
                                    {dictionary.quote.step2.title}
                                </h3>
                            </div>
                            <span className="text-gray-400 text-sm font-medium">{dictionary.quote.step2.progress}</span>
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
                                        {dictionary.quote.step2.budget_title}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { id: "budget1", label: dictionary.quote.step2.budget_1 },
                                        { id: "budget2", label: dictionary.quote.step2.budget_2 },
                                        { id: "budget3", label: dictionary.quote.step2.budget_3 },
                                        { id: "budget4", label: dictionary.quote.step2.budget_4 },
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
                                        {dictionary.quote.step2.timeline_title}
                                    </h3>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        {
                                            id: "time1",
                                            label: dictionary.quote.step2.timeline_1_label,
                                            sub: dictionary.quote.step2.timeline_1_sub,
                                        },
                                        {
                                            id: "time2",
                                            label: dictionary.quote.step2.timeline_2_label,
                                            sub: dictionary.quote.step2.timeline_2_sub,
                                        },
                                        {
                                            id: "time3",
                                            label: dictionary.quote.step2.timeline_3_label,
                                            sub: dictionary.quote.step2.timeline_3_sub,
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
                                        {dictionary.quote.step2.requirements_title}
                                    </h3>
                                </div>
                                <textarea
                                    className="w-full px-6 py-5 rounded-2xl border-2 border-gray-100 dark:border-gray-600 dark:bg-white/5 focus:border-primary focus:ring-0 text-gray-700 dark:text-gray-200 placeholder:text-gray-300 transition-all"
                                    placeholder={dictionary.quote.step2.requirements_placeholder}
                                    rows={5}
                                    value={formData.requirements}
                                    onChange={handleTextChange}
                                ></textarea>
                            </section>

                            <div className="flex flex-col md:flex-row items-center gap-4 pt-6">
                                <Link
                                    href={`/${lang}/quote/step1`}
                                    className="w-full md:w-1/3 py-5 rounded-2xl font-bold text-gray-400 border-2 border-gray-100 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined">arrow_back</span>
                                    {dictionary.quote.step2.prev_button}
                                </Link>
                                <button
                                    className="w-full md:w-2/3 py-5 rounded-2xl font-bold text-white bg-primary hover:scale-[1.02] transition-transform btn-shadow flex items-center justify-center gap-2"
                                    type="submit"
                                >
                                    {dictionary.quote.step2.next_button}
                                    <span className="material-symbols-outlined">
                                        arrow_forward
                                    </span>
                                </button>
                            </div>
                        </form>
                    </div>
                    <p className="mt-8 text-center text-gray-400 text-sm">
                        {dictionary.quote.step2.disclaimer}
                    </p>
                </div>
            </div>
        </>
    );
}
