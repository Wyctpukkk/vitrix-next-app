import { TARIFF_PLANS, TARIFFS_SECTION_TITLE } from "@/constants/tariffs";
import { TariffCard } from "./TariffCard";
import styles from "./TariffsSection.module.scss";

export function TariffsSection() {
  return (
    <section
      id="tariffs"
      className={styles.section}
      aria-labelledby="tariffs-title"
    >
      <h2 id="tariffs-title" className={styles.title}>
        {TARIFFS_SECTION_TITLE}
      </h2>
      <div className={styles.grid}>
        {TARIFF_PLANS.map((plan) => (
          <TariffCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
