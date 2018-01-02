"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var DefaultPipe = /** @class */ (function () {
    function DefaultPipe() {
    }
    DefaultPipe.prototype.transform = function (value, fallback, forceHttps) {
        if (forceHttps === void 0) { forceHttps = false; }
        var image = "";
        if (value) {
            image = value;
        }
        else {
            image = fallback;
        }
        if (forceHttps) {
            if (image.indexOf("https") == -1) {
                image = image.replace("http", "https");
            }
        }
        return image;
    };
    DefaultPipe = __decorate([
        core_1.Pipe({
            name: 'default'
        })
    ], DefaultPipe);
    return DefaultPipe;
}());
exports.DefaultPipe = DefaultPipe;
//# sourceMappingURL=default.pipe.js.map