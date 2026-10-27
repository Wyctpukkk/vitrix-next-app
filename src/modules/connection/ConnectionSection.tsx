import {
  CONNECTION_SECTION_TITLE,
  CONNECTION_STEPS,
} from "@/constants/connection";
import { ConnectionStepCard } from "./ConnectionStepCard";
import styles from "./ConnectionSection.module.scss";

export function ConnectionSection() {
  return (
    <section
      id="connection"
      className={styles.section}
      aria-labelledby="connection-title"
    >
      <h2 id="connection-title" className={styles.title}>
        {CONNECTION_SECTION_TITLE}
      </h2>
      <div className={styles.steps}>
        {CONNECTION_STEPS.map((step, index) => (
          <ConnectionStepCard key={step.id} step={step} index={index + 1} />
        ))}
      </div>
    </section>
  );
}
