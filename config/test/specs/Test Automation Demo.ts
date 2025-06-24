import HomePage from '../pageobjects/home.page';
import InputPage from '../pageobjects/input.page';
import RadioPage from '../pageobjects/radio.page';
import CheckboxPage from '../pageobjects/checkbox.page';
import SummaryPage from '../pageobjects/summary.page';
import SubmitPage from '../pageobjects/submit.page';
import { getFullUrl } from '../constants/urls';

describe('Test Automation Demo tests', () => {
    // Helper function to navigate to input page
    const navigateToInputPage = async () => {
        await HomePage.open();
        await HomePage.startNowButton.waitForExist({ timeout: 5000 });
        await expect(HomePage.startNowButton).toBeDisplayed();
        await HomePage.startNowButton.click();
        await expect(browser).toHaveUrl(getFullUrl('input'));
    };
    // Helper function to navigate to radio page
    const navigateToRadioPage = async () => {
        await HomePage.open();
        await HomePage.startNowButton.waitForExist({ timeout: 5000 });
        await expect(HomePage.startNowButton).toBeDisplayed();
        await HomePage.startNowButton.click();
        await expect(browser).toHaveUrl(getFullUrl('input'));
        await InputPage.open();
        await InputPage.inputField.setValue('This is a test');
        await InputPage.continueButton.waitForExist({ timeout: 5000 });
        await InputPage.continueButton.click();
        await expect(browser).toHaveUrl(getFullUrl('radio'));
    };
    // Helper function to navigate to checkbox page
    const navigateToCheckboxPage = async () => {
        await HomePage.open();
        await HomePage.startNowButton.waitForExist({ timeout: 5000 });
        await expect(HomePage.startNowButton).toBeDisplayed();
        await HomePage.startNowButton.click();
        await expect(browser).toHaveUrl(getFullUrl('input'));
        await InputPage.open();
        await InputPage.inputField.setValue('This is a test');
        await InputPage.continueButton.waitForExist({ timeout: 5000 });
        await InputPage.continueButton.click();
        await expect(browser).toHaveUrl(getFullUrl('radio'));
        await RadioPage.open();
        await RadioPage.setradioButton('option1');
        await RadioPage.continueButton.waitForExist({ timeout: 5000 });
        await RadioPage.continueButton.click();
        await expect(browser).toHaveUrl(getFullUrl('checkbox'));
    };

    it('should load the homepage', async () => {
        await HomePage.open();
        await expect(HomePage.pageTitle).toBeDisplayed();
    });
    it('should navigate through the pages', async () => {
        await navigateToInputPage();
        await InputPage.open();
        await InputPage.inputField.setValue('This is a test');
        await InputPage.continueButton.waitForExist({ timeout: 5000 });
        await InputPage.continueButton.click();   
        await expect(browser).toHaveUrl(getFullUrl('radio'));
        await RadioPage.open();
        await RadioPage.setradioButton('option1');
        await RadioPage.continueButton.waitForExist({ timeout: 5000 });
        await RadioPage.continueButton.click();
        await expect(browser).toHaveUrl(getFullUrl('checkbox'));
        await CheckboxPage.open();
        await CheckboxPage.setCheckboxByIndex(0);
        await CheckboxPage.setCheckboxByIndex(2);
        await CheckboxPage.continueButton.waitForExist({ timeout: 5000 });
        await CheckboxPage.continueButton.click();
        await expect(browser).toHaveUrl(getFullUrl('summary'));
        await SummaryPage.open();
        await SummaryPage.submitButton.waitForExist({ timeout: 5000 });
        await SummaryPage.submitButton.click();
        await expect(browser).toHaveUrl(getFullUrl('submit'));
        await SubmitPage.open();
    });
    it('should check the validation of the input page', async () => {
        await navigateToInputPage();
        await InputPage.inputField.clearValue();
        await InputPage.continueButton.click();
        // Validation should prevent navigation and stay on input page
        await expect(browser).toHaveUrl(getFullUrl('input'));
        await expect(InputPage.errorMessage).toBeDisplayed();
    });
    it('should check the validation of the radio page', async () => {
        await navigateToRadioPage();
        await browser.execute(() => {
            document.querySelectorAll('input[type="radio"]').forEach(radio => (radio as HTMLInputElement).checked = false);
        });
        await RadioPage.continueButton.click();
        // Validation should prevent navigation and stay on radio page
        await expect(browser).toHaveUrl(getFullUrl('radio'));
        await expect(RadioPage.errorMessage).toBeDisplayed();
    });
    it('should check the validation of the checkbox page', async () => {
        await navigateToCheckboxPage();
        await browser.execute(() => {
            document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => (checkbox as HTMLInputElement).checked = false);
        });
        await CheckboxPage.continueButton.click();
        // Validation should prevent navigation and stay on checkbox page
        await expect(browser).toHaveUrl(getFullUrl('checkbox'));
        await expect(CheckboxPage.errorMessage).toBeDisplayed();
    });
    it('should check the back link functionality of the pages', async () => {
        await navigateToCheckboxPage();
        await CheckboxPage.setCheckboxByIndex(0);
        await CheckboxPage.continueButton.click();
        await browser.execute(() => (document.querySelector('.govuk-back-link') as HTMLElement)?.click());
        await expect(browser).toHaveUrl(getFullUrl('checkbox'));
        await browser.execute(() => (document.querySelector('.govuk-back-link') as HTMLElement)?.click());
        await expect(browser).toHaveUrl(getFullUrl('radio'));
        await browser.execute(() => (document.querySelector('.govuk-back-link') as HTMLElement)?.click());
        await expect(browser).toHaveUrl(getFullUrl('input'));
    });
    it('should check the change links on the summary page', async () => {
        await navigateToCheckboxPage();
        await CheckboxPage.setCheckboxByIndex(0);
        await CheckboxPage.continueButton.click();
        await SummaryPage.changeLink.click();
        await expect(browser).toHaveUrl(getFullUrl('input'));
        await InputPage.inputField.setValue('This is a test');
        await InputPage.continueButton.click();
        await RadioPage.setradioButton('option1');
        await RadioPage.continueButton.click();
        await CheckboxPage.setCheckboxByIndex(0);
        await CheckboxPage.continueButton.click();
        await SummaryPage.changeLink2.click();
        await expect(browser).toHaveUrl(getFullUrl('radio'));
        await RadioPage.setradioButton('option1');
        await RadioPage.continueButton.click();
        await CheckboxPage.setCheckboxByIndex(0);
        await CheckboxPage.continueButton.click();
        await SummaryPage.changeLink3.click();
        await expect(browser).toHaveUrl(getFullUrl('checkbox'));
    });
});