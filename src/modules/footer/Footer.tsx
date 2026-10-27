import { cacheLife } from "next/cache";
import { FooterClient } from "./FooterClient";

async function getCopyrightYear() {
  "use cache";
  cacheLife("days");

  return new Date().getFullYear();
}

export async function Footer() {
  const copyrightYear = await getCopyrightYear();

  return <FooterClient copyrightYear={copyrightYear} />;
}
