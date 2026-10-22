"use client";

import type { MouseEvent } from "react";
import {
  HERO_CHOOSE_TARIFF_LABEL,
  HERO_TARIFFS_SECTION_SELECTOR,
} from "@/constants/home";
import { VPN_LOGIN_URL } from "@/constants/site";
import { scrollToSection } from "@/lib/scrollToSection";
import { ButtonLink } from "@/ui/button";
import styles from "./page.module.scss";

export function HeroActions() {
  const handleChooseTariff = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    scrollToSection(HERO_TARIFFS_SECTION_SELECTOR);
  };

  return (
    <div className={styles.heroActions}>
      <ButtonLink
        href={HERO_TARIFFS_SECTION_SELECTOR}
        size="lg"
        onClick={handleChooseTariff}
      >
        {HERO_CHOOSE_TARIFF_LABEL}
      </ButtonLink>
      <ButtonLink href={VPN_LOGIN_URL} size="lg" variant="outline">
        Попробовать бесплатно
      </ButtonLink>
    </div>
  );
}
