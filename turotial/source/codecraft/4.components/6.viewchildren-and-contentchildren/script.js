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
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var Joke = /** @class */ (function () {
    function Joke(setup, punchline) {
        this.setup = setup;
        this.punchline = punchline;
        this.hide = true;
    }
    Joke.prototype.toggle = function () {
        this.hide = !this.hide;
    };
    return Joke;
}());
var JokeComponent = /** @class */ (function () {
    function JokeComponent() {
    }
    __decorate([
        core_1.Input('joke'),
        __metadata("design:type", Joke)
    ], JokeComponent.prototype, "data", void 0);
    JokeComponent = __decorate([
        core_1.Component({
            selector: 'joke',
            template: "\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">\n    <ng-content select=\".setup\"></ng-content>\n  </h4>\n  <p class=\"card-text\"\n     [hidden]=\"data.hide\">\n    <ng-content select=\".punchline\"></ng-content>\n  </p>\n  <a class=\"btn btn-primary\"\n     (click)=\"data.toggle()\">Tell Me\n  </a>\n</div>\n"
        })
    ], JokeComponent);
    return JokeComponent;
}());
var JokeListComponent = /** @class */ (function () {
    function JokeListComponent() {
        this.jokes = [
            new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"),
            new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)")
        ];
        console.log("new - jokeViewChild is " + this.jokeViewChild);
        console.log("new - jokeContentChild is " + this.jokeContentChild);
    }
    JokeListComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit - jokeContentChild is " + this.jokeContentChild);
    };
    JokeListComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit - jokeViewChild is " + this.jokeViewChild);
        var jokes = this.jokeViewChildren.toArray();
        console.log(jokes);
        console.log("ngAfterViewInit - headerEl is " + this.headerEl);
        this.headerEl.nativeElement.textContent = "Best Joke Machine";
    };
    __decorate([
        core_1.ViewChild(JokeComponent),
        __metadata("design:type", JokeComponent)
    ], JokeListComponent.prototype, "jokeViewChild", void 0);
    __decorate([
        core_1.ViewChildren(JokeComponent),
        __metadata("design:type", typeof (_a = typeof core_1.QueryList !== "undefined" && core_1.QueryList) === "function" && _a || Object)
    ], JokeListComponent.prototype, "jokeViewChildren", void 0);
    __decorate([
        core_1.ViewChild("header"),
        __metadata("design:type", typeof (_b = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _b || Object)
    ], JokeListComponent.prototype, "headerEl", void 0);
    __decorate([
        core_1.ContentChild(JokeComponent),
        __metadata("design:type", JokeComponent)
    ], JokeListComponent.prototype, "jokeContentChild", void 0);
    JokeListComponent = __decorate([
        core_1.Component({
            selector: 'joke-list',
            template: "\n<h4 #header>View Jokes</h4>\n<joke *ngFor=\"let j of jokes\" [joke]=\"j\">\n  <span class=\"setup\">{{ j.setup }}?</span>\n  <h1 class=\"punchline\">{{ j.punchline }}</h1>\n</joke>\n<h4>Content Jokes</h4>\n<ng-content></ng-content>\n"
        }),
        __metadata("design:paramtypes", [])
    ], JokeListComponent);
    return JokeListComponent;
    var _a, _b;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.joke = new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’");
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n<joke-list>\n  <joke [joke]=\"joke\">\n    <span class=\"setup\">{{ joke.setup }}?</span>\n    <h1 class=\"punchline\">{{ joke.punchline }}</h1>  \n  </joke>\n</joke-list>\n"
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
            declarations: [
                AppComponent,
                JokeComponent,
                JokeListComponent
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map