"use client";

import {
  FOOTER_ABOUT,
  FOOTER_LEGAL_LINKS,
  FOOTER_TAGLINE,
} from "@/constants/footer";
import { NAV_ITEMS } from "@/constants/navigation";
import {
  SITE_SUPPORT_URL,
  TELEGRAM_SUPPORT_BOT_URL,
} from "@/constants/site";
import { handleInPageSectionClick, sectionLinkHref } from "@/lib/sectionNavigation";
import { VitrixLogo } from "@/ui/logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Footer.module.scss";

type FooterClientProps = {
  copyrightYear: number;
};

export function FooterClient({ copyrightYear }: FooterClientProps) {
  const pathname = usePathname();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.columns}>
          <div className={styles.column}>
            <VitrixLogo className={styles.brand} />
            <p className={styles.about}>{FOOTER_ABOUT}</p>
          </div>

          <div className={styles.column}>
            <h2 className={styles.title}>Сервис</h2>
            <ul className={styles.links}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={sectionLinkHref(item.href)}
                    className={styles.link}
                    onClick={(event) =>
                      handleInPageSectionClick(event, item.href, pathname)
                    }
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
                  href={SITE_SUPPORT_URL}
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
            <p className={styles.copyright}>© {copyrightYear} VITRIX</p>
            <p className={styles.tagline}>{FOOTER_TAGLINE}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
