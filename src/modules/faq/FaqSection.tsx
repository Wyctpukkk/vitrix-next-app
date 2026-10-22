import { FAQ_SECTION_TITLE } from "@/constants/faq";
import { FaqAccordion } from "./FaqAccordion";
import styles from "./FaqSection.module.scss";

export function FaqSection() {
  return (
    <section
      id="faq"
      className={styles.section}
      aria-labelledby="faq-title"
    >
      <div className={styles.content}>
        <h2 id="faq-title" className={styles.title}>
          {FAQ_SECTION_TITLE}
        </h2>
        <FaqAccordion />
      </div>
    </section>
  );
}
