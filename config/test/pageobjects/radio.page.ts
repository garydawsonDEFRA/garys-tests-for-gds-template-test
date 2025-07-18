import { $ } from '@wdio/globals'
import Page from './page';

/**
 * Page object for the input page at localhost:3000/radio-page
 */
class RadioPage extends Page {
    /**
     * Define radio page selectors
     */
    public get pageTitle () {
        return $('h1');
    }
    public get radioButtons () {
        return $$('input[type="radio"]');
    }
    public get radioButtonsLabels () {
        return $$('label');
    }
    public get continueButton () {
        return $('button[type="submit"], input[type="submit"], .govuk-button:not(.govuk-back-link)');
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
    public async setradioButton (value: string) {
        const radios = await this.radioButtons;
        for (const radio of radios) {
            const radioValue = await radio.getAttribute('value');
            if (radioValue === value) {
                await radio.click();
                break;
            }
        }
    }

    /**
     * Open the radio page
     */
    public open () {
        return super.open('radio-page');
    }
}

export default new RadioPage();

