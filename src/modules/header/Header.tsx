"use client";

import { VPN_LOGIN_URL } from "@/constants/site";
import { useHeaderScrolled } from "@/hooks/useHeaderScrolled";
import { ThemeToggle } from "@/modules/theme";
import { ButtonLink } from "@/ui/button";
import { VitrixLogo } from "@/ui/logo";
import { HeaderNav } from "./HeaderNav";
import Link from "next/link";
import { usePathname } from "next/navigation";

function scrollToPageTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

export function Header() {
  const scrolled = useHeaderScrolled();
  const pathname = usePathname();

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") return;

    event.preventDefault();
    scrollToPageTop();
  };

  return (
    <header className={`header${scrolled ? " header--scrolled" : ""}`}>
      <div className="container">
        <div className="header__content">
          <Link href="/" className="logo" onClick={handleLogoClick}>
            <VitrixLogo />
          </Link>
          <div className="header__nav">
            <HeaderNav />
          </div>
          <div className="header__actions">
            <ThemeToggle />
            <ButtonLink href={VPN_LOGIN_URL}>Войти</ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
