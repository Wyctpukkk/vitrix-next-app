import type { Metadata } from "next";
import { TERMS_OF_SERVICE } from "@/constants/legal";
import { SITE_NAME } from "@/constants/site";
import { LegalDocument } from "@/modules/legal";

export const metadata: Metadata = {
  title: `Пользовательское соглашение — ${SITE_NAME}`,
  description: "Пользовательское соглашение сервиса VITRIX VPN",
};

export default function TermsPage() {
  return <LegalDocument document={TERMS_OF_SERVICE} />;
}
