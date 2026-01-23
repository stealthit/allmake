
"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        categories: [] as string[]
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setFormData(prev => {
            const newCategories = e.target.checked
                ? [...prev.categories, value]
                : prev.categories.filter(c => c !== value);
            return { ...prev, categories: newCategories };
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("문의가 성공적으로 접수되었습니다.\n담당자가 확인 후 빠르게 연락드리겠습니다.");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    message: "",
                    categories: []
                });
            } else {
                alert("접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
            }
        } catch (error) {
            console.error(error);
            alert("서버 연결에 실패했습니다.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Header />
            <main className="flex-1">
                {/* Hero Header Section */}
                <div className="px-4 py-12 text-center md:py-20 lg:px-40">
                    <h1 className="text-deep-charcoal dark:text-white tracking-tight text-4xl md:text-5xl font-bold leading-tight pb-4">
                        Contact Us
                    </h1>
                    <p className="mx-auto max-w-2xl text-primary/70 dark:text-white/60 text-lg font-medium leading-relaxed">
                        새로운 프로젝트의 시작, AllMake가 함께하겠습니다.<br className="hidden sm:block" />
                        전문적인 컨설팅을 통해 최적의 디지털 솔루션을 제안해 드립니다.
                    </p>
                </div>
                {/* Two-Column Grid Content */}
                <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 pb-24 lg:grid-cols-12 lg:px-10">
                    {/* Left Section: Form */}
                    <div className="lg:col-span-7">
                        <div className="rounded-2xl bg-white dark:bg-white/5 p-6 shadow-sm border border-gray-100 dark:border-white/10 md:p-10">
                            <h2 className="mb-8 text-2xl font-bold text-deep-charcoal dark:text-white">프로젝트 의뢰하기</h2>
                            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-deep-charcoal dark:text-white/80">고객명</span>
                                        <input
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            className="h-12 w-full rounded-lg border border-gray-200 bg-transparent px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/20 dark:text-white"
                                            placeholder="성함 또는 기업명을 입력해주세요"
                                            type="text"
                                        />
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-bold text-deep-charcoal dark:text-white/80">이메일</span>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="h-12 w-full rounded-lg border border-gray-200 bg-transparent px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/20 dark:text-white"
                                            placeholder="example@email.com"
                                            type="email"
                                        />
                                    </label>
                                </div>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-bold text-deep-charcoal dark:text-white/80">연락처</span>
                                    <input
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="h-12 w-full rounded-lg border border-gray-200 bg-transparent px-4 text-base focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/20 dark:text-white"
                                        placeholder="010-0000-0000"
                                        type="tel"
                                    />
                                </label>
                                <div className="flex flex-col gap-3">
                                    <span className="text-sm font-bold text-deep-charcoal dark:text-white/80">의뢰 항목 선택</span>
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                                        {['Web', 'App', 'AI', 'Blockchain'].map((item) => (
                                            <label key={item} className="flex cursor-pointer items-center gap-2 rounded-lg border border-gray-200 dark:border-white/20 p-3 hover:border-primary/50 transition-all">
                                                <input
                                                    type="checkbox"
                                                    value={item}
                                                    checked={formData.categories.includes(item)}
                                                    onChange={handleCheckboxChange}
                                                    className="form-checkbox h-5 w-5 rounded border-gray-200 text-primary focus:ring-primary dark:bg-white/5"
                                                />
                                                <span className="text-sm font-medium dark:text-white/90">{item}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-bold text-deep-charcoal dark:text-white/80">문의 내용</span>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full rounded-lg border border-gray-200 bg-transparent p-4 text-base focus:border-primary focus:ring-1 focus:ring-primary dark:border-white/20 dark:text-white"
                                        placeholder="프로젝트의 목적, 주요 기능 등 상세 내용을 작성해주세요"
                                        rows={5}
                                    ></textarea>
                                </label>
                                <button
                                    disabled={isSubmitting}
                                    className="mt-4 flex h-14 w-full items-center justify-center rounded-xl bg-primary text-white text-lg font-bold shadow-lg shadow-primary/20 hover:brightness-105 active:scale-[0.98] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                    type="submit"
                                >
                                    {isSubmitting ? '전송 중...' : '문의하기'}
                                </button>
                            </form>
                        </div>
                    </div>
                    {/* Right Section: Contact Info */}
                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-2xl font-bold text-deep-charcoal dark:text-white">Contact Info</h2>
                            <p className="text-primary/70 dark:text-white/60">
                                언제든 편하게 연락주세요. 담당자가 확인 후 빠른 시일 내에 연락드리겠습니다.
                            </p>
                        </div>
                        <div className="flex flex-col gap-8">
                            {/* Address */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined text-2xl">location_on</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold text-deep-charcoal dark:text-white">Office</h3>
                                    <p className="text-base text-gray-500 dark:text-white/70">서울시 마포구 합정동 358-3 서정빌딩 5층</p>
                                </div>
                            </div>
                            {/* Phone */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined text-2xl">call</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold text-deep-charcoal dark:text-white">Phone</h3>
                                    <p className="text-base text-gray-500 dark:text-white/70">010-6720-0007</p>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex gap-4">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <span className="material-symbols-outlined text-2xl">mail</span>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-bold text-deep-charcoal dark:text-white">Email</h3>
                                    <p className="text-base text-gray-500 dark:text-white/70">min@stealthinteractive.co.kr</p>
                                </div>
                            </div>
                        </div>
                        {/* Map Embed */}
                        <div className="mt-4 overflow-hidden rounded-2xl border border-gray-100 dark:border-white/10 shadow-sm h-64 bg-gray-100 dark:bg-gray-800">
                            <iframe
                                className="w-full h-full grayscale opacity-80 hover:opacity-100 transition-opacity"
                                src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%EC%8B%9C%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%ED%95%A9%EC%A0%95%EB%8F%99%20358-3&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                loading="lazy"
                                style={{ border: 0 }}
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                title="AllMake Office Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <FloatingButton />
        </>
    );
}
