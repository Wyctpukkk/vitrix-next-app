import type { ServerLocation } from "@/types/location";
import styles from "./LocationCard.module.scss";

type LocationCardProps = {
  location: ServerLocation;
  onHoverChange?: (hovered: boolean) => void;
};

export function LocationCard({ location, onHoverChange }: LocationCardProps) {
  return (
    <article
      className={styles.card}
      onMouseEnter={() => onHoverChange?.(true)}
      onMouseLeave={() => onHoverChange?.(false)}
    >
      <img
        src={location.flagSrc}
        alt=""
        className={styles.flag}
        width={40}
        height={30}
        loading="lazy"
        decoding="async"
      />
      <div className={styles.info}>
        <h3 className={styles.country}>{location.country}</h3>
        <p className={styles.city}>{location.city}</p>
      </div>
    </article>
  );
}
