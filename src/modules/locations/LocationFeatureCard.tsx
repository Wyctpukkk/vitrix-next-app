import {
  LOCATIONS_ANTI_JAMMER_DESCRIPTION,
  LOCATIONS_ANTI_JAMMER_TITLE,
} from "@/constants/locations";
import styles from "./LocationFeatureCard.module.scss";

export function LocationFeatureCard() {
  return (
    <article className={styles.card}>
      <h3 className={styles.title}>{LOCATIONS_ANTI_JAMMER_TITLE}</h3>
      <p className={styles.description}>{LOCATIONS_ANTI_JAMMER_DESCRIPTION}</p>
    </article>
  );
}
