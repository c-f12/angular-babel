import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    // by.css es como querySelector:
    return element(by.css('bbl-root h1')).getText();
  }
}
