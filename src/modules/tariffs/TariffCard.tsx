import {
  TARIFF_FEATURES,
  buildTariffVpnUrl,
  getTariffDiscountPercent,
} from "@/constants/tariffs";
import type { TariffPlan } from "@/types/tariff";
import { ButtonLink } from "@/ui/button";
import styles from "./TariffCard.module.scss";

type TariffCardProps = {
  plan: TariffPlan;
};

function formatRub(amount: number): string {
  return new Intl.NumberFormat("ru-RU").format(amount);
}

function monthlyPrice(plan: TariffPlan): number {
  if (plan.months <= 0) {
    return plan.priceTotal;
  }
  return Math.round(plan.priceTotal / plan.months);
}

export function TariffCard({ plan }: TariffCardProps) {
  const perMonth = monthlyPrice(plan);
  const features = plan.features ?? TARIFF_FEATURES;
  const priceSubtitle =
    plan.durationLabel ?? `≈ ${formatRub(perMonth)} ₽/мес`;
  const discountPercent = getTariffDiscountPercent(plan);

  return (
    <article className={styles.card}>
      <div className={styles.nameRow}>
        <h3 className={styles.name}>{plan.name}</h3>
        {discountPercent !== null ? (
          <span className={styles.discountBadge}>-{discountPercent}%</span>
        ) : null}
      </div>
      <p className={styles.price}>
        <span className={styles.priceValue}>{formatRub(plan.priceTotal)}</span>
        <span className={styles.priceCurrency}>₽</span>
      </p>
      <p className={styles.perMonth}>{priceSubtitle}</p>
      <ul className={styles.features}>
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <ButtonLink
        href={buildTariffVpnUrl(plan.id)}
        className={styles.chooseBtn}
      >
        Выбрать
      </ButtonLink>
    </article>
  );
}
