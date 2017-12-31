"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var common_1 = require("@angular/common");
var testing_1 = require("@angular/core/testing");
var testing_2 = require("@angular/router/testing");
var router_1 = require("@angular/router");
var router_2 = require("./router");
describe('Router: App', function () {
    var location;
    var router;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [testing_2.RouterTestingModule.withRoutes(router_2.routes)],
            declarations: [
                router_2.HomeComponent,
                router_2.SearchComponent,
                router_2.AppComponent
            ]
        });
        router = testing_1.TestBed.get(router_1.Router);
        location = testing_1.TestBed.get(common_1.Location);
        fixture = testing_1.TestBed.createComponent(router_2.AppComponent);
        router.initialNavigation();
    });
    it('fakeAsync works', testing_1.fakeAsync(function () {
        var promise = new Promise(function (resolve) {
            setTimeout(resolve, 10);
        });
        var done = false;
        promise.then(function () { return done = true; });
        testing_1.tick(50);
        expect(done).toBeTruthy();
    }));
    it('navigate to "" redirects you to /home', testing_1.fakeAsync(function () {
        router.navigate(['']);
        testing_1.tick(50);
        expect(location.path()).toBe('/home');
    }));
    it('navigate to "search" takes you to /search', testing_1.fakeAsync(function () {
        router.navigate(['/search']);
        testing_1.tick(50);
        expect(location.path()).toBe('/search');
    }));
});
//# sourceMappingURL=router.spec.js.map