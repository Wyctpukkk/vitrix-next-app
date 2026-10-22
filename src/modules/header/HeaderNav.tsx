"use client";

import { NAV_ITEMS } from "@/constants/navigation";
import { scrollToSection } from "@/lib/scrollToSection";

function closeMobileNav() {
  const navToggle = document.getElementById("nav-toggle");
  if (navToggle instanceof HTMLInputElement) {
    navToggle.checked = false;
  }
}

export function HeaderNav() {
  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    scrollToSection(href);
    closeMobileNav();
  };

  return (
    <nav className="nav">
      <input type="checkbox" id="nav-toggle" className="nav__toggle" />
      <label htmlFor="nav-toggle" className="nav__burger">
        <span />
        <span />
        <span />
      </label>
      <label htmlFor="nav-toggle" className="nav__overlay" aria-hidden />
      <div className="nav__menu">
        <label htmlFor="nav-toggle" className="nav__close">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </label>
        <ul className="nav__list">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="nav__link"
                onClick={(event) => handleNavClick(event, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
