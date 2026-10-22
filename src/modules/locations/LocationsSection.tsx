import {
  LOCATIONS_SECTION_DESCRIPTION,
  LOCATIONS_SECTION_SUBTITLE,
  LOCATIONS_SECTION_TITLE,
} from "@/constants/locations";
import { LocationFeatureCard } from "./LocationFeatureCard";
import { LocationsMainRow } from "./LocationsMainRow";
import styles from "./LocationsSection.module.scss";

export function LocationsSection() {
  return (
    <section
      id="locations"
      className={styles.section}
      aria-labelledby="locations-title"
    >
      <h2 id="locations-title" className={styles.title}>
        {LOCATIONS_SECTION_TITLE}
      </h2>
      <p className={styles.subtitle}>{LOCATIONS_SECTION_SUBTITLE}</p>
      <p className={styles.description}>{LOCATIONS_SECTION_DESCRIPTION}</p>
      <div className={styles.layout}>
        <LocationsMainRow />
        <LocationFeatureCard />
      </div>
    </section>
  );
}
