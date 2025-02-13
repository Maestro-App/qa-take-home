import { test } from '@playwright/test';
import { Objectives } from '../pageObjects/Objectives';
import { Login } from '../pageObjects/Login';

test.describe.configure({ mode: 'parallel' });
test.describe('Objective cruds', () => {
    test.beforeEach('Go to objectives', async ({page}) => {
        await page.goto('https://public.dev-go-maestro.com/companies/14/objectives');
        const login = new Login(page)
        const email = 'yourEmail';
        const password = 'yourPassword';
        await login.signIn(email, password); // better to have things like that as a fixture with login using token
    });

    // all preconditions and post conditions should use API to reduce execution time 
test('Create objective', async ({ page }) => {
    const objectives = new Objectives(page);
    const startDate = 'Thursday, February 13th';
    const endDate = 'Saturday, February 15th';
    const objectiveName = 'Test create objective';
    try{
    await objectives.createNewObjective(objectiveName, startDate, endDate);}
    finally{
        await objectives.archiveObjective(objectiveName)
    }
});


test('Edit objective name', async ({ page }) => {
    const objectives = new Objectives(page);
    const startDate = 'Tuesday, February 18th';
    const endDate = 'Sunday, February 23rd';
    const originalName = 'Original name for update';
    const newName = 'Updated name';
    let nameForDeletion = originalName;
    try{
    await objectives.createNewObjective(originalName, startDate, endDate);
    await objectives.openObjectiveFromList(originalName);
    await objectives.editObjectiveName(originalName, newName)
    nameForDeletion = newName;
    }
    finally{
        await objectives.archiveObjective(nameForDeletion)
    }
    });

test('Archive objective', async ({ page }) => {
    const objectives = new Objectives(page);
    const startDate = 'Tuesday, February 18th';
    const endDate = 'Sunday, February 23rd';
    const objectiveName = 'Objective for deletion';

    await objectives.createNewObjective(objectiveName, startDate, endDate);
    await objectives.openObjectiveFromList(objectiveName);
    await objectives.archiveObjective(objectiveName)
});
})