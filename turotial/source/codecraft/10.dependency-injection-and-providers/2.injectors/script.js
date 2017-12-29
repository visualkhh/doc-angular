"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Simple Injector Example
{
    console.log("Simple Injector Example");
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
    var injector = core_1.ReflectiveInjector.resolveAndCreate([
        MandrillService,
        SendGridService
    ]);
    var emailService = injector.get(MandrillService);
    console.log(emailService);
    // Injector Caching Example
    {
        console.log("Injector Caching Example");
        var emailService1 = injector.get(MandrillService);
        var emailService2 = injector.get(MandrillService);
        console.log(emailService1 === emailService2); // true
    }
    // Injector Caching Caching State Sharing Example
    {
        console.log("Injector Caching Caching State Sharing Example");
        var emailService1 = injector.get(MandrillService);
        emailService1.foo = "moo";
        var emailService2 = injector.get(MandrillService);
        console.log(emailService2.foo); // moo
    }
}
//  Child Injector Forwards Request to Parent 1
{
    console.log("Child Injector Forwards Request to Parent");
    var EmailService = /** @class */ (function () {
        function EmailService() {
        }
        return EmailService;
    }());
    var injector = core_1.ReflectiveInjector.resolveAndCreate([EmailService]);
    var childInjector = injector.resolveAndCreateChild([EmailService]);
    console.log(injector.get(EmailService) === childInjector.get(EmailService)); // false
}
//  Child Injector Forwards Request to Parent 2
{
    console.log("Child Injector Forwards Request to Parent");
    var EmailService = /** @class */ (function () {
        function EmailService() {
        }
        return EmailService;
    }());
    var injector = core_1.ReflectiveInjector.resolveAndCreate([EmailService]);
    var childInjector = injector.resolveAndCreateChild([]);
    console.log(injector.get(EmailService) === childInjector.get(EmailService)); // true
}
//  Child Injector Returns Different Instance
{
    console.log("Child Injector Returns Different Instance");
    var EmailService = /** @class */ (function () {
        function EmailService() {
        }
        return EmailService;
    }());
    var PhoneService = /** @class */ (function () {
        function PhoneService() {
        }
        return PhoneService;
    }());
    var injector = core_1.ReflectiveInjector.resolveAndCreate([EmailService]);
    var childInjector = injector.resolveAndCreateChild([EmailService]);
    console.log(injector.get(EmailService) === childInjector.get(EmailService));
}
//# sourceMappingURL=script.js.map