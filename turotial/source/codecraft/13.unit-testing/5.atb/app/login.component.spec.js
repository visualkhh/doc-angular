"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var login_component_1 = require("./login.component");
var auth_service_1 = require("./auth.service");
describe('Component: Login', function () {
    var component;
    var fixture;
    var authService;
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
    });
    it('canLogin returns false when the user is not authenticated', function () {
        spyOn(authService, 'isAuthenticated').and.returnValue(false);
        expect(component.needsLogin()).toBeTruthy();
        expect(authService.isAuthenticated).toHaveBeenCalled();
    });
    it('canLogin returns false when the user is not authenticated', function () {
        spyOn(authService, 'isAuthenticated').and.returnValue(true);
        expect(component.needsLogin()).toBeFalsy();
        expect(authService.isAuthenticated).toHaveBeenCalled();
    });
});
//# sourceMappingURL=login.component.spec.js.map