import { $ } from '@wdio/globals'
import Page from './page';

/**
 * Page object for the input page at localhost:3000/input-page
 */
class InputPage extends Page {
    /**
     * Define input page selectors
     */
    public get pageTitle () {
        return $('h1');
    }

    public get inputField () {
        return $('input');
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
    public async setInputField (value: string) {
        await this.inputField.setValue(value);
    }

    /**
     * Open the input page
     */
    public open () {
        return super.open('input-page');
    }
}

export default new InputPage();