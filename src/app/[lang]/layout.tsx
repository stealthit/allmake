import { getDictionary } from "../../get-dictionary";
import { Locale, i18n } from "../../../i18n-config";
import Header from "@/components/Header";

export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }));
}
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";

export default async function Layout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);

    return (
        <div className="min-h-screen flex flex-col bg-background-light dark:bg-background-dark text-deep-charcoal dark:text-white font-sans selection:bg-primary/30">
            <Header dictionary={dictionary} lang={lang} />
            <main className="flex-grow">{children}</main>
            <Footer dictionary={dictionary} lang={lang} />
            <FloatingButton lang={lang} />
        </div>
    );
}
