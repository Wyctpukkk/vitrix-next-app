"use client";

import {
  LOCATIONS_MAP_GEO_URL,
  LOCATIONS_MAP_PROJECTION,
  LOCATIONS_MAP_SIZE,
} from "@/constants/locationsMap";
import type { ServerLocation } from "@/types/location";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import styles from "./LocationsMap.module.scss";

type LocationsMapProps = {
  locations: readonly ServerLocation[];
  highlightedLocationId?: string | null;
};

export function LocationsMap({
  locations,
  highlightedLocationId = null,
}: LocationsMapProps) {
  return (
    <div className={styles.mapWrap}>
      <ComposableMap
        className={styles.map}
        projection="geoMercator"
        projectionConfig={LOCATIONS_MAP_PROJECTION}
        width={LOCATIONS_MAP_SIZE.width}
        height={LOCATIONS_MAP_SIZE.height}
        preserveAspectRatio="xMidYMid meet"
      >
        <Geographies geography={LOCATIONS_MAP_GEO_URL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                className={styles.country}
              />
            ))
          }
        </Geographies>
        {locations.map((location) => {
          const isHighlighted = highlightedLocationId === location.id;

          return (
            <Marker
              key={location.id}
              coordinates={[location.lng, location.lat]}
            >
              <g
                className={`${styles.marker}${isHighlighted ? ` ${styles.markerHighlighted}` : ""}`}
              >
                <title>{`${location.country}, ${location.city}`}</title>
                <circle className={styles.markerPulse} r={12} />
                <circle className={styles.markerDot} r={5.5} />
              </g>
            </Marker>
          );
        })}
      </ComposableMap>
    </div>
  );
}
