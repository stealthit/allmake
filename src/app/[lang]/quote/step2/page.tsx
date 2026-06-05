import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../../i18n-config";
import QuoteStep2Client from "./QuoteStep2Client";

export default async function QuoteStep2({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);

    return <QuoteStep2Client dictionary={dictionary} lang={lang as Locale} />;
}
