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
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
// import 'rxjs/add/operator/toPromise';
require("rxjs/Rx");
var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.apiRoot = "http://httpbin.org";
    }
    AppComponent.prototype.doGET = function () {
        console.log("GET");
        var url = this.apiRoot + "/get";
        var search = new http_1.URLSearchParams();
        search.set('foo', 'moo');
        search.set('limit', 25);
        this.http.get(url, { search: search }).subscribe(function (res) { return console.log(res.json()); });
    };
    AppComponent.prototype.doPOST = function () {
        console.log("POST");
        var url = this.apiRoot + "/post";
        var search = new http_1.URLSearchParams();
        search.set('foo', 'moo');
        search.set('limit', 25);
        this.http.post(url, { moo: "foo", goo: "loo" }, { search: search }).subscribe(function (res) { return console.log(res.json()); });
    };
    AppComponent.prototype.doPUT = function () {
        console.log("PUT");
        var url = this.apiRoot + "/put";
        var search = new http_1.URLSearchParams();
        search.set('foo', 'moo');
        search.set('limit', 25);
        this.http.put(url, { moo: "foo", goo: "loo" }, { search: search }).subscribe(function (res) { return console.log(res.json()); });
    };
    AppComponent.prototype.doDELETE = function () {
        console.log("DELETE");
        var url = this.apiRoot + "/delete";
        var search = new http_1.URLSearchParams();
        search.set('foo', 'moo');
        search.set('limit', 25);
        this.http.delete(url, { search: search }).subscribe(function (res) { return console.log(res.json()); });
    };
    AppComponent.prototype.doGETAsPromise = function () {
        console.log("GET AS PROMISE");
        var url = this.apiRoot + "/get";
        this.http.get(url)
            .toPromise()
            .then(function (res) { return console.log(res.json()); });
    };
    AppComponent.prototype.doGETAsPromiseError = function () {
        console.log("GET AS PROMISE ERROR");
        var url = this.apiRoot + "/post";
        this.http.get(url)
            .toPromise()
            .then(function (res) { return console.log(res.json()); }, function (msg) { return console.error("Error: " + msg.status + " " + msg.statusText); });
    };
    AppComponent.prototype.doGETAsObservableError = function () {
        console.log("GET AS OBSERVABLE ERROR");
        var url = this.apiRoot + "/post";
        this.http.get(url).subscribe(function (res) { return console.log(res.json()); }, function (msg) { return console.error("Error: " + msg.status + " " + msg.statusText); });
    };
    AppComponent.prototype.doGETWithHeaders = function () {
        console.log("GET WITH HEADERS");
        var headers = new http_1.Headers();
        headers.append('Authorization', btoa('username:password'));
        var opts = new http_1.RequestOptions();
        opts.headers = headers;
        var url = this.apiRoot + "/get";
        this.http.get(url, opts).subscribe(function (res) { return console.log(res.json()); }, function (msg) { return console.error("Error: " + msg.status + " " + msg.statusText); });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n <div class=\"row\">\n  <div class=\"m-t-1\">\n  \t<button class=\"btn btn-primary\" (click)=\"doGET()\">GET</button>\n  \t<button class=\"btn btn-primary\" (click)=\"doPOST()\">POST</button>\n  \t<button class=\"btn btn-primary\" (click)=\"doPUT()\">PUT</button>\n  \t<button class=\"btn btn-primary\" (click)=\"doDELETE()\">DELETE</button>\n\t</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"m-t-1\">\n  \t<button class=\"btn btn-secondary\" (click)=\"doGETAsPromise()\">As Promise</button>\n  \t<button class=\"btn btn-secondary\" (click)=\"doGETAsPromiseError()\">Error as Promise</button>\n  \t<button class=\"btn btn-secondary\" (click)=\"doGETAsObservableError()\">Error as Observable</button>\n\t</div>\n</div>\n\n<div class=\"row\">\n  <div class=\"m-t-1\">\n  \t<button class=\"btn btn-danger\" (click)=\"doGETWithHeaders()\">With Headers</button>\n\t</div>\n</div>\n "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [AppComponent],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map