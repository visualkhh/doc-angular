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
var forms_1 = require("@angular/forms");
require("rxjs/add/operator/map");
require("rxjs/add/operator/debounceTime");
require("rxjs/add/operator/distinctUntilChanged");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/do");
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
    function SearchService(jsonp) {
        this.jsonp = jsonp;
        this.apiRoot = 'https://itunes.apple.com/search';
    }
    SearchService.prototype.search = function (term) {
        var apiURL = this.apiRoot + "?term=" + term + "&media=music&limit=20&callback=JSONP_CALLBACK";
        return this.jsonp.request(apiURL)
            .map(function (res) {
            return res.json().results.map(function (item) {
                return new SearchItem(item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId);
            });
        });
    };
    SearchService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Jsonp !== "undefined" && http_1.Jsonp) === "function" && _a || Object])
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
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchField = new forms_1.FormControl();
        this.results = this.searchField.valueChanges
            .debounceTime(400)
            .distinctUntilChanged()
            .do(function (_) { return _this.loading = true; })
            .switchMap(function (term) { return _this.itunes.search(term); })
            .do(function (_) { return _this.loading = false; });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <input type=\"search\"\n           class=\"form-control\"\n           placeholder=\"Enter search string\"\n           [formControl]=\"searchField\">\n  </div>\n</form>\n\n<div class=\"text-center\">\n  <p class=\"lead\" *ngIf=\"loading\">Loading...</p>\n</div>\n\n<ul class=\"list-group\">\n  <li class=\"list-group-item\"\n      *ngFor=\"let track of results | async\">\n    <img src=\"{{track.thumbnail}}\">\n    <a target=\"_blank\"\n       href=\"{{track.link}}\">{{ track.track }}\n    </a>\n  </li>\n</ul>\n "
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
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.JsonpModule
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