"use client";

import { SERVER_LOCATIONS } from "@/constants/locations";
import { useState } from "react";
import { LocationCard } from "./LocationCard";
import { LocationsMap } from "./LocationsMap";
import styles from "./LocationsSection.module.scss";

export function LocationsMainRow() {
  const [hoveredLocationId, setHoveredLocationId] = useState<string | null>(
    null,
  );

  return (
    <div className={styles.mainRow}>
      <LocationsMap
        locations={SERVER_LOCATIONS}
        highlightedLocationId={hoveredLocationId}
      />
      <div className={styles.cardsPanel}>
        {SERVER_LOCATIONS.map((location) => (
          <LocationCard
            key={location.id}
            location={location}
            onHoverChange={(hovered) =>
              setHoveredLocationId(hovered ? location.id : null)
            }
          />
        ))}
      </div>
    </div>
  );
}
