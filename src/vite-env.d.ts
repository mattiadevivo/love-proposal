/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GIRL_NAME: string;
  readonly VITE_MESSAGE: string;
  readonly VITE_TELEGRAM_CHAT_ID: string;
  readonly VITE_TELEGRAM_BOT_TOKEN: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
