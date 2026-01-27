import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../../i18n-config";
import QuoteStep1Client from "./QuoteStep1Client";

export default async function QuoteStep1({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const dictionary = await getDictionary(lang as Locale);

    return <QuoteStep1Client dictionary={dictionary} lang={lang as Locale} />;
}
