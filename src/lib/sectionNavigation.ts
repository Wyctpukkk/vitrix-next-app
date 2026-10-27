import type { MouseEvent } from "react";
import { scrollToSection } from "./scrollToSection";

export function sectionLinkHref(hash: string): string {
  return hash.startsWith("#") ? `/${hash}` : hash;
}

export function handleInPageSectionClick(
  event: MouseEvent<HTMLAnchorElement>,
  href: string,
  pathname: string,
): void {
  if (!href.startsWith("#") || pathname !== "/") {
    return;
  }

  event.preventDefault();
  scrollToSection(href);
}
