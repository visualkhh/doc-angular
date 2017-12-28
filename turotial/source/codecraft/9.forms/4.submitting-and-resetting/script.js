"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var ModelFormComponent = /** @class */ (function () {
    function ModelFormComponent() {
        this.langs = [
            'English',
            'French',
            'German',
        ];
    }
    ModelFormComponent.prototype.ngOnInit = function () {
        this.createFormControls();
        this.createForm();
    };
    ModelFormComponent.prototype.createFormControls = function () {
        this.firstName = new forms_1.FormControl('', forms_1.Validators.required);
        this.lastName = new forms_1.FormControl('', forms_1.Validators.required);
        this.email = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.pattern("[^ @]*@[^ @]*")
        ]);
        this.password = new forms_1.FormControl('', [
            forms_1.Validators.required,
            forms_1.Validators.minLength(8)
        ]);
        this.language = new forms_1.FormControl('');
    };
    ModelFormComponent.prototype.createForm = function () {
        this.myform = new forms_1.FormGroup({
            name: new forms_1.FormGroup({
                firstName: this.firstName,
                lastName: this.lastName,
            }),
            email: this.email,
            password: this.password,
            language: this.language
        });
    };
    ModelFormComponent.prototype.onSubmit = function () {
        if (this.myform.valid) {
            console.log("Form Submitted!");
            this.myform.reset();
        }
    };
    ModelFormComponent = __decorate([
        core_1.Component({
            selector: 'model-form',
            template: "<form novalidate\n      [formGroup]=\"myform\"\n      (ngSubmit)=\"onSubmit()\">\n\n  <fieldset formGroupName=\"name\">\n    <div class=\"form-group\"\n         [ngClass]=\"{\n        'has-danger': firstName.invalid && (firstName.dirty || firstName.touched),\n        'has-success': firstName.valid && (firstName.dirty || firstName.touched)\n      }\">\n      <label>First Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             formControlName=\"firstName\"\n             required>\n      <div class=\"form-control-feedback\"\n           *ngIf=\"firstName.errors && (firstName.dirty || firstName.touched)\">\n        <p *ngIf=\"firstName.errors.required\">Last Name is required</p>\n      </div>\n\n      <!--\n        <pre>Valid? {{ myform.controls.name.controls.firstName.valid }}</pre>\n        <pre>Dirty? {{ myform.controls.name.controls.firstName.dirty }}</pre>\n      -->\n    </div>\n\n    <div class=\"form-group\"\n         [ngClass]=\"{\n        'has-danger': lastName.invalid && (lastName.dirty || lastName.touched),\n        'has-success': lastName.valid && (lastName.dirty || lastName.touched)\n      }\">\n      <label>Last Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             formControlName=\"lastName\"\n             required>\n      <div class=\"form-control-feedback\"\n           *ngIf=\"lastName.errors && (lastName.dirty || lastName.touched)\">\n        <p *ngIf=\"lastName.errors.required\">Last Name is required</p>\n      </div>\n    </div>\n  </fieldset>\n\n\n  <div class=\"form-group\"\n       [ngClass]=\"{\n        'has-danger': email.invalid && (email.dirty || email.touched),\n        'has-success': email.valid && (email.dirty || email.touched)\n   }\">\n    <label>Email</label>\n    <input type=\"email\"\n           class=\"form-control\"\n           formControlName=\"email\"\n           required>\n    <div class=\"form-control-feedback\"\n         *ngIf=\"email.errors && (email.dirty || email.touched)\">\n      <p *ngIf=\"email.errors.required\">Email is required</p>\n      <p *ngIf=\"password.errors.pattern\">The email address must contain at least the @ character</p>\n    </div>\n\n    <!--\n      <pre>Valid? {{ myform.controls.email.valid }}</pre>\n      <pre>Dirty? {{ myform.controls.email.dirty }}</pre>\n    -->\n\n  </div>\n\n  <div class=\"form-group\"\n       [ngClass]=\"{\n        'has-danger': password.invalid && (password.dirty || password.touched),\n        'has-success': password.valid && (password.dirty || password.touched)\n   }\">\n    <label>Password</label>\n    <input type=\"password\"\n           class=\"form-control\"\n           formControlName=\"password\"\n           required>\n    <div class=\"form-control-feedback\"\n         *ngIf=\"password.errors && (password.dirty || password.touched)\">\n      <p *ngIf=\"password.errors.required\">Password is required</p>\n      <p *ngIf=\"password.errors.minlength\">Password must be 8 characters long, we need another {{password.errors.minlength.requiredLength - password.errors.minlength.actualLength}} characters </p>\n    </div>\n  </div>\n\n  <!-- \n    <pre>{{ language.errors | json }}</pre>\n  -->\n\n  <div class=\"form-group\"\n       [ngClass]=\"{\n        'has-danger': language.invalid && (language.dirty || language.touched),\n        'has-success': language.valid && (language.dirty || language.touched)\n      }\">\n    <label>Language</label>\n    <select class=\"form-control\"\n            formControlName=\"language\">\n      <option value=\"\">Please select a language</option>\n      <option *ngFor=\"let lang of langs\"\n              [value]=\"lang\">{{lang}}\n      </option>\n    </select>\n  </div>\n\n  <button type=\"submit\"\n          class=\"btn btn-primary\">Submit\n  </button>\n\n  <pre>{{myform.value | json}}</pre>\n</form>"
        })
    ], ModelFormComponent);
    return ModelFormComponent;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<model-form></model-form>"
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
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                AppComponent,
                ModelFormComponent
            ],
            bootstrap: [
                AppComponent
            ],
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map