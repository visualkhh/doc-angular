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
var router_1 = require("@angular/router");
require("rxjs/add/operator/toPromise");
var router_2 = require("@angular/router");
// Domain models
var SearchItem = /** @class */ (function () {
    function SearchItem(name, artist, link, thumbnail, artistId) {
        this.name = name;
        this.artist = artist;
        this.link = link;
        this.thumbnail = thumbnail;
        this.artistId = artistId;
    }
    return SearchItem;
}());
// Services
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
                    return new SearchItem(item.trackName, item.artistName, item.trackViewUrl, item.artworkUrl30, item.artistId);
                });
                resolve();
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
var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.isLoggedIn = function () {
        return true; // Switch to `false` to make OnlyLoggedInUsersGuard work
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
}());
// Components
var SearchComponent = /** @class */ (function () {
    function SearchComponent(itunes, route, router) {
        var _this = this;
        this.itunes = itunes;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.route.params.subscribe(function (params) {
            console.log(params);
            if (params['term']) {
                _this.doSearch(params['term']);
            }
        });
    }
    SearchComponent.prototype.doSearch = function (term) {
        var _this = this;
        this.loading = true;
        this.itunes.search(term).then(function (_) { return _this.loading = false; });
    };
    SearchComponent.prototype.onSearch = function (term) {
        this.router.navigate(['search', { term: term }]);
    };
    SearchComponent.prototype.canDeactivate = function () {
        return this.itunes.results.length > 0;
    };
    SearchComponent = __decorate([
        core_1.Component({
            selector: 'app-search',
            template: "<form class=\"form-inline\">\n  <div class=\"form-group\">\n    <input type=\"search\"\n           class=\"form-control\"\n           placeholder=\"Enter search string\"\n           #search>\n  </div>\n  <button type=\"button\"\n          class=\"btn btn-primary\"\n          (click)=\"onSearch(search.value)\">\n    Search\n  </button>\n</form>\n\n<hr />\n\n<div class=\"text-center\">\n  <p class=\"lead\"\n     *ngIf=\"loading\">Loading...</p>\n</div>\n\n<div class=\"list-group\">\n  <a [routerLink]=\"['/artist', track.artistId]\"\n     class=\"list-group-item list-group-item-action\"\n     *ngFor=\"let track of itunes.results\">\n    <img src=\"{{track.thumbnail}}\">\n    {{ track.name }} <span class=\"text-muted\">by</span> {{ track.artist }}\n  </a>\n</div>\n "
        }),
        __metadata("design:paramtypes", [SearchService, typeof (_a = typeof router_2.ActivatedRoute !== "undefined" && router_2.ActivatedRoute) === "function" && _a || Object, typeof (_b = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _b || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a, _b;
}());
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: "\n<div class=\"jumbotron\">\n  <h1 class=\"display-3\">iTunes Search App</h1>\n</div>\n "
        })
    ], HomeComponent);
    return HomeComponent;
}());
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router) {
        this.router = router;
    }
    HeaderComponent.prototype.goHome = function () {
        this.router.navigate(['']);
    };
    HeaderComponent.prototype.goSearch = function () {
        this.router.navigate(['search']);
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: "<nav class=\"navbar navbar-light bg-faded\">\n  <a class=\"navbar-brand\"\n     [routerLink]=\"['home']\">iTunes Search App\n  </a>\n  <ul class=\"nav navbar-nav\">\n    <li class=\"nav-item\"\n        [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\"\n         [routerLink]=\"['home']\">Home\n      </a>\n    </li>\n    <li class=\"nav-item\"\n        [routerLinkActive]=\"['active']\">\n      <a class=\"nav-link\"\n         [routerLink]=\"['search']\">Search\n      </a>\n    </li>\n  </ul>\n</nav>\n "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof router_2.Router !== "undefined" && router_2.Router) === "function" && _a || Object])
    ], HeaderComponent);
    return HeaderComponent;
    var _a;
}());
var ArtistTrackListComponent = /** @class */ (function () {
    function ArtistTrackListComponent(jsonp, route) {
        var _this = this;
        this.jsonp = jsonp;
        this.route = route;
        this.route.parent.params.subscribe(function (params) {
            _this.jsonp.request("https://itunes.apple.com/lookup?id=" + params['artistId'] + "&entity=song&callback=JSONP_CALLBACK")
                .toPromise()
                .then(function (res) {
                console.log(res.json());
                _this.tracks = res.json().results.slice(1);
            });
        });
    }
    ArtistTrackListComponent = __decorate([
        core_1.Component({
            selector: 'app-artist-track-list',
            template: "\n<ul class=\"list-group\">\n  <li class=\"list-group-item\"\n      *ngFor=\"let track of tracks\">\n    <img src=\"{{track.artworkUrl30}}\">\n    <a target=\"_blank\"\n       href=\"{{track.trackViewUrl}}\">{{ track.trackName }}\n    </a>\n  </li>\n</ul>\n "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Jsonp !== "undefined" && http_1.Jsonp) === "function" && _a || Object, typeof (_b = typeof router_2.ActivatedRoute !== "undefined" && router_2.ActivatedRoute) === "function" && _b || Object])
    ], ArtistTrackListComponent);
    return ArtistTrackListComponent;
    var _a, _b;
}());
var ArtistAlbumListComponent = /** @class */ (function () {
    function ArtistAlbumListComponent(jsonp, route) {
        var _this = this;
        this.jsonp = jsonp;
        this.route = route;
        this.route.parent.params.subscribe(function (params) {
            _this.jsonp.request("https://itunes.apple.com/lookup?id=" + params['artistId'] + "&entity=album&callback=JSONP_CALLBACK")
                .toPromise()
                .then(function (res) {
                console.log(res.json());
                _this.albums = res.json().results.slice(1);
            });
        });
    }
    ArtistAlbumListComponent = __decorate([
        core_1.Component({
            selector: 'app-artist-album-list',
            template: "<ul class=\"list-group\">\n  <li class=\"list-group-item\"\n      *ngFor=\"let album of albums\">\n    <img src=\"{{album.artworkUrl60}}\">\n    <a target=\"_blank\"\n       href=\"{{album.collectionViewUrl}}\">{{ album.collectionName }}\n    </a>\n  </li>\n</ul>\n "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Jsonp !== "undefined" && http_1.Jsonp) === "function" && _a || Object, typeof (_b = typeof router_2.ActivatedRoute !== "undefined" && router_2.ActivatedRoute) === "function" && _b || Object])
    ], ArtistAlbumListComponent);
    return ArtistAlbumListComponent;
    var _a, _b;
}());
var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(jsonp, route) {
        var _this = this;
        this.jsonp = jsonp;
        this.route = route;
        this.route.params.subscribe(function (params) {
            _this.jsonp.request("https://itunes.apple.com/lookup?id=" + params['artistId'] + "&callback=JSONP_CALLBACK")
                .toPromise()
                .then(function (res) {
                console.log(res.json());
                _this.artist = res.json().results[0];
                console.log(_this.artist);
            });
        });
    }
    ArtistComponent = __decorate([
        core_1.Component({
            selector: 'app-artist',
            template: "<div class=\"card\">\n  <div class=\"card-block\">\n    <h4>{{artist?.artistName}} <span class=\"tag tag-default\">{{artist?.primaryGenreName}}</span></h4>\n    <hr />\n    <footer>\n      <ul class=\"nav nav-pills\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n             [routerLinkActive]=\"['active']\"\n             [routerLink]=\"['./tracks']\">Tracks\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\"\n             [routerLinkActive]=\"['active']\"\n             [routerLink]=\"['./albums']\">Albums\n          </a>\n        </li>\n      </ul>\n    </footer>\n  </div>\n</div>\n\n<div class=\"m-t-1\">\n  <router-outlet></router-outlet>\n</div>\n "
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof http_1.Jsonp !== "undefined" && http_1.Jsonp) === "function" && _a || Object, typeof (_b = typeof router_2.ActivatedRoute !== "undefined" && router_2.ActivatedRoute) === "function" && _b || Object])
    ], ArtistComponent);
    return ArtistComponent;
    var _a, _b;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n  <app-header></app-header>\n  <div class=\"m-t-1\">\n    <router-outlet></router-outlet>\n  </div>\n "
        })
    ], AppComponent);
    return AppComponent;
}());
// Guards
var AlwaysAuthGuard = /** @class */ (function () {
    function AlwaysAuthGuard() {
    }
    AlwaysAuthGuard.prototype.canActivate = function () {
        console.log("AlwaysAuthGuard");
        return true;
    };
    return AlwaysAuthGuard;
}());
var OnlyLoggedInUsersGuard = /** @class */ (function () {
    function OnlyLoggedInUsersGuard(userService) {
        this.userService = userService;
    }
    ;
    OnlyLoggedInUsersGuard.prototype.canActivate = function () {
        console.log("OnlyLoggedInUsers");
        if (this.userService.isLoggedIn()) {
            return true;
        }
        else {
            window.alert("You don't have permission to view this page");
            return false;
        }
    };
    OnlyLoggedInUsersGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [UserService])
    ], OnlyLoggedInUsersGuard);
    return OnlyLoggedInUsersGuard;
}());
var AlwaysAuthChildrenGuard = /** @class */ (function () {
    function AlwaysAuthChildrenGuard() {
    }
    AlwaysAuthChildrenGuard.prototype.canActivateChild = function () {
        console.log("AlwaysAuthChildrenGuard");
        return true;
    };
    return AlwaysAuthChildrenGuard;
}());
var UnsearchedTermGuard = /** @class */ (function () {
    function UnsearchedTermGuard() {
    }
    UnsearchedTermGuard.prototype.canDeactivate = function (component, route, state) {
        console.log("UnsearchedTermGuard");
        console.log(state.url);
        return component.canDeactivate() || window.confirm("Are you sure?");
    };
    return UnsearchedTermGuard;
}());
// Routes
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'find', redirectTo: 'search' },
    { path: 'home', component: HomeComponent },
    { path: 'search', component: SearchComponent, canDeactivate: [UnsearchedTermGuard] },
    {
        path: 'artist/:artistId',
        component: ArtistComponent,
        canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
        canActivateChild: [AlwaysAuthChildrenGuard],
        children: [
            { path: '', redirectTo: 'tracks', pathMatch: 'full' },
            { path: 'tracks', component: ArtistTrackListComponent },
            { path: 'albums', component: ArtistAlbumListComponent },
        ]
    },
    { path: '**', component: HomeComponent }
];
// Bootstrap
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.JsonpModule,
                router_1.RouterModule.forRoot(routes, { useHash: true })
            ],
            declarations: [
                AppComponent,
                SearchComponent,
                HomeComponent,
                HeaderComponent,
                ArtistAlbumListComponent,
                ArtistTrackListComponent,
                ArtistComponent
            ],
            bootstrap: [AppComponent],
            providers: [
                SearchService,
                UserService,
                OnlyLoggedInUsersGuard,
                AlwaysAuthGuard,
                AlwaysAuthChildrenGuard,
                UnsearchedTermGuard
            ]
        })
    ], AppModule);
    return AppModule;
}());
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map