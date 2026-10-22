import Script from "next/script";
import { THEME_STORAGE_KEY } from "@/lib/theme";

const themeInitScript = `(function(){
  var k='${THEME_STORAGE_KEY}';
  var s=localStorage.getItem(k);
  var t=s==='dark'||s==='light'?s:(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  document.documentElement.setAttribute('data-theme',t);
})();`;

export function ThemeInitScript() {
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {themeInitScript}
    </Script>
  );
}
