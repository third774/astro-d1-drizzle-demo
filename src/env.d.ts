/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

type D1Database = import("@cloudflare/workers-types/experimental").D1Database;
type ENV = {
  DB: D1Database;
};

type Runtime = import("@astrojs/cloudflare").AdvancedRuntime<ENV>;

declare namespace App {
  interface Locals extends Runtime {}
}
