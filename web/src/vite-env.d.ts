/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GRAPH_SERVER: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
