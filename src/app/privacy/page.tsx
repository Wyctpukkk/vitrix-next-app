import type { Metadata } from "next";
import { PRIVACY_POLICY } from "@/constants/legal";
import { SITE_NAME } from "@/constants/site";
import { LegalDocument } from "@/modules/legal";

export const metadata: Metadata = {
  title: `Политика конфиденциальности — ${SITE_NAME}`,
  description: "Политика конфиденциальности сервиса VITRIX VPN",
};

export default function PrivacyPage() {
  return <LegalDocument document={PRIVACY_POLICY} />;
}
