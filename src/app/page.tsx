import { HERO_SUBTITLES } from "@/constants/home";
import { ConnectionSection } from "@/modules/connection";
import { FaqSection } from "@/modules/faq";
import { LocationsSection } from "@/modules/locations";
import { TariffsSection } from "@/modules/tariffs";
import { HeroActions } from "./HeroActions";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className="page-content">
      <div className="container">
        <section className={styles.hero}>
          <h1 className={styles.title}>Интернет без блокировок</h1>
          <ul className={styles.heroSubtitles}>
            {HERO_SUBTITLES.map((subtitle) => (
              <li key={subtitle}>{subtitle}</li>
            ))}
          </ul>
          <HeroActions />
        </section>

        <TariffsSection />

        <ConnectionSection />

        <LocationsSection />

        <FaqSection />
      </div>
    </main>
  );
}
