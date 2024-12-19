interface ImportMetaEnv {
  readonly VITE_SUPABASE_SERVICE_ROLE_KEY: string;
  readonly VITE_SUPABASE_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
