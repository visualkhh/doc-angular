"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var login_component_1 = require("./login.component");
var auth_service_1 = require("./auth.service");
var MockAuthService = /** @class */ (function (_super) {
    __extends(MockAuthService, _super);
    function MockAuthService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockAuthService.prototype.isAuthenticated = function () {
        return 'Mocked';
    };
    return MockAuthService;
}(auth_service_1.AuthService));
describe('Component: Login', function () {
    var component;
    var fixture;
    var testBedService;
    var componentService;
    beforeEach(function () {
        // refine the test module by declaring the test component
        testing_1.TestBed.configureTestingModule({
            declarations: [login_component_1.LoginComponent],
            providers: [auth_service_1.AuthService]
        });
        // Configure the component with another set of Providers
        testing_1.TestBed.overrideComponent(login_component_1.LoginComponent, { set: { providers: [{ provide: auth_service_1.AuthService, useClass: MockAuthService }] } });
        // create component and test fixture
        fixture = testing_1.TestBed.createComponent(login_component_1.LoginComponent);
        // get test component from the fixture
        component = fixture.componentInstance;
        // AuthService provided to the TestBed
        testBedService = testing_1.TestBed.get(auth_service_1.AuthService);
        // AuthService provided by Component, (should return MockAuthService)
        componentService = fixture.debugElement.injector.get(auth_service_1.AuthService);
    });
    it('Service injected via inject(...) and TestBed.get(...) should be the same instance', testing_1.inject([auth_service_1.AuthService], function (injectService) {
        expect(injectService).toBe(testBedService);
    }));
    it('Service injected via component should be and instance of MockAuthService', function () {
        expect(componentService instanceof MockAuthService).toBeTruthy();
    });
});
//# sourceMappingURL=login.component.spec.js.map