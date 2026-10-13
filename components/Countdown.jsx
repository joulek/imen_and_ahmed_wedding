"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";
import { wedding } from "@/data/wedding";
import Reveal from "./Reveal";

function diff(target) {
  const ms = Math.max(0, new Date(target).getTime() - Date.now());
  return {
    ms,
    days: Math.floor(ms / 86400000),
    hours: Math.floor((ms / 3600000) % 24),
    minutes: Math.floor((ms / 60000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
  };
}

const pad = (n) => String(n).padStart(2, "0");

export default function Countdown() {
  const { t } = useLang();
  const [left, setLeft] = useState(null);

  useEffect(() => {
    setLeft(diff(wedding.date));
    const id = setInterval(() => setLeft(diff(wedding.date)), 1000);
    return () => clearInterval(id);
  }, []);

  const items = [
    ["days", t.countdown.days],
    ["hours", t.countdown.hours],
    ["minutes", t.countdown.minutes],
    ["seconds", t.countdown.seconds],
  ];

  return (
    <section className="section countdown" id="countdown">
      <Reveal>
        <h2 className="section-title">{t.countdown.title}</h2>
      </Reveal>
      <Reveal delay={150}>
        {left && left.ms === 0 ? (
          <p className="done">{t.countdown.done}</p>
        ) : (
          <div className="timer" dir="ltr">
            {items.map(([key, label], i) => (
              <div className="timer-cell" key={key}>
                <span className="num">{left ? pad(left[key]) : "--"}</span>
                <span className="lbl">{label}</span>
                {i < items.length - 1 && <span className="colon">:</span>}
              </div>
            ))}
          </div>
        )}
      </Reveal>
    </section>
  );
}
