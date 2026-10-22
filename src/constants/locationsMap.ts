export const LOCATIONS_MAP_GEO_URL =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

export const LOCATIONS_MAP_SIZE = {
  width: 800,
  height: 400,
} as const;

/** Меньше scale — дальше «отъезд» камеры */
export const LOCATIONS_MAP_PROJECTION = {
  center: [23, 54.5] as [number, number],
  scale: 700,
} as const;
