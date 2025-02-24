import { TAGS } from "tests/dataProvider/tags";
import { appFixture } from "tests/fixtures/appFixture";
import { Constants } from "tests/dataProvider/constans";
import { Buttons, Fields, Modals} from "tests/dataProvider/selectors/selectors";

appFixture.setTimeout(180000);

appFixture.describe('TC-4 --- Checking the filter fields on Companies page', {
  tag: [
    TAGS.author.Oleg,
    TAGS.type.Autotest
  ]
}, () => {
  appFixture('Checking the filter fields on Companies page',
    async ({
      frontend,
      page
    }) => {
      await appFixture.step('After click on Filter button you should see the fields: Funds, Investment Stages, Sectors, Company Health and Apply, Cancel, Clear All Filters buttons',
        async () => {
          await frontend.basePage.openPage(Constants.FRONTEND_URLS.LOGIN_URL);
          await frontend.frontendPage.loginFrontend({
            username: 'olegbosyuk5@gmail.com',
            password: 'Qwerty@1'
          });
          await page.waitForLoadState('networkidle');
          await frontend.basePage.clickElementByLocator(
            page.locator(Buttons.filterButton)
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator(Modals.modalFiltersPopup).getByText(Fields.foundsField),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator(Modals.modalFiltersPopup).getByText(Fields.investmentStagesField),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator(Modals.modalFiltersPopup).getByText(Fields.selectorsField),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.locator(Modals.modalFiltersPopup).getByText(Fields.companyHealthField),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.getByRole('button', { name: Buttons.applyFilterButton }),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.getByRole('button', { name: Buttons.cancelFilterButton }),
            true
          );
          await frontend.basePage.checkElementIsVisibleByLocator(
            page.getByRole('button', { name: Buttons.clearAllFiltersButton }),
            true
          );
        });
    }
  );
});