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
require("rxjs/add/operator/toPromise");
var SearchItem = /** @class */ (function () {
    function SearchItem(name, artist, thumbnail, artistId) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.artistId = artistId;
    }
    return SearchItem;
}());
var SearchService = /** @class */ (function () {
    function SearchService(jsonp) {
        this.jsonp = jsonp;
        this.apiRoot = 'https://itunes.apple.com/search';
        this.results = [];
    }
    SearchService.prototype.search = function (term) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.results = [];
            var apiURL = _this.apiRoot + "?term=" + term + "&media=music&limit=20&callback=JSONP_CALLBACK";
            _this.jsonp.request(apiURL)
                .toPromise()
                .then(function (res) {
                _this.results = res.json().results.map(function (item) {
                    console.log(item);
                    return new SearchItem(item.trackName, item.artistName, item.artworkUrl60, item.artistId);
                });
                resolve(_this.results);
            }, function (msg) {
                reject(msg);
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
//# sourceMappingURL=search.service.js.map