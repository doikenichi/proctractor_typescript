// local import of the exported AngularPage class
import {AngularHomepage} from './page_object/angularPage';
import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';

// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {
  it('should greet the named user', () => {
    let angularHomepage = new AngularHomepage();
    angularHomepage.get();
    angularHomepage.setName('Julie');
    browser.sleep(5000);
    expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
  });

  it('should list todos', function() {
    let angularHomepage = new AngularHomepage();
    angularHomepage.get();
    browser.sleep(5000);
    expect(angularHomepage.todoList.count()).toEqual(2);
    expect(angularHomepage.todoList.get(1).getText()).toEqual('build an AngularJS app');
  });
});
