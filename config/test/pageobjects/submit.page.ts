import { $ } from '@wdio/globals'
import Page from './page';

/**
 * Page object for the input page at localhost:3000/input-page
 */
class SubmitPage extends Page {
    /**
     * Define input page selectors
     */
    public get pageTitle () {
        return $('h1');
    }




       /**
     * Open the submit page
     */
    public open () {
        return super.open('Submit');
    }
}

export default new SubmitPage();