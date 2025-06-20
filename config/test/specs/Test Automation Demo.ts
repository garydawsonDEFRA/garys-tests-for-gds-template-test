import HomePage from '../pageobjects/home.page';
import InputPage from '../pageobjects/input.page';

describe('Homepage Tests', () => {
    it('should load the homepage', async () => {
        await HomePage.open();
        await expect(HomePage.pageTitle).toBeDisplayed();
    });

    it('should navigate through the pages', async () => {
        await HomePage.open();
        await HomePage.startNowButton.waitForExist({ timeout: 5000 });
        await expect(HomePage.startNowButton).toBeDisplayed();
        await HomePage.startNowButton.click();      
        await expect(browser).toHaveUrl('http://localhost:3000/input-page');
        await InputPage.open();
        await InputPage.inputField.setValue('This is a test');
        await InputPage.continueButton.waitForExist({ timeout: 5000 });
        await InputPage.continueButton.click();   
        await expect(browser).toHaveUrl('http://localhost:3000/radio-page');
    });

});