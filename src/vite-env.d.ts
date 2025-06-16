/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BASE_PATH?: string;
  // add other env variables here if needed
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

// Add video module declarations
declare module '*.mp4' {
  const src: string;
  export default src;
}
