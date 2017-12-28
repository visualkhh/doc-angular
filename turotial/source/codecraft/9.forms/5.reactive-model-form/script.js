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
require("rxjs/Rx");
var ReactiveModelFormComponent = /** @class */ (function () {
    function ReactiveModelFormComponent() {
        this.searches = [];
    }
    ReactiveModelFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchField = new forms_1.FormControl();
        this.searchField.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe(function (term) {
            _this.searches.push(term);
        });
    };
    ReactiveModelFormComponent = __decorate([
        core_1.Component({
            selector: 'reactive-model-form',
            template: "<input type=\"search\"\n       class=\"form-control\"\n       placeholder=\"Please enter search term\"\n       [formControl]=\"searchField\">\n<hr/>\n<ul>\n  <li *ngFor=\"let search of searches\">{{ search }}</li>\n</ul>\n"
        })
    ], ReactiveModelFormComponent);
    return ReactiveModelFormComponent;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "<reactive-model-form></reactive-model-form>"
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
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                AppComponent,
                ReactiveModelFormComponent
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