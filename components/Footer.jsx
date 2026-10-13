"use client";

import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t, lang } = useLang();
  const names = lang === "ar" ? "إيمان & أحمد" : "Imen & Ahmed";
  return (
    <footer className="footer">
      <p className="footer-names">{names}</p>
      <p>{t.footer.thanks}</p>
      <p className="footer-made">{t.footer.made} 🤍</p>
    </footer>
  );
}
