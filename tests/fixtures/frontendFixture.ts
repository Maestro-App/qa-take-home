import { FrontendApp } from "../pages/Application";
import { baseFixture } from "./baseFixture";

/**
 * Fixture for frontend testing.
 *
 * This fixture extends the `configFixture` to provide functionalities specific
 * to frontend interactions. It includes methods for initializing the frontend
 * application and performing user login operations.
 *
 * Extended properties:
 * - `frontend`: An instance of the `Application` class representing the frontend
 *   interface. This fixture opens the frontend application page before providing
 *   it for use in tests.
 *
 * - `frontendAuth`: Similar to `frontend`, but also includes a user login
 *   step using predefined login credentials. This is useful for tests that
 *   require an authenticated session to interact with the application.
 *
 * Usage:
 * In your tests, you can utilize `frontend` for general frontend interactions,
 * or `frontendAuth` when you need to test features that require user
 * authentication.
 */
export const frontendFixture = baseFixture.extend<{
  frontend: FrontendApp;
  frontendAuth: FrontendApp;
}>({
  frontend: async ({ page }, use) => {
    const frontend = new FrontendApp(page);

    await use(frontend);
  }
});