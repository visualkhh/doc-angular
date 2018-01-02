"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.isAuthenticated = function () {
        return !!localStorage.getItem('token');
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map