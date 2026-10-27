"use client";

import { useEffect, useState } from "react";
import { HERO_INITIAL_TITLE, HERO_TITLES } from "@/constants/home";
import styles from "./page.module.scss";

const INITIAL_DELAY_MS = 6_000;
const PAUSE_AFTER_FULL_MS = 5_000;
const TYPE_MS = 100;
const DELETE_MS = 100;

type AnimationPhase = "initialWait" | "pause" | "delete" | "type";

export function HeroTitle() {
  const [displayText, setDisplayText] = useState(HERO_INITIAL_TITLE);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let titleIndex = HERO_TITLES.indexOf(HERO_INITIAL_TITLE);
    let text = HERO_INITIAL_TITLE;
    let phase: AnimationPhase = "initialWait";

    const schedule = (delayMs: number, run: () => void) => {
      timeoutId = setTimeout(() => {
        if (!cancelled) {
          run();
        }
      }, delayMs);
    };

    const step = () => {
      if (phase === "initialWait") {
        schedule(INITIAL_DELAY_MS, () => {
          phase = "delete";
          step();
        });
        return;
      }

      if (phase === "pause") {
        schedule(PAUSE_AFTER_FULL_MS, () => {
          phase = "delete";
          step();
        });
        return;
      }

      if (phase === "delete") {
        if (text.length > 0) {
          text = text.slice(0, -1);
          setDisplayText(text);
          schedule(DELETE_MS, step);
        } else {
          titleIndex = (titleIndex + 1) % HERO_TITLES.length;
          phase = "type";
          step();
        }
        return;
      }

      const target = HERO_TITLES[titleIndex];
      if (text.length < target.length) {
        text = target.slice(0, text.length + 1);
        setDisplayText(text);
        schedule(TYPE_MS, step);
      } else {
        phase = "pause";
        step();
      }
    };

    step();

    return () => {
      cancelled = true;
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <h1 className={`${styles.title} ${styles.titleAnimated}`} aria-live="polite">
      {displayText}
    </h1>
  );
}
