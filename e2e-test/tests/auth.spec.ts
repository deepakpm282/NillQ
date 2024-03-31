import { test, expect } from "@playwright/test";

const UI_URL = "http://localhost:5173/";
test("Should allow the user to signIn", async ({ page }) => {
  await page.goto(UI_URL);

  await expect(
    page.getByRole("heading", { name: "Sign In to NillQ" })
  ).toBeVisible();
  await page.locator("[ name = email]").fill("test14@gmail.com");
  await page.locator("[ name = password]").fill("test14@123");

  await page.getByRole("button", { name: "Sign In" }).click();
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
