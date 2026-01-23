export default function CtaSection() {
    return (
        <section className="mb-24 px-6">
            <div className="max-w-7xl mx-auto bg-deep-charcoal dark:bg-gray-900 rounded-[2.5rem] p-12 md:p-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/20 blur-[100px]"></div>
                <div className="relative z-10 md:flex items-center justify-between gap-12">
                    <div className="max-w-xl">
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-6">디지털 여정을 시작할 준비가 되셨나요?</h2>
                        <p className="text-gray-400 text-lg mb-0">AllMake와 함께 당신의 야심 찬 아이디어를 세계적 수준의 디지털 현실로 바꿔보세요.</p>
                    </div>
                    <div className="mt-10 md:mt-0 flex flex-col gap-4">
                        <button className="bg-primary text-deep-charcoal px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white transition-colors text-center">
                            지금 바로 상담하기
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}
