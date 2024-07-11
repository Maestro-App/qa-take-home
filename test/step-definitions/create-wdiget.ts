import { When } from '@wdio/cucumber-framework';
import allureReporter from '@wdio/allure-reporter';
import dashboardPage from '../pageobjects/dashboard-page.ts';


  

When(/^the user picks the enterprise$/, async () => {
    allureReporter.addFeature('the user picks the enterprise');
    allureReporter.addTestId('Create widget');
    await dashboardPage.openPopUpWidgets();
});