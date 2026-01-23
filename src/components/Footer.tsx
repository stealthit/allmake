import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-background-dark py-12 border-t border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white">
                        <span className="material-symbols-outlined text-lg">developer_mode_tv</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight">AllMake</span>
                </div>
                <p className="text-gray-500 text-sm">© 2024 AllMake. All rights reserved.</p>
                <div className="flex gap-6">
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors">개인정보 처리방침</Link>
                    <Link href="#" className="text-gray-400 hover:text-primary transition-colors">이용 약관</Link>
                </div>
            </div>
        </footer>
    );
}
