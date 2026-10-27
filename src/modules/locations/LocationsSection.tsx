import { LOCATIONS_SECTION_TITLE } from "@/constants/locations";

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
      <div className={styles.layout}>
        <LocationsMainRow />
      </div>
    </section>
  );
}
