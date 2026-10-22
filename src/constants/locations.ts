import type { ServerLocation } from "@/types/location";

export const LOCATIONS_SECTION_TITLE = "Локации";

export const LOCATIONS_SECTION_SUBTITLE = "6 стран на выбор";

export const LOCATIONS_SECTION_DESCRIPTION =
  "Все серверы доступны в одной подписке. Во многих странах — по несколько серверов на разных протоколах. Переключаться можно в приложении в любой момент.";

export const ANTI_JAMMER_LOCATION_ID = "anti-jammer-lte";

export const SERVER_LOCATIONS: readonly ServerLocation[] = [
  {
    id: "france-paris",
    country: "Франция",
    city: "Париж",
    flagSrc: "/fr.svg",
    lat: 48.8566,
    lng: 2.3522,
  },
  {
    id: "netherlands-dronten",
    country: "Нидерланды",
    city: "Дронтен",
    flagSrc: "/nl.svg",
    lat: 52.525,
    lng: 5.7183,
  },
  {
    id: "sweden-oslo",
    country: "Швеция",
    city: "Стокгольм",
    flagSrc: "/se.svg",
    lat: 59.3293,
    lng: 18.0686,
  },
  {
    id: "latvia-riga",
    country: "Латвия",
    city: "Рига",
    flagSrc: "/lv.svg",
    lat: 56.9496,
    lng: 24.1052,
  },
  {
    id: "poland-warsaw",
    country: "Польша",
    city: "Варшава",
    flagSrc: "/pl.svg",
    lat: 52.2297,
    lng: 21.0122,
  },
  {
    id: "russia-moscow",
    country: "Россия",
    city: "Москва",
    flagSrc: "/ru.svg",
    lat: 55.7558,
    lng: 37.6173,
  },
  {
    id: ANTI_JAMMER_LOCATION_ID,
    country: "Обход БС",
    city: "для LTE",
    flagSrc: "/ru.svg",
    lat: 55.741,
    lng: 37.84,
  },
];

export const SERVER_LOCATIONS_FOR_MAP = SERVER_LOCATIONS.filter(
  (location) => location.id !== ANTI_JAMMER_LOCATION_ID,
);

export const LOCATIONS_ANTI_JAMMER_TITLE =
  "«Обход БС» — для мобильного интернета с «белыми списками»";

export const LOCATIONS_ANTI_JAMMER_DESCRIPTION =
  "Когда оператор оставляет доступ только к сайтам из «белого списка», эти серверы помогают снова открыть привычные сервисы.";
