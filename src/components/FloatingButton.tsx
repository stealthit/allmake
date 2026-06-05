import Link from "next/link";

export default function FloatingButton({ lang }: { lang?: string }) {
    return (
        <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
            <Link
                href={`/${lang || 'ko'}/consultation`}
                className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform text-white"
                aria-label="Phone Consultation"
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
            </Link>
            <a
                href="http://pf.kakao.com/_GkkFT/chat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#FEE500] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform text-[#3c1e1e]"
                aria-label="KakaoTalk Consultation"
            >
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.712 4.8 4.32 6.131l-.81 2.981c-.07.258.085.512.335.563a.49.49 0 00.443-.162l3.484-2.31c.404.053.815.082 1.228.082 4.97 0 9-3.185 9-7.115S16.97 3 12 3z"></path>
                </svg>
            </a>
        </div>
    );
}
