/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GIRL_NAME: string;
  readonly VITE_SLACK_WEBHOOK_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
