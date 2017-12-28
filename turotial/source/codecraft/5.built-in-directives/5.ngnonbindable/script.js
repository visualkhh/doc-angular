"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var NgNonBindableExampleComponent = /** @class */ (function () {
    function NgNonBindableExampleComponent() {
    }
    NgNonBindableExampleComponent = __decorate([
        core_1.Component({
            selector: 'ngnonbindable-example',
            template: "<h4>NgNonBindable</h4>\n<div>\n  To render the name variable we use this syntax\n  <pre ngNonBindable>{{ name }}</pre>\n</div>  \n "
        })
    ], NgNonBindableExampleComponent);
    return NgNonBindableExampleComponent;
}());
var DirectivesAppComponent = /** @class */ (function () {
    function DirectivesAppComponent() {
    }
    DirectivesAppComponent = __decorate([
        core_1.Component({
            selector: 'directives-app',
            template: "<ngnonbindable-example></ngnonbindable-example>"
        })
    ], DirectivesAppComponent);
    return DirectivesAppComponent;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [NgNonBindableExampleComponent, DirectivesAppComponent],
            bootstrap: [DirectivesAppComponent],
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map