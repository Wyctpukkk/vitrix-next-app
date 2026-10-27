import { getTariffMinMonthlyPriceRub } from "@/constants/tariffs";

export const HERO_TARIFFS_SECTION_SELECTOR = "#tariffs";

export const HERO_CHOOSE_TARIFF_LABEL = `Выбрать тариф — от ${getTariffMinMonthlyPriceRub()} ₽/мес`;

export const HERO_SUBTITLES: readonly string[] = [
  "Умное разделение трафика: не нужно вручную включать и выключать VPN",
  "Обход белых списков",
  "YouTube без рекламы",
  "Подключение одной подпиской до пяти устройств",
  "Доступ к Российским сервисам из-за границы",
  "Подходит для смартфона, ноутбука, TV",
];
