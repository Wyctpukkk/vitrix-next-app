export type TariffPlan = {
  id: string;
  name: string;
  priceTotal: number;
  months: number;
  /** Вместо «≈ … ₽/мес» под ценой (например, «5 дней» у промо). */
  durationLabel?: string;
  /** Список преимуществ; если не задан — общий для платных тарифов. */
  features?: readonly string[];
};
