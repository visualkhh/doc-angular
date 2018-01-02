"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var login_component_1 = require("./login.component");
var auth_service_1 = require("./auth.service");
var platform_browser_1 = require("@angular/platform-browser");
describe('Component: Login', function () {
    var component;
    var fixture;
    var authService;
    var el;
    beforeEach(function () {
        // refine the test module by declaring the test component
        testing_1.TestBed.configureTestingModule({
            declarations: [login_component_1.LoginComponent],
            providers: [auth_service_1.AuthService]
        });
        // create component and test fixture
        fixture = testing_1.TestBed.createComponent(login_component_1.LoginComponent);
        // get test component from the fixture
        component = fixture.componentInstance;
        // UserService provided to the TestBed
        authService = testing_1.TestBed.get(auth_service_1.AuthService);
        //  get the "a" element by CSS selector (e.g., by class name)
        el = fixture.debugElement.query(platform_browser_1.By.css('a'));
    });
    it('login button hidden when the user is authenticated', function () {
        // To being with Angular has not done any change detection so the content is blank.
        expect(el.nativeElement.textContent.trim()).toBe('');
        // Trigger change detection and this lets the template update to the initial value which is Login since by
        // default we are not authenticated
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Login');
        // Change the authetication state to true
        spyOn(authService, 'isAuthenticated').and.returnValue(true);
        // The label is still Login! We need changeDetection to run and for angular to update the template.
        expect(el.nativeElement.textContent.trim()).toBe('Login');
        // Which we can trigger via fixture.detectChange()
        fixture.detectChanges();
        // Now the label is Logout
        expect(el.nativeElement.textContent.trim()).toBe('Logout');
    });
});
//# sourceMappingURL=login.component.spec.js.map