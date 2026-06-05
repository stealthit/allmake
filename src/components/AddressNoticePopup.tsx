"use client";

import { useState, useEffect } from "react";

interface AddressNoticePopupProps {
    lang?: string;
}

export default function AddressNoticePopup({ lang = "ko" }: AddressNoticePopupProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [dontShowToday, setDontShowToday] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Check localStorage to see if the notice should be hidden
        const hideUntil = localStorage.getItem("hideAddressNoticeUntil");
        if (!hideUntil || new Date().getTime() > parseInt(hideUntil, 10)) {
            setIsOpen(true);
        }
    }, []);

    const handleClose = () => {
        if (dontShowToday) {
            // Set expiration to 24 hours from now
            const expiryTime = new Date().getTime() + 24 * 60 * 60 * 1000;
            localStorage.setItem("hideAddressNoticeUntil", expiryTime.toString());
        }
        setIsOpen(false);
    };

    const handleCopy = async () => {
        const addressText = "경기도 고양시 덕양구 덕은동 692 지엚메트로시티한강 A동 304호";
        try {
            await navigator.clipboard.writeText(addressText);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error("Failed to copy text: ", err);
        }
    };

    if (!isOpen) return null;

    const isEn = lang === "en";

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={handleClose}></div>

            {/* Modal Container */}
            <div className="relative bg-white dark:bg-[#0d221f] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10 flex flex-col p-6 md:p-8 animate-in fade-in zoom-in duration-300 text-center">
                {/* Header Icon */}
                <div className="w-16 h-16 bg-gradient-to-tr from-primary to-[#00d1b2]/70 rounded-2xl flex items-center justify-center text-white mb-5 mx-auto shadow-lg shadow-primary/20">
                    <span className="material-symbols-outlined text-3xl font-light">local_shipping</span>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary dark:text-primary/90 font-bold text-xs mb-3 tracking-wider uppercase mx-auto">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    {isEn ? "Office Relocation Notice" : "사무실 이전 안내"}
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-2xl font-black text-deep-charcoal dark:text-white mb-3 leading-snug">
                    {isEn ? "We have relocated to a new office!" : "새로운 보금자리로 이전하였습니다"}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto leading-relaxed mb-6">
                    {isEn 
                        ? "For better service and technical innovation, STEALTH has moved to a new environment." 
                        : "더 나은 개발 인프라와 기술 혁신 서비스를 제공해 드리기 위해 STEALTH가 새로운 사무실로 확장 이전하였습니다."}
                </p>

                {/* Address Info Cards */}
                <div className="flex flex-col gap-4 text-left mb-6">
                    {/* Old Address */}
                    <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-4 border border-gray-100 dark:border-white/5">
                        <div className="text-xs text-gray-400 dark:text-gray-500 font-semibold mb-1 uppercase tracking-wider">
                            {isEn ? "Previous Location" : "이전 전 주소"}
                        </div>
                        <div className="text-sm text-gray-400 dark:text-gray-500 line-through decoration-red-400/50 decoration-2">
                            {isEn 
                                ? "5F, Seojeong Building, 358-3, Hapjeong-dong, Mapo-gu, Seoul" 
                                : "서울시 마포구 합정동 358-3 서정빌딩 5층"}
                        </div>
                    </div>

                    {/* New Address */}
                    <div className="bg-primary/5 dark:bg-primary/10 rounded-2xl p-4 border border-primary/20 dark:border-primary/30 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none"></div>
                        <div className="text-xs text-primary font-bold mb-1.5 uppercase tracking-wider flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm font-semibold">location_on</span>
                            {isEn ? "New Location" : "이전 후 주소"}
                        </div>
                        <div className="flex justify-between items-start gap-4">
                            <div className="text-sm font-bold text-deep-charcoal dark:text-white leading-relaxed">
                                {isEn ? (
                                    <>
                                        Room A-304, GL Metro City Hangang,<br />
                                        692, Deogeun-dong, Deogyang-gu, Goyang-si, Gyeonggi-do
                                    </>
                                ) : (
                                    <>고양시 덕양구 덕은동 692<br />지엚메트로시티한강 A동 304호</>
                                )}
                            </div>
                            <button
                                onClick={handleCopy}
                                className={`shrink-0 flex items-center justify-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                                    copied 
                                        ? "bg-emerald-500 text-white" 
                                        : "bg-white dark:bg-gray-800 text-deep-charcoal dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 shadow-sm"
                                }`}
                                aria-label="Copy Address"
                            >
                                <span className="material-symbols-outlined text-sm">
                                    {copied ? "check" : "content_copy"}
                                </span>
                                {copied 
                                    ? (isEn ? "Copied" : "복사완료") 
                                    : (isEn ? "Copy" : "복사")}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Effective Date Info */}
                <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-6 bg-gray-50 dark:bg-white/5 py-2.5 rounded-xl">
                    <span className="material-symbols-outlined text-sm text-primary">calendar_month</span>
                    <span>
                        {isEn 
                            ? "Effective Date: June 20, 2026" 
                            : "이전 적용 일자: 2026년 6월 20일"}
                    </span>
                </div>

                {/* Footer Controls */}
                <div className="flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-5 mt-auto">
                    <label className="flex items-center gap-2 cursor-pointer select-none text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors text-sm">
                        <input
                            type="checkbox"
                            checked={dontShowToday}
                            onChange={(e) => setDontShowToday(e.target.checked)}
                            className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary cursor-pointer"
                        />
                        <span>{isEn ? "Do not show today" : "오늘 하루 보지 않기"}</span>
                    </label>

                    <button
                        onClick={handleClose}
                        className="bg-primary hover:brightness-105 active:scale-95 transition-all text-white px-6 py-2 rounded-xl font-bold text-sm shadow-md shadow-primary/20"
                    >
                        {isEn ? "Close" : "닫기"}
                    </button>
                </div>
            </div>
        </div>
    );
}
