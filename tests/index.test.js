import { expect } from "@playwright/test";
import { chromium } from "playwright";
import { preview } from "vite";
import { afterAll, beforeAll, describe, test } from "vitest";

const DEV_SERVER = "https://localhost:5173";

describe("Tests", async () => {
  let server;
  let browser;
  let page;

  beforeAll(async () => {
    server = await preview({
      preview: {
        port: 3000,
      },
    });
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    await new Promise((resolve, reject) => {
      server.httpServer.close((error) => {
        error ? reject(error) : resolve();
      });
    });
  });

  test("button should be visible", async () => {
    await page.goto(DEV_SERVER);

    const button = await page.locator(".choose-music-button");

    await expect(button).toBeVisible();
  });
});
