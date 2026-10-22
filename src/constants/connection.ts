import { TELEGRAM_BOT_URL, VPN_LOGIN_URL } from "@/constants/site";
import type { ConnectionStep } from "@/types/connection";

export const CONNECTION_SECTION_TITLE = "Подключение";

export const CONNECTION_SECTION_SUBTITLE = "Три шага — и всё работает";

export const CONNECTION_SECTION_DESCRIPTION =
  "Не нужно ничего настраивать вручную. Вы копируете одну ссылку, приложение делает остальное.";

export const CONNECTION_STEPS: readonly ConnectionStep[] = [
  {
    id: "choose-tariff",
    title: "Выберите тариф",
    description: [
      { kind: "text", value: "Зарегистрируйтесь на " },
      { kind: "link", text: "сайте", href: VPN_LOGIN_URL },
      { kind: "text", value: " или в " },
      { kind: "link", text: "Telegram-боте", href: TELEGRAM_BOT_URL },
      { kind: "text", value: " и оплатите выбранный тариф." },
    ],
  },
  {
    id: "copy-link",
    title: "Скопируйте ссылку",
    description: [
      {
        kind: "text",
        value:
          "В личном кабинете сразу появится ваша ссылка подписки. Нажмите «Скопировать».",
      },
    ],
  },
  {
    id: "paste-app",
    title: "Вставьте в приложение",
    description: [
      {
        kind: "text",
        value:
          "Установите приложение Happ/Incy на ваше устройство, нажмите «Вставить из буфера» и включите VPN.",
      },
    ],
  },
];
