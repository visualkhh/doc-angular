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
var PipeBuiltinsComponent = /** @class */ (function () {
    function PipeBuiltinsComponent() {
        this.dateVal = new Date();
        this.jsonVal = { moo: 'foo', goo: { too: 'new' } };
    }
    PipeBuiltinsComponent = __decorate([
        core_1.Component({
            selector: 'pipe-builtins',
            template: "<div class=\"card card-block\">\n  <h4 class=\"card-title\">Currency</h4>\n  <div class=\"card-text\">\n    <p ngNonBindable>{{ 1234.56 | currency:'CAD' }}</p>\n    <p>{{ 1234.56 | currency:\"CAD\" }}</p>\n    \n    <p ngNonBindable>{{ 1234.56 | currency:'CAD':'code' }}</p>\n    <p>{{ 1234.56 | currency:'CAD':'code'}}</p>\n    \n    <p ngNonBindable>{{ 1234.56 | currency:'CAD':'symbol' }}</p>\n    <p>{{ 1234.56 | currency:'CAD':'symbol'}}</p>\n    \n    <p ngNonBindable>{{ 1234.56 | currency:'CAD':'symbol-narrow' }}</p>\n    <p>{{ 1234.56 | currency:'CAD':'symbol-narrow'}}</p>        \n  </div>\n</div>\n\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">Date</h4>\n  <div class=\"card-text\">\n    <p ngNonBindable>{{ dateVal | date: 'shortTime' }}</p>\n    <p>{{ dateVal | date: 'shortTime' }}</p>\n\n    <p ngNonBindable>{{ dateVal | date:'fullDate' }}</p>\n    <p>{{ dateVal | date: 'fullDate' }}</p>\n\n    <p ngNonBindable>{{ dateVal | date: 'shortTime' }}</p>\n    <p>{{ dateVal | date: 'shortTime' }}</p>\n\n    <p ngNonBindable>{{ dateVal | date: 'd/M/y' }}</p>\n    <p>{{ dateVal | date: 'd/M/y' }}</p>\n  </div>\n</div>\n\n<div class=\"card card-block\">\n  <div class=\"card-text\">\n    <h4 class=\"card-title\">DecimalPipe</h4>\n    <p ngNonBindable>{{ 3.14159265 | number: '3.1-2' }}</p>\n    <p>{{ 3.14159265 | number: '3.1-2' }}</p>\n\n    <p ngNonBindable>{{ 3.14159265 | number: '1.4-4' }}</p>\n    <p>{{ 3.14159265 | number: '1.4-4' }}</p>\n  </div>\n</div>\n\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">JsonPipe</h4>\n  <div class=\"card-text\">\n    <p ngNonBindable>{{ jsonVal }}</p>\n    <p>{{ jsonVal }}</p>\n    \n    <p ngNonBindable>{{ jsonVal | json }}</p>\n    <p>{{ jsonVal | json }}</p>\n  </div>\n</div>\n\n\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">LowerCasePipe</h4>\n  <div class=\"card-text\">\n    <p ngNonBindable>{{ 'ASIM' | lowercase }}</p>\n    <p>{{ 'ASIM' | lowercase }}</p>\n  </div>\n</div>\n\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">UpperCasePipe</h4>\n  <div class=\"card-text\">\n    <p ngNonBindable>{{ 'asim' | uppercase }}</p>\n    <p>{{ 'asim' | uppercase }}</p>\n  </div>\n</div>\n\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">PercentPipe</h4>\n  <div class=\"card-text\">\n    <p ngNonBindable>{{ 0.123456 | percent }}</p>\n    <p>{{ 0.123456 | percent }}</p>\n\n    <p ngNonBindable>{{ 0.123456 | percent: '2.1-2' }}</p>\n    <p>{{ 0.123456 | percent: '2.1-2' }}</p>\n\n    <p ngNonBindable>{{ 42 | percent: '10.4-4' }}</p>\n    <p>{{ 0.123456 | percent : \"10.4-4\" }}</p>\n  </div>\n</div>\n\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">SlicePipe</h4>\n  <div class=\"card-text\">\n    <p ngNonBindable>{{ [1,2,3,4,5,6] | slice:1:3 }}</p>\n    <p>{{ [1,2,3,4,5,6] | slice:1:3 }}</p>\n\n    <p ngNonBindable>{{ [1,2,3,4,5,6] | slice:2 }}</p>\n    <p>{{ [1,2,3,4,5,6] | slice:2 }}</p>\n\n    <p ngNonBindable>{{ [1,2,3,4,5,6] | slice:2:-1 }}</p>\n    <p>{{ [1,2,3,4,5,6] | slice:2:-1 }}</p>\n\n    <pre ngNonBindable>   \n&lt;ul&gt;\n  &lt;li *ngFor=&quot;let v of [1,2,3,4,5,6] | slice:2:-1&quot;&gt;\n    {{v}}\n  &lt;/li&gt;\n&lt;/ul&gt;\n    </pre>    \n\n    <ul>\n      <li *ngFor=\"let v of [1,2,3,4,5,6] | slice:2:-1\">\n        {{v}}\n      </li>\n    </ul>\n  </div>\n</div>\n\n "
        })
    ], PipeBuiltinsComponent);
    return PipeBuiltinsComponent;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n<pipe-builtins></pipe-builtins>\n "
        })
    ], AppComponent);
    return AppComponent;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [AppComponent,
                PipeBuiltinsComponent
            ],
            bootstrap: [AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map