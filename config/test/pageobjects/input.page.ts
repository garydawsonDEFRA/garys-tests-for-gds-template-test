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
        return $('a[href*="input"], button, .govuk-button, [role="button"]');
    }

    public get backLink () {
        return $('a[href="/"], .govuk-back-link');
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