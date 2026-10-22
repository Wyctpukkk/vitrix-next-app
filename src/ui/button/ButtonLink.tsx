import type { MouseEventHandler, ReactNode } from "react";
import styles from "./ButtonLink.module.scss";

type ButtonLinkSize = "md" | "lg";
type ButtonLinkVariant = "primary" | "outline";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  size?: ButtonLinkSize;
  variant?: ButtonLinkVariant;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function ButtonLink({
  href,
  children,
  className,
  size = "md",
  variant = "primary",
  onClick,
}: ButtonLinkProps) {
  const sizeClass = size === "lg" ? styles.lg : styles.md;
  const variantClass = variant === "outline" ? styles.outline : styles.primary;
  const classNames = [styles.root, variantClass, sizeClass, className]
    .filter(Boolean)
    .join(" ");

  return (
    <a href={href} className={classNames} onClick={onClick}>
      {children}
    </a>
  );
}
