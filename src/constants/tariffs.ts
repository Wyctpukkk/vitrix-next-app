import { VPN_LOGIN_URL } from "@/constants/site";
import type { TariffPlan } from "@/types/tariff";

export const TARIFFS_SECTION_TITLE = "Тарифы";

export const TARIFF_QUERY_PARAM = "tariff";

export function buildTariffVpnUrl(planId: string): string {
  const url = new URL(VPN_LOGIN_URL);
  url.searchParams.set(TARIFF_QUERY_PARAM, planId);
  return url.toString();
}

/** Базовая цена за 1 месяц (тариф «1 мес.») для расчёта скидки на длинные периоды. */
export const TARIFF_BASE_MONTHLY_PRICE = 200;

export function getTariffDiscountPercent(plan: TariffPlan): number | null {
  if (plan.months <= 1) {
    return null;
  }
  const baseTotal = TARIFF_BASE_MONTHLY_PRICE * plan.months;
  if (plan.priceTotal >= baseTotal) {
    return null;
  }
  return Math.round((1 - plan.priceTotal / baseTotal) * 100);
}

export const TARIFF_FEATURES: readonly string[] = [
  "Безлимитный трафик",
  "5 устройств",
  "Без рекламы на YouTube",
  "Пошаговая инструкция по подключению",
  "Экспресс-поддержка по всем вопросам",
];

export const TARIFF_PLANS: readonly TariffPlan[] = [
  {
    id: "promo",
    name: "Промо",
    priceTotal: 0,
    months: 1,
    durationLabel: "5 дней",
    features: [
      "5 ГБ",
      "5 устройств",
      "Без рекламы на YouTube",
      "Пошаговая инструкция по подключению",
    ],
  },
  { id: "1m", name: "1 мес.", priceTotal: 200, months: 1 },
  {
    id: "3m",
    name: "3 мес.",
    priceTotal: 550,
    months: 3,
    highlightLabel: "Популярный",
  },
  { id: "6m", name: "6 мес.", priceTotal: 1000, months: 6 },
];

export function getTariffMinMonthlyPriceRub(): number {
  const monthlyPrices = TARIFF_PLANS.filter((plan) => plan.priceTotal > 0).map(
    (plan) => plan.priceTotal / plan.months,
  );
  return Math.round(Math.min(...monthlyPrices));
}
