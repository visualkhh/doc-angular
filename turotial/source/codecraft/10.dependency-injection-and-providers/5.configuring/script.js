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
var OtherService = /** @class */ (function () {
    function OtherService() {
    }
    ;
    return OtherService;
}());
// This version doesn't work as Angular doesn't know it should be injecting otherService
// class SimpleService {
//   otherService: OtherService;
//   constructor(otherService: OtherService) {
//     this.otherService = otherService;
//   };
// }
// This version works but we have to decorate every parameter to our constructor with @Inject
// class SimpleService {
//   otherService: OtherService;
//
//   constructor(@Inject(OtherService) otherService: OtherService) {
//     this.otherService = otherService;
//   };
//
// }
// This works because @Injectable automatically injects every parameter to the constructor as long as that parameter has a type
var SimpleService = /** @class */ (function () {
    function SimpleService(otherService) {
        this.otherService = otherService;
    }
    ;
    SimpleService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [OtherService])
    ], SimpleService);
    return SimpleService;
}());
// This DOESN'T work because the otherService parameter doesn't have a type
// @Injectable
// class SimpleService {
//   otherService: OtherService;
//
//   constructor(otherService: any) {
//     this.otherService = otherService;
//   };
// }
var SimpleComponent = /** @class */ (function () {
    function SimpleComponent(simpleService) {
        this.simpleService = simpleService;
    }
    SimpleComponent = __decorate([
        core_1.Component({
            selector: 'simple',
            template: "<p>Simple is as simple does</p>",
        }),
        __metadata("design:paramtypes", [SimpleService])
    ], SimpleComponent);
    return SimpleComponent;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: '<simple></simple>'
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
            declarations: [AppComponent, SimpleComponent],
            bootstrap: [AppComponent],
            providers: [OtherService, SimpleService]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map