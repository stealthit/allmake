"use client";

import { useState } from "react";

interface FooterProps {
    dictionary: any;
    lang: string;
}

export default function Footer({ dictionary, lang }: FooterProps) {
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

    return (
        <footer className="bg-white dark:bg-background-dark py-12 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-lg">developer_mode_tv</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight">STEALTH</span>
                </div>
                <p className="text-gray-500 text-sm">© 2026 STEALTH. {dictionary.footer.rights}</p>
                <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-4">
                    <a
                        href="/files/company_profile.pdf"
                        download="[스텔스인터렉티브] 회사소개서.pdf"
                        className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 text-deep-charcoal dark:text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-primary hover:text-white transition-all group"
                    >
                        <span className="material-symbols-outlined text-lg group-hover:animate-bounce">download</span>
                        {lang === "ko" ? "회사소개서 다운로드" : "Download Profile"}
                    </a>
                    <div className="flex gap-6">
                        <button
                            onClick={() => setModalContent({ title: dictionary.footer.privacy, content: privacyPolicy })}
                            className="text-gray-400 hover:text-primary transition-colors text-sm"
                        >
                            {dictionary.footer.privacy}
                        </button>
                        <button
                            onClick={() => setModalContent({ title: dictionary.footer.terms, content: termsOfService })}
                            className="text-gray-400 hover:text-primary transition-colors text-sm"
                        >
                            {dictionary.footer.terms}
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
                                {lang === "ko" ? "확인" : "Close"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
}
