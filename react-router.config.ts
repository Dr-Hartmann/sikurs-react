import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  prerender: ["/", "/catalog", "/map"],
} satisfies Config;
