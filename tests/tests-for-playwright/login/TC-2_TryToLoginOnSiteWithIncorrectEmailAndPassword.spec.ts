import { TAGS } from "tests/dataProvider/tags";
import { appFixture } from "tests/fixtures/appFixture";
import { Constants } from "tests/dataProvider/constans";
import { ErrorMessages } from "tests/dataProvider/selectors/selectors";

appFixture.setTimeout(180000);

appFixture.describe('TC-2 Try to login on site with incorrect email and password', {
  tag: [
    TAGS.author.Oleg,
    TAGS.type.Autotest
  ]
}, () => {
  appFixture('Login on site with incorrect email',
    async ({
      frontend,
      page
    }) => {
      await appFixture.step('After click on Login button you should see the "Invalid Email or password" error message',
        async () => {
          await frontend.basePage.openPage(Constants.FRONTEND_URLS.LOGIN_URL);
          await frontend.frontendPage.loginFrontend({
            username: 'oleg@gmail.com',
            password: 'Qwerty@1'
          });
          await page.waitForLoadState('networkidle');
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.getByText(ErrorMessages.ivalidEmailOrPassword),
            true
          );
        });
    }
  );

  appFixture('Login on site with incorrect password',
    async ({
      frontend,
      page
    }) => {
      await appFixture.step('After click on Login button you should see the "Invalid Email or password" error message',
        async () => {
          await frontend.basePage.openPage(Constants.FRONTEND_URLS.LOGIN_URL);
          await frontend.frontendPage.loginFrontend({
            username: 'olegbosyuk5@gmail.com',
            password: '1234567'
          });
          await page.waitForLoadState('networkidle');
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.getByText(ErrorMessages.ivalidEmailOrPassword),
            true
          );
        });
    }
  );
});