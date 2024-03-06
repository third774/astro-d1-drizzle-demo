import type { Config } from "drizzle-kit";

export default process.env.LOCAL_DB_PATH
  ? ({
      schema: "./src/schema.ts",
      driver: "better-sqlite",
      dbCredentials: {
        url: process.env.LOCAL_DB_PATH!,
      },
    } satisfies Config)
  : ({
      schema: "./src/schema.ts",
      out: "./migrations",
      driver: "d1",
      dbCredentials: {
        wranglerConfigPath: new URL("wrangler.toml", import.meta.url).pathname,
        dbName: "kevinkipp.com",
      },
    } satisfies Config);
