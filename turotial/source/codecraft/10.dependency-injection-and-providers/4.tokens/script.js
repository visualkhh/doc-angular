"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
// String Token (Fail Case) Example
{
    console.log("String Token (Fail Case) Example");
    var MandrillService = /** @class */ (function () {
        function MandrillService() {
        }
        return MandrillService;
    }());
    var SendGridService = /** @class */ (function () {
        function SendGridService() {
        }
        return SendGridService;
    }());
    var MandrillServiceToken = "EmailService";
    var SendGridServiceToken = "EmailService";
    var injector = core_1.ReflectiveInjector.resolveAndCreate([
        { provide: SendGridServiceToken, useClass: SendGridService },
        { provide: MandrillServiceToken, useClass: MandrillService },
    ]);
    var emailService1 = injector.get(SendGridServiceToken);
    var emailService2 = injector.get(MandrillServiceToken);
    console.log(emailService1 === emailService2);
}
// OpaqueToken
{
    console.log("InjectionToken");
    var MandrillService = /** @class */ (function () {
        function MandrillService() {
        }
        return MandrillService;
    }());
    var SendGridService = /** @class */ (function () {
        function SendGridService() {
        }
        return SendGridService;
    }());
    var MandrillServiceToken = new core_2.InjectionToken("EmailService");
    var SendGridServiceToken = new core_2.InjectionToken("EmailService");
    var injector = core_1.ReflectiveInjector.resolveAndCreate([
        { provide: SendGridServiceToken, useClass: SendGridService },
        { provide: MandrillServiceToken, useClass: MandrillService },
    ]);
    var emailService1 = injector.get(SendGridServiceToken);
    var emailService2 = injector.get(MandrillServiceToken);
    console.log(emailService1 === emailService2); // false
}
//# sourceMappingURL=script.js.map