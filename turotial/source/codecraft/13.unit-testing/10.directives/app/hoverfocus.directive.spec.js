"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:no-unused-variable */
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var hoverfocus_directive_1 = require("./hoverfocus.directive");
var TestHoverFocusComponent = /** @class */ (function () {
    function TestHoverFocusComponent() {
    }
    TestHoverFocusComponent = __decorate([
        core_1.Component({
            template: "<input type=\"text\" hoverfocus>"
        })
    ], TestHoverFocusComponent);
    return TestHoverFocusComponent;
}());
describe('Directive: HoverFocus', function () {
    var component;
    var fixture;
    var inputEl;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [TestHoverFocusComponent, hoverfocus_directive_1.HoverFocusDirective]
        });
        fixture = testing_1.TestBed.createComponent(TestHoverFocusComponent);
        component = fixture.componentInstance;
        inputEl = fixture.debugElement.query(platform_browser_1.By.css('input'));
    });
    it('hovering over input', function () {
        inputEl.triggerEventHandler('mouseover', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');
        inputEl.triggerEventHandler('mouseout', null);
        fixture.detectChanges();
        expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
    });
});
//# sourceMappingURL=hoverfocus.directive.spec.js.map