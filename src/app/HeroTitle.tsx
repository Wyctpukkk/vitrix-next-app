import { HERO_INITIAL_TITLE } from "@/constants/home";
import styles from "./page.module.scss";

export function HeroTitle() {
  return <h1 className={styles.title}>{HERO_INITIAL_TITLE}</h1>;
}
