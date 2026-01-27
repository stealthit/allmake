import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import FloatingButton from "@/components/FloatingButton";
import { getDictionary } from "../../get-dictionary";
import { Locale } from "../../../i18n-config";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as Locale);

  return (
    <>
      <HeroSection dictionary={dictionary} />
      <StatsSection dictionary={dictionary} />
      <ServicesSection dictionary={dictionary} />
      <CtaSection dictionary={dictionary} />
    </>
  );
}
