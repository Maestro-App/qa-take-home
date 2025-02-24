/* eslint-disable no-empty-pattern */
import { test } from "@playwright/test";
import { Application } from "../../tests/pages/Application";

/**
 * Base fixture that initializes the Application and API instances.
 *
 * This fixture creates a new instance of the `Application` class, which represents
 * the UI interactions, and sets up the base API structure to be used in tests.
 *
 * Exported objects:
 * - `app`: An instance of the `Application` class used for interacting with the UI.
 *
 * This base fixture can be extended in other test fixtures for further customizations.
 */
export const baseFixture = test.extend<{
  app: Application;
}>({
  app: async ({ page }, use) => {
    const app = new Application(page);
    await use(app);
  }
});