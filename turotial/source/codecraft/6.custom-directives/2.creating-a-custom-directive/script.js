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
var CardHoverDirective = /** @class */ (function () {
    function CardHoverDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        //noinspection TypeScriptUnresolvedVariable,TypeScriptUnresolvedFunction
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'gray');
    }
    CardHoverDirective = __decorate([
        core_1.Directive({
            selector: "[ccCardHover]"
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, typeof (_b = typeof core_1.Renderer !== "undefined" && core_1.Renderer) === "function" && _b || Object])
    ], CardHoverDirective);
    return CardHoverDirective;
    var _a, _b;
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
            template: "\n<div class=\"card card-block\" ccCardHover>\n  <h4 class=\"card-title\">{{data.setup}}</h4>\n  <p class=\"card-text\"\n     [hidden]=\"data.hide\">{{data.punchline}}</p>\n  <button (click)=\"data.toggle()\"\n     class=\"btn btn-primary\">Tell Me\n  </button>\n</div>\n  "
        })
    ], JokeComponent);
    return JokeComponent;
}());
var JokeListComponent = /** @class */ (function () {
    function JokeListComponent() {
        this.jokes = [
            new Joke("What did the cheese say when it looked in the mirror?", "Hello-me (Halloumi)"),
            new Joke("What kind of cheese do you use to disguise a small horse?", "Mask-a-pony (Mascarpone)"),
            new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
        ];
    }
    JokeListComponent = __decorate([
        core_1.Component({
            selector: 'joke-list',
            template: "\n<joke *ngFor=\"let j of jokes\" [joke]=\"j\"></joke>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], JokeListComponent);
    return JokeListComponent;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n<joke-list></joke-list>\n  "
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
                JokeListComponent,
                CardHoverDirective
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map