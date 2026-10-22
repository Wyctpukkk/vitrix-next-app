import { TARIFF_PLANS, TARIFF_SECTION_SUBTITLE } from "@/constants/tariffs";
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
        Тарифы
      </h2>
      <p className={styles.subtitle}>{TARIFF_SECTION_SUBTITLE}</p>
      <div className={styles.grid}>
        {TARIFF_PLANS.map((plan) => (
          <TariffCard key={plan.id} plan={plan} />
        ))}
      </div>
    </section>
  );
}
