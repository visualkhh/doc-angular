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
        console.log("new - data is " + this.data);
    }
    JokeComponent.prototype.ngOnChanges = function (changes) {
        console.log("ngOnChanges - data is " + this.data);
        for (var key in changes) {
            console.log(key + " changed. \nCurrent: " + changes[key].currentValue + ". \nPrevious: " + changes[key].previousValue);
        }
    };
    JokeComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit  - data is " + this.data);
    };
    JokeComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck");
    };
    JokeComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
    };
    JokeComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked");
    };
    JokeComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    JokeComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
    };
    JokeComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
    };
    __decorate([
        core_1.Input('joke'),
        __metadata("design:type", Joke)
    ], JokeComponent.prototype, "data", void 0);
    JokeComponent = __decorate([
        core_1.Component({
            selector: 'joke',
            template: "\n<div class=\"card card-block\">\n  <h4 class=\"card-title\">\n    <ng-content select=\".setup\"></ng-content>\n  </h4>\n  <p class=\"card-text\"\n     [hidden]=\"data.hide\">\n    <ng-content select=\".punchline\"></ng-content>\n  </p>\n  <a class=\"btn btn-primary\"\n     (click)=\"data.toggle()\">Tell Me\n  </a>\n</div>\n"
        }),
        __metadata("design:paramtypes", [])
    ], JokeComponent);
    return JokeComponent;
}());
var JokeListComponent = /** @class */ (function () {
    function JokeListComponent() {
        this.jokes = [];
    }
    JokeListComponent.prototype.addJoke = function () {
        this.jokes.unshift(new Joke("What did the cheese say when it looked in the mirror", "Hello-me (Halloumi)"));
    };
    JokeListComponent.prototype.deleteJoke = function () {
        this.jokes = [];
    };
    JokeListComponent = __decorate([
        core_1.Component({
            selector: 'joke-list',
            template: "\n<joke *ngFor=\"let j of jokes\" [joke]=\"j\">\n  <span class=\"setup\">{{ j.setup }}?</span>\n  <h1 class=\"punchline\">{{ j.punchline }}</h1>\n</joke>\n\n<button type=\"button\"\n        class=\"btn btn-success\"\n        (click)=\"addJoke()\">Add Joke\n</button>\n  <button type=\"button\"\n        class=\"btn btn-danger\"\n        (click)=\"deleteJoke()\">Clear Jokes\n</button>\n"
        })
    ], JokeListComponent);
    return JokeListComponent;
}());
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app',
            template: "\n<joke-list></joke-list>\n"
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