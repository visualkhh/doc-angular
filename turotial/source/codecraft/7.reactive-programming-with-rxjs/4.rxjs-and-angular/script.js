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
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var forms_1 = require("@angular/forms");
require("rxjs/Rx");
var FormAppComponent = /** @class */ (function () {
    /* Observable Solution */
    function FormAppComponent(fb) {
        var _this = this;
        this.comment = new forms_1.FormControl("", forms_1.Validators.required);
        this.name = new forms_1.FormControl("", forms_1.Validators.required);
        this.email = new forms_1.FormControl("", [
            forms_1.Validators.required,
            forms_1.Validators.pattern("[^ @]*@[^ @]*")
        ]);
        this.form = fb.group({
            "comment": this.comment,
            "name": this.name,
            "email": this.email
        });
        this.form.valueChanges
            .filter(function (data) { return _this.form.valid; })
            .map(function (data) {
            data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
            return data;
        })
            .map(function (data) {
            data.lastUpdateTS = new Date();
            return data;
        })
            .subscribe(function (data) { return console.log(JSON.stringify(data)); });
    }
    /* None Observable Solution */
    // constructor(fb: FormBuilder) {
    //   this.form = fb.group({
    //     "comment": this.comment,
    //     "name": this.name,
    //     "email": this.email
    //   });
    //   this.form.valueChanges
    //       .subscribe( data => {
    //         if (this.form.valid) {
    //           data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
    //           data.lastUpdateTS = new Date();
    //           console.log(JSON.stringify(data))
    //         }
    //       });
    // }
    FormAppComponent.prototype.onSubmit = function () {
        console.log("Form submitted!");
    };
    FormAppComponent = __decorate([
        core_1.Component({
            selector: 'form-app',
            template: "<form [formGroup]=\"form\"\n      (ngSubmit)=\"onSubmit()\">\n      \n  <!-- Output comment -->\n  <div class=\"card card-block\">\n    <pre class=\"card-text\">{{ form.value.comment }}</pre>\n  </div>\n  <p class=\"small\">{{ form.value.lastUpdateTS }}</p>\n\n  <!-- Comment text area -->\n  <div class=\"form-group\">\n    <label for=\"comment\">Comment</label>\n    <textarea class=\"form-control\"\n              formControlName=\"comment\"\n              rows=\"3\"></textarea>\n    <small class=\"form-text text-muted\">\n           <span>{{ 100 - form.value.comment.length }}</span> characters left\n    </small>\n  </div>\n\n  <!-- Name input -->\n  <div class=\"form-group\">\n    <label for=\"name\">Name</label>\n    <input type=\"text\"\n           class=\"form-control\"\n           formControlName=\"name\"\n           placeholder=\"Enter name\">\n  </div>\n\n  <!-- Email input -->\n  <div class=\"form-group\">\n    <label for=\"email\">Email address</label>\n    <input type=\"email\"\n           class=\"form-control\"\n           formControlName=\"email\"\n           placeholder=\"Enter email\">\n    <small class=\"form-text text-muted\">\n           We'll never share your email with anyone else.\n    </small>\n  </div>\n\n  <button type=\"submit\"\n          class=\"btn btn-primary\"\n          [disabled]=\"!form.valid\">Submit\n  </button>\n</form>  \n "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object])
    ], FormAppComponent);
    return FormAppComponent;
    var _a;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n<form-app></form-app>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.ReactiveFormsModule],
            declarations: [AppComponent, FormAppComponent],
            bootstrap: [AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map