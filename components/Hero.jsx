"use client";

import { useLang } from "./LanguageProvider";

export default function Hero() {
  const { t, lang } = useLang();
  const names = lang === "ar" ? ["إيمان", "أحمد"] : ["Imen", "Ahmed"];

  return (
    <section className="hero" id="top">
      <div className="hero-content">
        <p className="eyebrow fade-up" style={{ animationDelay: "0.1s" }}>
          {t.hero.eyebrow}
        </p>

        <h1 className="names fade-up" style={{ animationDelay: "0.3s" }}>
          <span>{names[0]}</span>
          <span className="amp">&amp;</span>
          <span>{names[1]}</span>
        </h1>

        <div className="divider fade-up" style={{ animationDelay: "0.5s" }}>
          <i />
          <b>✦</b>
          <i />
        </div>

        <blockquote className="verse fade-up" style={{ animationDelay: "0.7s" }}>
          <p>{t.hero.verse}</p>
          <cite>{t.hero.verseRef}</cite>
        </blockquote>

        <p className="invite fade-up" style={{ animationDelay: "0.9s" }}>
          {t.hero.invite}
        </p>

        <a href="#countdown" className="scroll-cta fade-up" style={{ animationDelay: "1.2s" }}>
          {t.hero.cta} <span aria-hidden>↓</span>
        </a>
      </div>
    </section>
  );
}