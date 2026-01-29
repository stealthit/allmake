import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_KR } from "next/font/google";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "STEALTH | Digital Innovation Agency",
    template: "%s | STEALTH",
  },
  description: "Next-Gen Software Partner. Software development, Blockchain, and UI/UX solutions tailored for modern growth.",
  keywords: ["Software Development", "Blockchain", "UI/UX Design", "Web Development", "Mobile App", "STEALTH Interactive"],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://www.stealthinteractivee.co.kr",
    title: "STEALTH | Digital Innovation Agency",
    description: "Next-Gen Software Partner. Software development, Blockchain, and UI/UX solutions tailored for modern growth.",
    siteName: "STEALTH Interactive",
  },
  twitter: {
    card: "summary_large_image",
    title: "STEALTH | Digital Innovation Agency",
    description: "Next-Gen Software Partner. Software development, Blockchain, and UI/UX solutions tailored for modern growth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

import { i18n } from "../../i18n-config";

// generateStaticParams removed

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang?: string }>;
}) {
  const { lang = "ko" } = await params;
  return (
    <html lang={lang} className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${notoSansKr.variable} antialiased font-sans`}
      >
        {children}
        <Script type="text/javascript" src="//wcs.naver.net/wcslog.js" strategy="afterInteractive" />
        <Script
          id="naver-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (!wcs_add) var wcs_add = {};
              wcs_add["wa"] = "${process.env.NEXT_PUBLIC_NAVER_ANALYTICS_ID || "61943fc220ddf0"}";
              if (window.wcs) {
                wcs_do();
              }
            `,
          }}
        />
        <SpeedInsights />
      </body>
    </html>
  );
}
