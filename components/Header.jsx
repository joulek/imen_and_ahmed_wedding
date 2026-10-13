"use client";

import { useLang, LANGS } from "./LanguageProvider";

function HeartsIcon() {
  return (
    <svg className="hearts-icon" viewBox="0 0 64 40" aria-hidden="true">
      <path
        d="M22 36 C10 28 3 21 3 13 C3 7 8 3 13 3 C17 3 20 5 22 9 C24 5 27 3 31 3 C36 3 41 7 41 13 C41 21 34 28 22 36 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M42 36 C30 28 23 21 23 13 C23 7 28 3 33 3 C37 3 40 5 42 9 C44 5 47 3 51 3 C56 3 61 7 61 13 C61 21 54 28 42 36 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}

export default function Header() {
  const { lang, setLang } = useLang();

  return (
    <header className="topbar">
      <a href="#top" className="brand" aria-label="A & I">
        <span className="brand-mono">A &amp; I</span>
        <svg className="brand-underline" viewBox="0 0 120 16" aria-hidden="true">
          <path d="M2 8 C30 14 45 14 60 10 C75 14 90 14 118 8" fill="none" stroke="currentColor" strokeWidth="1" />
          <path d="M60 10 C56 5 52 4 50 6 C48 8 52 12 60 14 C68 12 72 8 70 6 C68 4 64 5 60 10 Z" fill="currentColor" />
        </svg>
      </a>

      <div className="topbar-right">
        <div className="lang-switch" role="group" aria-label="Language">
          {LANGS.map((l) => (
            <button
              key={l.code}
              type="button"
              className={lang === l.code ? "active" : ""}
              onClick={() => setLang(l.code)}
            >
              {l.label}
            </button>
          ))}
        </div>
        <HeartsIcon />
      </div>
    </header>
  );
}