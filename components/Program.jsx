"use client";

import { useLang } from "./LanguageProvider";
import Reveal from "./Reveal";

const LOCALES = { fr: "fr-FR", en: "en-US", ar: "ar-MA" };

// Modifiez ici les dates, heures et lieux de chaque événement
const EVENTS = [
  {
    key: "ceremony",
    time: "21:00",
    date: "2026-12-26", // AAAA-MM-JJ
    venue: "FORUM Banquet Hall",
  },
  {
    key: "ladies",
    time: "17:00",
    date: "2026-12-24", // À compléter
    venue: "À compléter", // À compléter
  },
];

export default function Program() {
  const { t, lang } = useLang();

  const formatDate = (iso) =>
    new Intl.DateTimeFormat(LOCALES[lang], {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(`${iso}T12:00:00`));

  const titles = {
    ceremony: { title: t.program.ceremony, text: t.program.ceremonyText },
    ladies: { title: t.program.dinner, text: t.program.dinnerText },
  };

  return (
    <section className="section program" id="program">
      <Reveal>
        <h2 className="section-title">{t.program.title}</h2>
      </Reveal>

      <div className="cards">
        {EVENTS.map((e, i) => (
          <Reveal key={e.key} delay={i * 150}>
            <article className="card">
              <span className="card-time" dir="ltr">
                {e.time}
              </span>
              <p className="card-date">{formatDate(e.date)}</p>
              <h3>{titles[e.key].title}</h3>
              <p className="card-venue">{e.venue}</p>
              <p className="card-text">{titles[e.key].text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}