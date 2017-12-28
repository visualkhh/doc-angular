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
var JokeFormComponent = /** @class */ (function () {
    function JokeFormComponent() {
        this.jokeCreated = new core_1.EventEmitter();
    }
    JokeFormComponent.prototype.createJoke = function (setup, punchline) {
        this.jokeCreated.emit(new Joke(setup, punchline));
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], JokeFormComponent.prototype, "jokeCreated", void 0);
    JokeFormComponent = __decorate([
        core_1.Component({
            selector: 'joke-form',
            templateUrl: 'joke-form-component.html',
            styleUrls: [
                'joke-form-component.css'
            ],
            encapsulation: core_1.ViewEncapsulation.Emulated
            // encapsulation: ViewEncapsulation.Native
            // encapsulation: ViewEncapsulation.None
        })
    ], JokeFormComponent);
    return JokeFormComponent;
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
            new Joke("What kind of cheese do you use to disguise a small horse", "Mask-a-pony (Mascarpone)"),
            new Joke("A kid threw a lump of cheddar at me", "I thought ‘That’s not very mature’"),
        ];
    }
    JokeListComponent.prototype.addJoke = function (joke) {
        this.jokes.unshift(joke);
    };
    JokeListComponent = __decorate([
        core_1.Component({
            selector: 'joke-list',
            template: "\n<joke-form (jokeCreated)=\"addJoke($event)\"></joke-form>\n<joke *ngFor=\"let j of jokes\" [joke]=\"j\">\n  <span class=\"setup\">{{ j.setup }}?</span>\n  <h1 class=\"punchline\">{{ j.punchline }}</h1>\n</joke>\n  "
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
                JokeFormComponent
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=script.js.map