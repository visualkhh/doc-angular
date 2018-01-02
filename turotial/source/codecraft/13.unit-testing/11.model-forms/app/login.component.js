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
var forms_1 = require("@angular/forms");
var User = /** @class */ (function () {
    function User(email, password) {
        this.email = email;
        this.password = password;
    }
    return User;
}());
exports.User = User;
var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb) {
        this.fb = fb;
        this.loggedIn = new core_1.EventEmitter();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            email: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.pattern("[^ @]*@[^ @]*")
                ]],
            password: ['', [
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(8)
                ]],
        });
    };
    LoginComponent.prototype.login = function () {
        console.log("Login " + this.form.value);
        if (this.form.valid) {
            this.loggedIn.emit(new User(this.form.value.email, this.form.value.password));
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], LoginComponent.prototype, "loggedIn", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: "\n<form (ngSubmit)=\"login()\"\n      [formGroup]=\"form\">\n  <label>Email</label>\n  <input type=\"email\"\n         formControlName=\"email\">\n  <label>Password</label>\n  <input type=\"password\"\n         formControlName=\"password\">\n  <button type=\"submit\">Login</button>\n</form>\n"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map