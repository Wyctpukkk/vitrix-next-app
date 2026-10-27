import type { ServerLocation } from "@/types/location";

export const LOCATIONS_SECTION_TITLE = "Локации";

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
];
