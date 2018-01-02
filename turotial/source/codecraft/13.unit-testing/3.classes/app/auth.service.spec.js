"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_service_1 = require("./auth.service");
describe('Service: Auth', function () {
    var service;
    beforeEach(function () {
        service = new auth_service_1.AuthService();
    });
    afterEach(function () {
        service = null;
        localStorage.removeItem('token');
    });
    it('should return true from isAuthenticated when there is a token', function () {
        localStorage.setItem('token', '1234');
        expect(service.isAuthenticated()).toBeTruthy();
    });
    it('should return false from isAuthenticated when there is no token', function () {
        expect(service.isAuthenticated()).toBeFalsy();
    });
});
//# sourceMappingURL=auth.service.spec.js.map