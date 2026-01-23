/// <reference path="../.astro/types.d.ts" />

declare namespace App {
  interface Locals {
    runtime?: {
      env: Record<string, string>;
    };
  }
}
