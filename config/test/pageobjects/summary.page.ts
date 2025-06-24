import { $ } from '@wdio/globals'
import Page from './page';

/**
 * Page object for the input page at localhost:3000/input-page
 */
class SummaryPage extends Page {
    /**
     * Define input page selectors
     */
    public get pageTitle () {
        return $('h1');
    }
            public get changeLink () {
              return $('a[href="/input-page"');
            }
            public get changeLink2 () {
              return $('a[href="/radio-page"');
            }
            public get changeLink3 () {
              return $('a[href="/checkbox-page"');
            }
            public get backLink () {
        return $('.govuk-back-link');
    }
            public get submitButton () {
                return $('button[type="submit"], .govuk-button, [role="button"]');
            }




            /**
     * Open the summary page
     */
    public open () {
        return super.open('Summary-page');
    }
}

export default new SummaryPage();