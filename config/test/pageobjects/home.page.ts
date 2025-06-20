import { $ } from '@wdio/globals'
import Page from './page';

/**
 * Page object for the homepage at localhost:3000
 */
class HomePage extends Page {
    /**
     * Define common homepage selectors
     */
    public get pageTitle () {
        return $('h1');
    }

    public get navigationMenu () {
        return $('nav');
    }

    public get mainContent () {
        return $('main');
    }

    public get footer () {
        return $('footer');
    }

    public get startNowButton () {
        return $('a[href*="input"], button, .govuk-button, [role="button"]');
    }

    /**
     * Get page title text
     */
    public async getTitle () {
        return await this.pageTitle.getText();
    }

    /**
     * Check if page is loaded
     */
    public async isLoaded () {
        return await this.pageTitle.isDisplayed();
    }

    /**
     * Open the homepage
     */
    public open () {
        return super.open('');
    }
}

export default new HomePage();