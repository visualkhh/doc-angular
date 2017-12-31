"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var login_component_1 = require("./login.component");
var auth_service_1 = require("./auth.service");
describe('Component: Login', function () {
    var component;
    var service;
    var spy;
    beforeEach(function () {
        service = new auth_service_1.AuthService();
        component = new login_component_1.LoginComponent(service);
    });
    afterEach(function () {
        service = null;
        component = null;
    });
    it('canLogin returns false when the user is not authenticated', function () {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(false);
        expect(component.needsLogin()).toBeTruthy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });
    it('canLogin returns false when the user is not authenticated', function () {
        spy = spyOn(service, 'isAuthenticated').and.returnValue(true);
        expect(component.needsLogin()).toBeFalsy();
        expect(service.isAuthenticated).toHaveBeenCalled();
    });
});
//# sourceMappingURL=login.component.spec.js.map