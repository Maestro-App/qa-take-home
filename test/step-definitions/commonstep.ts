import { Given,When,Then } from '@wdio/cucumber-framework';
import allureReporter from '@wdio/allure-reporter';
import goMaestroHomePage from '../pageobjects/go-maestro-home-page.ts';



Given(/^I am on the login page$/, async () => {
    allureReporter.addFeature('Login flow into GoMaestro');
    allureReporter.addTestId('LoginFlow');
    await goMaestroHomePage.openGoMaestroPage();
});


When(/^the user types the credentials$/, async () => {
    allureReporter.addFeature('Login flow into GoMaestro');
    allureReporter.addTestId('LoginFlow');
    await goMaestroHomePage.sendKeysAndLogin();
});

Then(/^the page will allow to the user to enter the page$/, async () => {
    allureReporter.addFeature('Login flow into GoMaestro');
    allureReporter.addTestId('LoginFlow');
    await goMaestroHomePage.validateUserIsLoginIntoMaestro();
});


