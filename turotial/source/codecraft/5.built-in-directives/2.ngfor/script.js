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
var NgForExampleComponent = /** @class */ (function () {
    function NgForExampleComponent() {
        this.people = [
            {
                "name": "Douglas  Pace"
            },
            {
                "name": "Mcleod  Mueller"
            },
            {
                "name": "Day  Meyers"
            },
            {
                "name": "Aguirre  Ellis"
            },
            {
                "name": "Cook  Tyson"
            }
        ];
    }
    NgForExampleComponent = __decorate([
        core_1.Component({
            selector: 'ngfor-example',
            template: "<h4>NgFor</h4>\n<ul>\n  <li *ngFor=\"let person of people; let i = index\">\n    {{ i + 1 }} - {{ person.name }}\n  </li>\n</ul>\n "
        })
    ], NgForExampleComponent);
    return NgForExampleComponent;
}());
var NgForGroupedExampleComponent = /** @class */ (function () {
    function NgForGroupedExampleComponent() {
        this.peopleByCountry = [
            {
                'country': 'UK',
                'people': [
                    {
                        "name": "Douglas  Pace"
                    },
                    {
                        "name": "Mcleod  Mueller"
                    },
                ]
            },
            {
                'country': 'US',
                'people': [
                    {
                        "name": "Day  Meyers"
                    },
                    {
                        "name": "Aguirre  Ellis"
                    },
                    {
                        "name": "Cook  Tyson"
                    }
                ]
            }
        ];
    }
    NgForGroupedExampleComponent = __decorate([
        core_1.Component({
            selector: 'ngfor-grouped-example',
            template: "<h4>NgFor (grouped)</h4>\n<ul *ngFor=\"let group of peopleByCountry\">\n  <li>{{ group.country }}</li>\n  <ul>\n    <li *ngFor=\"let person of group.people\">\n      {{ person.name }}\n    </li>\n  </ul>\n</ul>\n "
        })
    ], NgForGroupedExampleComponent);
    return NgForGroupedExampleComponent;
}());
var DirectivesAppComponent = /** @class */ (function () {
    function DirectivesAppComponent() {
    }
    DirectivesAppComponent = __decorate([
        core_1.Component({
            selector: 'directives-app',
            template: "\n  <ngfor-grouped-example></ngfor-grouped-example>\n  <ngfor-example></ngfor-example>\n "
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
                NgForExampleComponent,
                NgForGroupedExampleComponent,
                DirectivesAppComponent
            ],
            bootstrap: [DirectivesAppComponent],
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map