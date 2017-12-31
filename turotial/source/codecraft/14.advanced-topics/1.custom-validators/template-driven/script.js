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
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var Signup = /** @class */ (function () {
    function Signup(firstName, lastName, email, password, language) {
        if (firstName === void 0) { firstName = ''; }
        if (lastName === void 0) { lastName = ''; }
        if (email === void 0) { email = ''; }
        if (password === void 0) { password = ''; }
        if (language === void 0) { language = ''; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.language = language;
    }
    return Signup;
}());
function emailDomainValidator(control) {
    var email = control.value;
    if (email && email.indexOf("@") != -1) {
        var _a = email.split("@"), _ = _a[0], domain = _a[1];
        if (domain !== "codecraft.tv") {
            return {
                emailDomain: {
                    parsedDomain: domain
                }
            };
        }
    }
    return null;
}
var EmailDomainValidator = /** @class */ (function () {
    function EmailDomainValidator() {
    }
    EmailDomainValidator = __decorate([
        core_1.Directive({
            selector: '[emailDomain][ngModel]',
            providers: [
                {
                    provide: forms_1.NG_VALIDATORS,
                    useValue: emailDomainValidator,
                    multi: true
                }
            ]
        })
    ], EmailDomainValidator);
    return EmailDomainValidator;
}());
var TemplateFormComponent = /** @class */ (function () {
    function TemplateFormComponent() {
        this.model = new Signup();
        this.langs = [
            'English',
            'French',
            'German',
        ];
    }
    TemplateFormComponent.prototype.onSubmit = function () {
        if (this.form.valid) {
            console.log("Form Submitted!");
            this.form.reset();
        }
    };
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", Object)
    ], TemplateFormComponent.prototype, "form", void 0);
    TemplateFormComponent = __decorate([
        core_1.Component({
            selector: 'template-form',
            template: "<!--suppress ALL -->\n<form novalidate\n      (ngSubmit)=\"onSubmit()\"\n      #f=\"ngForm\">\n\n\t<fieldset ngModelGroup=\"name\">\n\t\t<div class=\"form-group\"\n\t\t     [ngClass]=\"{\n        'has-danger': firstName.invalid && (firstName.dirty || firstName.touched),\n        'has-success': firstName.valid && (firstName.dirty || firstName.touched)\n   }\">\n\t\t\t<label>First Name</label>\n\t\t\t<input type=\"text\"\n\t\t\t       class=\"form-control\"\n\t\t\t       name=\"firstName\"\n\t\t\t       [(ngModel)]=\"model.firstName\"\n\t\t\t       required\n\t\t\t       #firstName=\"ngModel\">\n\t\t\t<div class=\"form-control-feedback\"\n\t\t\t     *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\">\n\t\t\t\t<p *ngIf=\"firstName.errors.required\">First name is required</p>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"form-group\"\n\t\t     [ngClass]=\"{\n        'has-danger': lastName.invalid && (lastName.dirty || lastName.touched),\n        'has-success': lastName.valid && (lastName.dirty || lastName.touched)\n   }\">\n\t\t\t<label>Last Name</label>\n\t\t\t<input type=\"text\"\n\t\t\t       class=\"form-control\"\n\t\t\t       name=\"lastName\"\n\t\t\t       [(ngModel)]=\"model.lastName\"\n\t\t\t       required\n\t\t\t       #lastName=\"ngModel\">\n\t\t\t<div class=\"form-control-feedback\"\n\t\t\t     *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\">\n\t\t\t\t<p *ngIf=\"lastName.errors.required\">Last name is required</p>\n\t\t\t</div>\n\t\t</div>\n\t</fieldset>\n\n\n\t<div class=\"form-group\"\n\t     [ngClass]=\"{\n        'has-danger': email.invalid && (email.dirty || email.touched),\n        'has-success': email.valid && (email.dirty || email.touched)\n   }\">\n\t\t<label>Email</label>\n\t\t<input type=\"email\"\n\t\t       class=\"form-control\"\n\t\t       name=\"email\"\n\t\t       [(ngModel)]=\"model.email\"\n\t\t       required\n\t\t       pattern=\"[^ @]*@[^ @]*\"\n\t\t       emailDomain\n\t\t       #email=\"ngModel\">\n\t\t<div class=\"form-control-feedback\"\n\t\t     *ngIf=\"email.errors && (email.dirty || email.touched)\">\n\t\t\t<p *ngIf=\"email.errors.required\">Email is required</p>\n\t\t\t<p *ngIf=\"email.errors.pattern\">Email must contain at least the @ character</p>\n\t\t\t<!--<p *ngIf=\"email.errors.emailDomain\">Email must be on the codecraft.tv domain</p>-->\n\t\t\t<p *ngIf=\"email.errors.emailDomain\">Email must be on the {{ email.errors.emailDomain.requiredDomain }} domain</p>\n\t\t</div>\n\t</div>\n\n\n\t<div class=\"form-group\"\n\t     [ngClass]=\"{\n        'has-danger': password.invalid && (password.dirty || password.touched),\n        'has-success': password.valid && (password.dirty || password.touched)\n  }\">\n\t\t<label>Password</label>\n\t\t<input type=\"password\"\n\t\t       class=\"form-control\"\n\t\t       name=\"password\"\n\t\t       [(ngModel)]=\"model.password\"\n\t\t       required\n\t\t       minlength=\"8\"\n\t\t       #password=\"ngModel\">\n\t\t<div class=\"form-control-feedback\"\n\t\t     *ngIf=\"password.errors && (password.dirty || password.touched)\">\n\t\t\t<p *ngIf=\"password.errors.required\">Password is required</p>\n\t\t\t<p *ngIf=\"password.errors.minlength\">Password must be at least 8 characters long</p>\n\t\t</div>\n\t</div>\n\n\t<div class=\"form-group\">\n\t\t<label>Language</label>\n\t\t<select class=\"form-control\"\n\t\t        name=\"language\"\n\t\t        [(ngModel)]=\"model.language\">\n\t\t\t<option value=\"\">Please select a language</option>\n\t\t\t<option *ngFor=\"let lang of langs\"\n\t\t\t        [value]=\"lang\">{{lang}}\n\t\t\t</option>\n\t\t</select>\n\t</div>\n\n\t<button type=\"submit\"\n\t        class=\"btn btn-primary\"\n\t        [disabled]=\"f.invalid\">Submit\n\t</button>\n\n\t<pre>{{f.value | json}}</pre>\n</form>  \n"
        })
    ], TemplateFormComponent);
    return TemplateFormComponent;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<template-form></template-form>"
        })
    ], AppComponent);
    return AppComponent;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule
            ],
            declarations: [
                AppComponent,
                TemplateFormComponent,
                EmailDomainValidator
            ],
            bootstrap: [
                AppComponent
            ]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map