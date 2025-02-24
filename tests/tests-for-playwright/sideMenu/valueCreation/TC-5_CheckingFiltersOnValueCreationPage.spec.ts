import { TAGS } from "tests/dataProvider/tags";
import { appFixture } from "tests/fixtures/appFixture";
import { Constants } from "tests/dataProvider/constans";
import { Buttons} from "tests/dataProvider/selectors/selectors";

appFixture.setTimeout(180000);

appFixture.describe('TC-5 --- Checking the filters on Value creation page', {
  tag: [
    TAGS.author.Oleg,
    TAGS.type.Autotest
  ]
}, () => {
  appFixture('Checking the filters on Value creation page',
    async ({
      frontend,
      page
    }) => {
      await appFixture.step('You should see the filters: Fund, Company, Industry, Investment Stage',
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
          await frontend.basePage.clickElementByLocator(
            page.locator('span').filter({ hasText: 'Value Creation' }),
          );
          await page.waitForLoadState('networkidle');
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator('div').filter({ hasText: 'Fund' }).nth(1),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator('div').filter({ hasText: 'Company' }).nth(1),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator('div').filter({ hasText: 'Industry' }).nth(1),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator('div').filter({ hasText: 'Investment Stage' }).nth(1),
            true
          );
        });
    }
  );
});