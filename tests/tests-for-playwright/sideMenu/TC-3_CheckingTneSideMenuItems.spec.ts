import { TAGS } from "tests/dataProvider/tags";
import { appFixture } from "tests/fixtures/appFixture";
import { Constants } from "tests/dataProvider/constans";
import { Buttons} from "tests/dataProvider/selectors/selectors";

appFixture.setTimeout(180000);

appFixture.describe('TC-3 --- Checking the side menu items', {
  tag: [
    TAGS.author.Oleg,
    TAGS.type.Autotest
  ]
}, () => {
  appFixture('Checking the side menu items',
    async ({
      frontend,
      page
    }) => {
      await appFixture.step('You should see the menu items: Companies, Value Creation, Portfolio Insights, Knowledge Hub, Alerts, Help and Settings',
        async () => {
          await frontend.basePage.openPage(Constants.FRONTEND_URLS.LOGIN_URL);
          await frontend.frontendPage.loginFrontend({
            username: 'olegbosyuk5@gmail.com',
            password: 'Qwerty@1'
          });
          await page.waitForLoadState('networkidle');
          await frontend.basePage.clickElementByLocator(
            page.locator(Buttons.collapseSidebar)
          );
          await page.waitForTimeout(1000);
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator('span').filter({ hasText: 'Companies' }),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator('span').filter({ hasText: 'Value Creation'}),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator('span').filter({ hasText: 'Portfolio Insights'}),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator('span').filter({ hasText: 'Knowledge Hub'}),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator('span').filter({ hasText: 'Alerts'}),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator('span').filter({ hasText: 'Help'}),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator('span').filter({ hasText: 'Settings'}),
            true
          );
        });
    }
  );
});