"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var login_component_1 = require("./login.component");
var platform_browser_1 = require("@angular/platform-browser");
describe('Component: Login', function () {
    var component;
    var fixture;
    var submitEl;
    var loginEl;
    var passwordEl;
    beforeEach(function () {
        // refine the test module by declaring the test component
        testing_1.TestBed.configureTestingModule({
            declarations: [login_component_1.LoginComponent]
        });
        // create component and test fixture
        fixture = testing_1.TestBed.createComponent(login_component_1.LoginComponent);
        // get test component from the fixture
        component = fixture.componentInstance;
        submitEl = fixture.debugElement.query(platform_browser_1.By.css('button'));
        loginEl = fixture.debugElement.query(platform_browser_1.By.css('input[type=email]'));
        passwordEl = fixture.debugElement.query(platform_browser_1.By.css('input[type=password]'));
    });
    it('Setting enabled to false disabled the submit button', function () {
        component.enabled = false;
        fixture.detectChanges();
        expect(submitEl.nativeElement.disabled).toBeTruthy();
    });
    it('Setting enabled to true enables the submit button', function () {
        component.enabled = true;
        fixture.detectChanges();
        expect(submitEl.nativeElement.disabled).toBeFalsy();
    });
    it('Entering email and password emits loggedIn event', function () {
        var user;
        loginEl.nativeElement.value = "test@example.com";
        passwordEl.nativeElement.value = "123456";
        // Subscribe to the Observable and store the user in a local variable.
        component.loggedIn.subscribe(function (value) { return user = value; });
        // This sync emits the event and the subscribe callback gets executed above
        submitEl.triggerEventHandler('click', null);
        // Now we can check to make sure the emitted value is correct
        expect(user.email).toBe("test@example.com");
        expect(user.password).toBe("123456");
    });
});
//# sourceMappingURL=login.component.spec.js.map