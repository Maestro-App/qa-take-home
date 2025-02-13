import { expect } from '@playwright/test';

export class Objectives {
    constructor(page) {
      this.page = page;
      this.initLocators();
    }
  
    initLocators() {
      this.create = {
        addButton: this.page.getByRole('button', { name: 'Add' }),
        popupTitle: this.page.getByRole('heading', { name: 'Add Objective' }),
        nameField: this.page.getByPlaceholder('Enter Your Objective\'s Name'),
        startDateField: this.page.getByTestId('objective-start-date-field').getByPlaceholder('Select a Date'),
        endDateField: this.page.getByTestId('objective-end-date-field').getByPlaceholder('Select a Date'),
        addObjectiveButton: this.page.getByRole('button', { name: 'Add Objective' }),
        allUserVisibilityOption: this.page.getByRole('button', { name: 'Open to All All users with' }),
        doneButton: this.page.getByRole('button', { name: 'Done' }),
        accessPopupTitle: this.page.getByText('Objective Access'),
      };
      this.edit = {
        moreButton: this.page.getByLabel('Icon.Menu'),
        editButton: this.page.getByRole('button', { name: 'Edit Objective' }),
        popupTitle: this.page.getByRole('heading', { name: 'Edit Objective' }),
        saveButton: this.page.getByRole('button', { name: 'Save' }),
        nameField: this.page.locator('div[data-testid="text-field-container"] input'),


      }
      this.archive = {
        archiveButton: this.page.getByRole('button', { name: 'Archive Objective' }),
        popupTitle: this.page.getByText('Archive Objective'),
        confirmButton: this.page.getByRole('button', { name: 'Confirm' }),
      }
    }

    async dateLocator(Date){
        return this.page.getByLabel(`Choose ${Date},`)
    };

    async objectionInList(objectiveName) {
        return this.page.getByRole('link', { name: objectiveName });
    }

    async openObjectiveNameLocator(objectiveName){
        return this.page.getByRole('heading', { name: `${objectiveName}` })
    }


    async createNewObjective(objectiveName, startDate, endDate){
        await expect(this.create.addButton).toBeVisible()
        await this.create.addButton.click();
        await expect(this.create.popupTitle).toBeVisible()
        await expect(this.create.addObjectiveButton).toHaveAttribute('disabled')
        await expect(this.create.nameField).toBeVisible();
        await this.create.nameField.fill(objectiveName);
        await expect(this.create.addObjectiveButton).toHaveAttribute('disabled')
        await expect(this.create.startDateField).toBeVisible();
        await this.create.startDateField.click()
        const startDateLocator = await this.dateLocator(startDate)
        await startDateLocator.click();
        await expect(this.create.endDateField).toBeVisible();
        const endDateLocator = await this.dateLocator(endDate)
        await this.create.endDateField.click();
        await endDateLocator.click();
        await expect(this.create.addObjectiveButton).not.toHaveAttribute('disabled');
        await this.create.addObjectiveButton.click();
        await expect(this.create.accessPopupTitle).toBeVisible();
        await expect(this.create.allUserVisibilityOption).toBeVisible();
        await expect(this.create.doneButton).toBeVisible();
        await this.create.doneButton.click();
        await expect(this.create.accessPopupTitle).toBeHidden();
        const objectionInListLocator = await this.objectionInList(objectiveName);
        await expect(objectionInListLocator).toBeVisible();
    }

    async openObjectiveFromList(objectiveName){
        const objectionInListLocator = await this.objectionInList(objectiveName);
        await expect(objectionInListLocator).toBeVisible();
        await objectionInListLocator.click();
        const objectiveHeader = await this.openObjectiveNameLocator(objectiveName);
        await expect(objectiveHeader).toBeVisible()
    }

    async editObjectiveName(originalName, newName){
        await expect(this.edit.moreButton).toBeVisible()
        await this.edit.moreButton.click();
        await expect(this.edit.editButton).toBeVisible()
        await this.edit.editButton.click();
        await expect(this.edit.popupTitle).toBeVisible()
        await expect(this.edit.nameField).toHaveValue(originalName);
        await this.edit.nameField.fill(newName)
        await expect(this.edit.nameField).toHaveValue(newName);
        await expect(this.edit.saveButton).toBeVisible();
        await this.edit.saveButton.click()
        await expect(this.edit.popupTitle).toBeHidden();
        const objectiveHeader = await this.openObjectiveNameLocator(newName);
        await expect(objectiveHeader).toBeVisible()
    }

    async archiveObjective(objectiveName){
        await expect(this.edit.moreButton).toBeVisible()
        await this.edit.moreButton.click();
        await expect(this.archive.archiveButton).toBeVisible();
        await this.archive.archiveButton.click();
        await expect(this.archive.popupTitle).toBeVisible();
        await expect(this.archive.confirmButton).toBeVisible();
        await this.archive.confirmButton.click();
        await expect(this.archive.popupTitle).toBeHidden();
        const objectiveHeader = await this.openObjectiveNameLocator(objectiveName);
        await expect(objectiveHeader).toBeHidden();
    }
}