"use client";

import { NAV_ITEMS } from "@/constants/navigation";
import { handleInPageSectionClick, sectionLinkHref } from "@/lib/sectionNavigation";
import { usePathname } from "next/navigation";

export function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="nav">
      <ul className="nav__list">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={sectionLinkHref(item.href)}
              className="nav__link"
              onClick={(event) =>
                handleInPageSectionClick(event, item.href, pathname)
              }
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
