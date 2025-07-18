import { $ } from '@wdio/globals'
import Page from './page';

/**
 * Page object for the input page at localhost:3000/input-page
 */
class CheckboxPage extends Page {
    /**
     * Define checkbox page selectors
     */
    public get pageTitle () {
        return $('h1');
    }

    public get checkboxes () {
        return $$('input[type="checkbox"]');
    }
    public get continueButton () {
        return $('button[type="continue"], .govuk-button, [role="button"]');
    }
    public get backLink () {
        return $('.govuk-back-link');
    }
     public get errorMessage () {
        return $('.govuk-error-message');
    }

    public get errorSummary () {
        return $('.govuk-error-summary');
    }

    /**
     * Form input methods
     */
    public async setCheckbox () {
        const checkbox = await this.checkboxes[0];
        await checkbox.click();
    }

    public async setCheckboxByIndex (index: number) {
        const checkbox = await this.checkboxes[index];
        await checkbox.click();
    }

    /**
     * Open the checkbox page
     */
    public open () {
        return super.open('Checkbox-page');
    }
}

export default new CheckboxPage();