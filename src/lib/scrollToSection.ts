import { NAV_SCROLL_OFFSET_PX } from "@/constants/layout";

export function scrollToSection(targetSelector: string) {
  const target = document.querySelector(targetSelector);
  if (!target) return;

  const header = document.querySelector(".header");
  const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset;
  const offsetPosition = targetPosition - headerHeight - NAV_SCROLL_OFFSET_PX;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}
