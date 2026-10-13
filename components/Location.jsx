"use client";

import { useLang } from "./LanguageProvider";
import { wedding } from "@/data/wedding";
import Reveal from "./Reveal";

// URL d'intégration copiée depuis Google Maps (Intégrer une carte)
const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.699331393922!2d10.773651975003236!3d34.763166079859836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1301d300156ca4cd%3A0xde004d1dcabd8bb8!2sSalle%20des%20f%C3%AAtes%20FORUM!5e0!3m2!1sfr!2stn!4v1791892938654!5m2!1sfr!2stn";

// Lien du bouton "Ouvrir dans Maps"
const OPEN_URL = "https://maps.app.goo.gl/3bmaUtbQVfNWGE549";

export default function Location() {
  const { t, lang } = useLang();

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
            src={EMBED_URL}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <a
          className="btn"
          href={OPEN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.location.open}
        </a>
      </Reveal>
    </section>
  );
}