import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../../i18n-config";
import QuoteStep3Client from "./QuoteStep3Client";

export default async function QuoteStep3({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);

    return <QuoteStep3Client dictionary={dictionary} lang={lang as Locale} />;
}
