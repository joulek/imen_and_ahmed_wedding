"use client";

import { useLang } from "./LanguageProvider";
import { wedding } from "@/data/wedding";
import Reveal from "./Reveal";

export default function Location() {
  const { t, lang } = useLang();
  const q = encodeURIComponent(wedding.mapsQuery);

  return (
    <section className="section location" id="location">
      <Reveal>
        <h2 className="section-title">{t.location.title}</h2>
        <p className="venue-name">{wedding.venueName[lang]}</p>
        <p className="venue-address">{wedding.address[lang]}</p>
      </Reveal>

      <Reveal delay={150}>
        <div className="map-frame">
          <iframe
            title="Map"
            src={`https://www.google.com/maps?q=${q}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
        <a
          className="btn"
          href={`https://www.google.com/maps/search/?api=1&query=${q}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.location.open}
        </a>
      </Reveal>
    </section>
  );
}
