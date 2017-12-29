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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var SearchItem = /** @class */ (function () {
    function SearchItem(track, artist, link, thumbnail, artistId) {
        this.track = track;
        this.artist = artist;
        this.link = link;
        this.thumbnail = thumbnail;
        this.artistId = artistId;
    }
    return SearchItem;
}());
var SearchService = /** @class */ (function () {
    function SearchService(http) {
        this.http = http;
        this.apiRoot = 'https://itunes.apple.com/search';
        this.results = [];
        this.loading = false;
    }
    SearchService.prototype.search = function (term) {
        var _this = this;
        var promise = new Promise(function (resolve, reject) {
            var apiURL = _this.apiRoot + "?term=" + term + "&media=music&limit=20";
            _this.http.get(apiURL)
                .toPromise()
                .then(function (res) {
                _this.results = res.json().results.map(function (item) {
                    return new SearchItem(item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId);
                });
                // this.results = res.json().results;
                resolve();
            }, function (msg) {
                reject(msg);
            });
        });
        return promise;
    };
    SearchService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Http !== "undefined" && http_1.Http) === "function" && _a || Object])
    ], SearchService);
    return SearchService;
    var _a;
}());
exports.SearchService = SearchService;
var AppComponent = /** @class */ (function () {
    function AppComponent(itunes) {
        this.itunes = itunes;
        this.loading = false;
    }
    AppComponent.prototype.doSearch = function (term) {
        var _this = this;
        this.loading = true;
        this.itunes.search(term).then(function (_) { return _this.loading = false; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: " \n<form class=\"form-inline\">\n\t<div class=\"form-group\">\n\t\t<input type=\"search\"\n\t\t       class=\"form-control\"\n\t\t       placeholder=\"Enter search string\"\n\t\t       #search>\n\t</div>\n\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"doSearch(search.value)\">Search</button>\n</form>\n\n<hr/>\n\n<div class=\"text-center\">\n  <p class=\"lead\" *ngIf=\"loading\">Loading...</p>\n</div>\n\n<ul class=\"list-group\">\n\t<li class=\"list-group-item\"\n\t    *ngFor=\"let track of itunes.results\">\n\t\t<img src=\"{{track.thumbnail}}\">\n\t\t<a target=\"_blank\"\n\t\t   href=\"{{track.link}}\">{{ track.track }}\n\t\t</a>\n\t</li>\n</ul>\n "
        }),
        __metadata("design:paramtypes", [SearchService])
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
                http_1.HttpModule,
            ],
            declarations: [AppComponent],
            bootstrap: [AppComponent],
            providers: [SearchService]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map