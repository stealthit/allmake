import Link from "next/link";

export default function FloatingButton() {
    return (
        <a
            href="http://pf.kakao.com/_GkkFT/chat"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-8 right-8 w-16 h-16 bg-[#FEE500] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-50 text-[#3c1e1e]"
        >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.558 1.712 4.8 4.32 6.131l-.81 2.981c-.07.258.085.512.335.563a.49.49 0 00.443-.162l3.484-2.31c.404.053.815.082 1.228.082 4.97 0 9-3.185 9-7.115S16.97 3 12 3z"></path>
            </svg>
        </a>
    );
}
