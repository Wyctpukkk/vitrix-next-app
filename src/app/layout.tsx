import type { Metadata } from "next";
import { Onest } from "next/font/google";
import { SITE_NAME } from "@/constants/site";
import { Footer } from "@/modules/footer";
import { Header } from "@/modules/header";
import { ThemeEffects, ThemeInitScript } from "@/modules/theme";
import { GlobalBackground } from "@/ui/layout";
import "./globals.scss";

const onest = Onest({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: SITE_NAME,
  description: SITE_NAME,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={onest.className}>
        <ThemeInitScript />
        <ThemeEffects />
        <GlobalBackground />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
