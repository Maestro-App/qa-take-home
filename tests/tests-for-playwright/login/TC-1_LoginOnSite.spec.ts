import { TEXTS } from "tests/dataProvider/texts";
import { TAGS } from "tests/dataProvider/tags";
import { appFixture } from "tests/fixtures/appFixture";
import { Constants } from "tests/dataProvider/constans";

appFixture.setTimeout(180000);

appFixture.describe('TC-1 --- Login on site', {
  tag: [
    TAGS.author.Oleg,
    TAGS.type.Autotest
  ]
}, () => {
  appFixture('Login on site',
    async ({
      frontend,
      page
    }) => {
      await appFixture.step('Open the login page and verify that the login completed',
        async () => {
          await frontend.basePage.openPage(Constants.FRONTEND_URLS.LOGIN_URL);
          await frontend.frontendPage.loginFrontend({
            username: 'olegbosyuk5@gmail.com',
            password: 'Qwerty@1'
          });
          await page.waitForLoadState('networkidle');
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.getByRole('heading', { name: TEXTS.COMPANIES, level: 1 }),
            true
          );
        });
    }
  );
});