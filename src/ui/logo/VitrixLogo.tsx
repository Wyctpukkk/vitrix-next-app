import styles from "./VitrixLogo.module.scss";
import Image from "next/image";

type VitrixLogoProps = {
  className?: string;
};

export function VitrixLogo({ className }: VitrixLogoProps) {
  const rootClassName = [styles.root, className].filter(Boolean).join(" ");

  return (
    <span className={rootClassName}>
      <Image
        src="/logo-black.svg"
        alt="VITRIX"
        className={`${styles.img} ${styles.light}`}
        width={603}
        height={155}
        decoding="async"
      />
      <Image
        src="/logo-white.svg"
        alt=""
        aria-hidden
        className={`${styles.img} ${styles.dark}`}
        width={603}
        height={155}
        decoding="async"
      />
    </span>
  );
}
