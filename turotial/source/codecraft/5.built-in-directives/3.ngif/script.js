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
var NgIfExampleComponent = /** @class */ (function () {
    function NgIfExampleComponent() {
        this.people = [
            {
                "name": "Douglas  Pace",
                "age": 35
            },
            {
                "name": "Mcleod  Mueller",
                "age": 32
            },
            {
                "name": "Day  Meyers",
                "age": 21
            },
            {
                "name": "Aguirre  Ellis",
                "age": 34
            },
            {
                "name": "Cook  Tyson",
                "age": 32
            }
        ];
    }
    NgIfExampleComponent = __decorate([
        core_1.Component({
            selector: 'ngif-example',
            template: "\n<h4>NgIf</h4>\n<ul *ngFor=\"let person of people\">\n  <li *ngIf=\"person.age < 30\">\n    {{ person.name }} ({{ person.age }})\n  </li>\n</ul>\n"
        })
    ], NgIfExampleComponent);
    return NgIfExampleComponent;
}());
var NgSwitchExampleComponent = /** @class */ (function () {
    function NgSwitchExampleComponent() {
        this.people = [
            {
                "name": "Douglas  Pace",
                "age": 35,
                "country": 'MARS'
            },
            {
                "name": "Mcleod  Mueller",
                "age": 32,
                "country": 'USA'
            },
            {
                "name": "Day  Meyers",
                "age": 21,
                "country": 'HK'
            },
            {
                "name": "Aguirre  Ellis",
                "age": 34,
                "country": 'UK'
            },
            {
                "name": "Cook  Tyson",
                "age": 32,
                "country": 'USA'
            }
        ];
    }
    NgSwitchExampleComponent = __decorate([
        core_1.Component({
            selector: 'ngswitch-example',
            template: "<h4>NgSwitch</h4>\n<ul *ngFor=\"let person of people\"\n    [ngSwitch]=\"person.country\">\n\n  <li *ngSwitchCase=\"'UK'\"\n      class=\"text-success\">\n    {{ person.name }} ({{ person.country }})\n  </li>\n  <li *ngSwitchCase=\"'USA'\"\n      class=\"text-primary\">\n    {{ person.name }} ({{ person.country }})\n  </li>\n  <li *ngSwitchCase=\"'HK'\"\n      class=\"text-danger\">\n    {{ person.name }} ({{ person.country }})\n  </li>\n  <li *ngSwitchDefault\n      class=\"text-warning\">\n    {{ person.name }} ({{ person.country }})\n  </li>\n</ul>"
        })
    ], NgSwitchExampleComponent);
    return NgSwitchExampleComponent;
}());
var DirectivesAppComponent = /** @class */ (function () {
    function DirectivesAppComponent() {
    }
    DirectivesAppComponent = __decorate([
        core_1.Component({
            selector: 'directives-app',
            template: "\n  <ngswitch-example></ngswitch-example>\n  <ngif-example></ngif-example>\n "
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
            declarations: [
                NgIfExampleComponent,
                NgSwitchExampleComponent,
                DirectivesAppComponent
            ],
            bootstrap: [DirectivesAppComponent]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map