"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.loggedIn = new core_1.EventEmitter();
        this.enabled = true;
    }
    LoginComponent.prototype.login = function (email, password) {
        console.log("Login " + email + " " + password);
        if (email && password) {
            console.log("Emitting");
            this.loggedIn.emit(new User(email, password));
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "loggedIn", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "enabled", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: "\n<form>\n  <label>Email</label>\n  <input type=\"email\"\n         #email>\n  <label>Password</label>\n  <input type=\"password\"\n         #password>\n  <button type=\"button\"\n          (click)=\"login(email.value, password.value)\"\n          [disabled]=\"!enabled\">Login\n  </button>\n</form>\n"
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map