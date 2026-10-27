import { getTariffMinMonthlyPriceRub } from "@/constants/tariffs";

export const HERO_TARIFFS_SECTION_SELECTOR = "#tariffs";

export const HERO_INITIAL_TITLE = "Интернет без блокировок";

/** Порядок ротации после стартового заголовка */
export const HERO_TITLES: readonly string[] = [
  "Мы не обещаем свободу — мы её включаем",
  "Интернет должен быть свободным",
  HERO_INITIAL_TITLE,
];

export const HERO_CHOOSE_TARIFF_LABEL = `Выбрать тариф — от ${getTariffMinMonthlyPriceRub()} ₽/мес`;

export const HERO_SUBTITLES: readonly string[] = [
  "Умное разделение трафика: не нужно вручную включать и выключать VPN",
  "Обход белых списков",
  "YouTube без рекламы",
  "Подключение одной подпиской до пяти устройств",
  "Доступ к Российским сервисам из-за границы",
  "Подходит для смартфона, ноутбука, TV",
];
