"use client";

import {
  FOOTER_ABOUT,
  FOOTER_LEGAL_LINKS,
  FOOTER_TAGLINE,
} from "@/constants/footer";
import { NAV_ITEMS } from "@/constants/navigation";
import { TELEGRAM_SUPPORT_BOT_URL } from "@/constants/site";
import { scrollToSection } from "@/lib/scrollToSection";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./Footer.module.scss";

function sectionHref(hash: string) {
  return hash.startsWith("#") ? `/${hash}` : hash;
}

function FooterCopyright() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <p className={styles.copyright} suppressHydrationWarning>
      © {year !== null ? `${year} ` : ""}VITRIX
    </p>
  );
}

export function Footer() {
  const pathname = usePathname();

  const handleSectionClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#") || pathname !== "/") return;

    event.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.columns}>
          <div className={styles.column}>
            <p className={styles.brand}>VITRIX</p>
            <p className={styles.about}>{FOOTER_ABOUT}</p>
          </div>

          <div className={styles.column}>
            <h2 className={styles.title}>Сервис</h2>
            <ul className={styles.links}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={sectionHref(item.href)}
                    className={styles.link}
                    onClick={(event) => handleSectionClick(event, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h2 className={styles.title}>Поддержка</h2>
            <ul className={styles.links}>
              <li>
                <a
                  href={TELEGRAM_SUPPORT_BOT_URL}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Telegram - быстрее всего
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM_SUPPORT_BOT_URL}
                  className={styles.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Тикет на сайте
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h2 className={styles.title}>Vitrix</h2>
            <ul className={styles.links}>
              {FOOTER_LEGAL_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={styles.link}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.divider} role="presentation" />
          <div className={styles.bottomContent}>
            <FooterCopyright />
            <p className={styles.tagline}>{FOOTER_TAGLINE}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
