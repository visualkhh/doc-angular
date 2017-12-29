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
var SimpleService = /** @class */ (function () {
    function SimpleService() {
    }
    return SimpleService;
}());
var ChildComponent = /** @class */ (function () {
    function ChildComponent(service) {
        this.service = service;
    }
    ChildComponent = __decorate([
        core_1.Component({
            selector: 'child',
            template: "\n <div class=\"child\"> \n   <p>Child</p>\n   {{ service.value }}\n</div>\n ",
            styles: ["\n  .child {\n    background-color: #239CDE;\n    padding: 10px;\n  }\n "],
        }),
        __metadata("design:paramtypes", [SimpleService])
    ], ChildComponent);
    return ChildComponent;
}());
var ParentComponent = /** @class */ (function () {
    function ParentComponent(service) {
        this.service = service;
    }
    ParentComponent = __decorate([
        core_1.Component({
            selector: 'parent',
            template: "\n <div class=\"parent\"> \n   <p>Parent</p>\n   <form novalidate>\n  \t\t\t<div class=\"form-group\">\n  \t\t\t<input type=\"text\"\n  \t\t\t       class=\"form-control\"\n  \t\t\t       name=\"value\"\n  \t\t\t       [(ngModel)]=\"service.value\">\n  \t\t</div>\n  </form>\n  <ng-content></ng-content>\n</div>\n ",
            styles: ["\n  .parent {\n    background-color: #D1E751;\n    padding: 10px;\n  }\n "],
            viewProviders: [SimpleService]
            // providers: [SimpleService]
        }),
        __metadata("design:paramtypes", [SimpleService])
    ], ParentComponent);
    return ParentComponent;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n <div class=\"row\">\n\t<div class=\"col-xs-6\">\n\t\t<parent><child></child></parent>\n\t</div>\n\t<div class=\"col-xs-6\">\n\t\t<parent><child></child></parent>\n\t</div>\n</div>\n "
        })
    ], AppComponent);
    return AppComponent;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [AppComponent, ParentComponent, ChildComponent],
            bootstrap: [AppComponent],
            providers: [SimpleService]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map