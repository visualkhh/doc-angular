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
var Rx_1 = require("rxjs/Rx");
var AsyncPipeComponent = /** @class */ (function () {
    function AsyncPipeComponent() {
        this.subscription = null;
        this.promise = this.getPromise();
        this.observable = this.getObservable();
        this.subscribeObservable();
    }
    AsyncPipeComponent.prototype.getObservable = function () {
        return Rx_1.Observable
            .interval(1000)
            .take(10)
            .map(function (v) { return v * v; });
    };
    // AsyncPipe subscribes to the observable automatically
    AsyncPipeComponent.prototype.subscribeObservable = function () {
        var _this = this;
        this.subscription = this.getObservable()
            .subscribe(function (v) { return _this.observableData = v; });
    };
    AsyncPipeComponent.prototype.getPromise = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve("Promise complete!"); }, 3000);
        });
    };
    // AsyncPipe unsubscribes from the observable automatically
    AsyncPipeComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AsyncPipeComponent = __decorate([
        core_1.Component({
            selector: 'async-pipe',
            template: "\n <div class=\"card card-block\">\n  <h4 class=\"card-title\">AsyncPipe</h4>\n  \n  <p class=\"card-text\" ngNonBindable>{{ promise | async }}  </p>\n  <p class=\"card-text\">{{ promise | async }}  </p>\n\n  <p class=\"card-text\" ngNonBindable>{{ observable | async }}  </p>\n  <p class=\"card-text\">{{ observable | async }}</p>\n \n  <p class=\"card-text\" ngNonBindable>{{ observableData }}  </p>\n  <p class=\"card-text\">{{ observableData }}</p> \n </div> \n  "
        }),
        __metadata("design:paramtypes", [])
    ], AsyncPipeComponent);
    return AsyncPipeComponent;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.imageUrl = "";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n  <async-pipe></async-pipe>\n "
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
                AsyncPipeComponent
            ],
            bootstrap: [AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map