import "../globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";
import fr from "@/locales/fr";
import en from "@/locales/en";
import ar from "@/locales/ar";

const dictionaries = { fr, en, ar };

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "ar" }, { lang: "en" }];
}

export async function generateMetadata({ params }) {
  const { lang } = await params;
  const t = dictionaries[lang] || fr;
  return {
    title: t.meta.title,
    description: t.meta.description,
  };
}

export const viewport = {
  themeColor: "#f5f0e8",
  width: "device-width",
  initialScale: 1,
};

export default async function LangLayout({ children, params }) {
  const { lang } = await params;
  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <html lang={lang} dir={dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Great+Vibes&family=Jost:wght@300;400;500&family=Amiri:ital,wght@0,400;0,700;1,400&family=Tajawal:wght@300;400;500&family=Aref+Ruqaa:wght@400;700&display=swap"
        />
      </head>
      <body>
        <LanguageProvider lang={lang}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
