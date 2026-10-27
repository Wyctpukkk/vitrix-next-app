import { HERO_SUBTITLES } from "@/constants/home";
import { ConnectionSection } from "@/modules/connection";
import { FaqSection } from "@/modules/faq";
import { LocationsSection } from "@/modules/locations";
import { TariffsSection } from "@/modules/tariffs";
import Image from "next/image";
import { HeroActions } from "./HeroActions";
import { HeroTitle } from "./HeroTitle";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className="page-content">
      <div className="container">
        <section className={styles.hero}>
          <div className={styles.heroLayout}>
            <div className={styles.heroLeft}>
              <div className={styles.heroTitleOverlap}>
                <HeroTitle />
              </div>
              <ul className={styles.heroSubtitles}>
                {HERO_SUBTITLES.map((subtitle) => (
                  <li key={subtitle}>{subtitle}</li>
                ))}
              </ul>
              <HeroActions />
            </div>
            <Image
              src="/incy-example.png"
              alt="Пример подключения Vitrix"
              className={styles.heroImage}
              width={1231}
              height={1278}
              priority
              unoptimized
            />
          </div>
        </section>

        <TariffsSection />

        <ConnectionSection />

        <LocationsSection />

        <FaqSection />
      </div>
    </main>
  );
}
