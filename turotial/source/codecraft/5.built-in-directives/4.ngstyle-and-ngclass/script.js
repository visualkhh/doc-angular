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
var NgStyleExampleComponent = /** @class */ (function () {
    function NgStyleExampleComponent() {
        this.people = [
            {
                "name": "Douglas  Pace",
                "country": 'UK'
            },
            {
                "name": "Mcleod  Mueller",
                "country": 'USA'
            },
            {
                "name": "Day  Meyers",
                "country": 'HK'
            },
            {
                "name": "Aguirre  Ellis",
                "country": 'UK'
            },
            {
                "name": "Cook  Tyson",
                "country": 'USA'
            }
        ];
    }
    NgStyleExampleComponent.prototype.getColor = function (country) {
        switch (country) {
            case 'UK':
                return 'green';
            case 'USA':
                return 'blue';
            case 'HK':
                return 'red';
        }
    };
    NgStyleExampleComponent = __decorate([
        core_1.Component({
            selector: 'ngstyle-example',
            template: "<h4>NgStyle</h4>\n<ul *ngFor=\"let person of people\">\n  <li [ngStyle]=\"{'font-size.px':24}\"\n      [style.color]=\"getColor(person.country)\">\n    {{ person.name }} ({{ person.country }})\n  </li>\n</ul>\n "
        })
    ], NgStyleExampleComponent);
    return NgStyleExampleComponent;
}());
var NgClassExampleComponent = /** @class */ (function () {
    function NgClassExampleComponent() {
        this.people = [
            {
                "name": "Douglas  Pace",
                "age": 35,
                "country": 'UK'
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
    NgClassExampleComponent = __decorate([
        core_1.Component({
            selector: 'ngclass-example',
            template: "<h4>NgClass</h4>\n<ul *ngFor=\"let person of people\">\n  <li [ngClass]=\"{\n  'text-success':person.country === 'UK',\n  'text-primary':person.country === 'USA',\n  'text-danger':person.country === 'HK'\n  }\">\n  {{ person.name }} ({{ person.country }})\n  </li>\n</ul>\n\n<!--\n<ul *ngFor=\"let person of people\">\n  <li [class.text-success]=\"person.country === 'UK'\"\n      [class.text-primary]=\"person.country === 'USA'\"\n      [class.text-danger]=\"person.country === 'HK'\">\n    {{ person.name }} ({{ person.country }})\n  </li>\n</ul>\n-->\n "
        })
    ], NgClassExampleComponent);
    return NgClassExampleComponent;
}());
var DirectivesAppComponent = /** @class */ (function () {
    function DirectivesAppComponent() {
    }
    DirectivesAppComponent = __decorate([
        core_1.Component({
            selector: 'directives-app',
            template: "\n<ngclass-example></ngclass-example>\n<ngstyle-example></ngstyle-example>"
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
                NgClassExampleComponent,
                NgStyleExampleComponent,
                DirectivesAppComponent
            ],
            bootstrap: [DirectivesAppComponent]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map