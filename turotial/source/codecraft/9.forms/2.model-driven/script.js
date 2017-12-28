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
        this.myform = new forms_1.FormGroup({
            name: new forms_1.FormGroup({
                firstName: new forms_1.FormControl('', forms_1.Validators.required),
                lastName: new forms_1.FormControl('', forms_1.Validators.required),
            }),
            email: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern("[^ @]*@[^ @]*")
            ]),
            password: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.minLength(8)
            ]),
            language: new forms_1.FormControl()
        });
    };
    ModelFormComponent = __decorate([
        core_1.Component({
            selector: 'model-form',
            template: "<!--suppress ALL -->\n<form novalidate\n      [formGroup]=\"myform\">\n\n  <fieldset formGroupName=\"name\">\n    <div class=\"form-group\">\n      <label>First Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             formControlName=\"firstName\">\n    </div>\n\n    <div class=\"form-group\">\n      <label>Last Name</label>\n      <input type=\"text\"\n             class=\"form-control\"\n             formControlName=\"lastName\">\n    </div>\n  </fieldset>\n\n\n  <div class=\"form-group\">\n    <label>Email</label>\n    <input type=\"email\"\n           class=\"form-control\"\n           formControlName=\"email\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Password</label>\n    <input type=\"password\"\n           class=\"form-control\"\n           formControlName=\"password\">\n  </div>\n\n  <div class=\"form-group\">\n    <label>Language</label>\n    <select class=\"form-control\"\n            formControlName=\"language\">\n      <option value=\"\">Please select a language</option>\n      <option *ngFor=\"let lang of langs\"\n              [value]=\"lang\">{{lang}}\n      </option>\n    </select>\n  </div>\n\n  <pre>{{myform.value | json}}</pre>\n</form>  \n"
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