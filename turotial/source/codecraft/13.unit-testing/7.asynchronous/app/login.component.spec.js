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
    it('Button label via fakeAsync() and tick()', testing_1.fakeAsync(function () {
        expect(el.nativeElement.textContent.trim()).toBe('');
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Login');
        spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        component.ngOnInit();
        // Simulates the passage of time until all pending asynchronous activities complete
        testing_1.tick();
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Logout');
    }));
    it('Button label via async() and whenStable()', testing_1.async(function () {
        // async() knows about all the pending promises defined in it's function body.
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Login');
        spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        fixture.whenStable().then(function () {
            // This is called when ALL pending promises have been resolved
            fixture.detectChanges();
            expect(el.nativeElement.textContent.trim()).toBe('Logout');
        });
        component.ngOnInit();
    }));
    it('Button label via jasmine.done', function (done) {
        fixture.detectChanges();
        expect(el.nativeElement.textContent.trim()).toBe('Login');
        // Make the authService return a promise that resolves to true
        var spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
        // We trigger the component to check the authService again
        component.ngOnInit();
        // We now want to call a function when the Promise returned from authService.isAuthenticated() is resolved
        spy.calls.mostRecent().returnValue.then(function () {
            // The needsChanged boolean has been updated on the Component so to update the template we trigger change detection
            fixture.detectChanges();
            // Now the label is Logout
            expect(el.nativeElement.textContent.trim()).toBe('Logout');
            // We tell jasmine we are done with this test spec
            done();
        });
    });
});
//# sourceMappingURL=login.component.spec.js.map