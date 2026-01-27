import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../../i18n-config";
import PortfolioClient from "./PortfolioClient";

export default async function PortfolioPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);

    return <PortfolioClient dictionary={dictionary} lang={lang as Locale} />;
}
