"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Switching Dependencies Example
{
    console.log("Switching Dependencies Example");
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
        { provide: "EmailService", useClass: MandrillService }
    ]);
    var emailService = injector.get("EmailService");
    console.log(emailService); // new MandrillService()
    {
        var injector_1 = core_1.ReflectiveInjector.resolveAndCreate([
            { provide: "EmailService", useClass: SendGridService }
        ]);
        var emailService_1 = injector_1.get("EmailService");
        console.log(emailService_1); // new SendGridService()
    }
}
// useClass Provider
{
    console.log("useClass");
    var EmailService = /** @class */ (function () {
        function EmailService() {
        }
        return EmailService;
    }());
    var MandrillService = /** @class */ (function (_super) {
        __extends(MandrillService, _super);
        function MandrillService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return MandrillService;
    }(EmailService));
    var SendGridService = /** @class */ (function (_super) {
        __extends(SendGridService, _super);
        function SendGridService() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return SendGridService;
    }(EmailService));
    var injector = core_1.ReflectiveInjector.resolveAndCreate([
        { provide: EmailService, useClass: SendGridService }
    ]);
    var emailService = injector.get(EmailService);
    console.log(emailService);
}
// useExisting
{
    console.log("useExisting");
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
    var GenericEmailService = /** @class */ (function () {
        function GenericEmailService() {
        }
        return GenericEmailService;
    }());
    var injector = core_1.ReflectiveInjector.resolveAndCreate([
        { provide: GenericEmailService, useClass: GenericEmailService },
        { provide: MandrillService, useExisting: GenericEmailService },
        { provide: SendGridService, useExisting: GenericEmailService }
    ]);
    var emailService1 = injector.get(SendGridService);
    console.log(emailService1); // GenericEmailService {}
    var emailService2 = injector.get(MandrillService);
    console.log(emailService2); // GenericEmailService {}
    var emailService3 = injector.get(GenericEmailService);
    console.log(emailService3); // GenericEmailService {}
    console.log(emailService1 === emailService2 && emailService2 === emailService3); // true
}
// useValue
{
    console.log("useValue");
    var injector = core_1.ReflectiveInjector.resolveAndCreate([
        {
            provide: "Config",
            useValue: Object.freeze({
                'APIKey': 'XYZ1234ABC',
                'APISecret': '555-123-111'
            })
        }
    ]);
    var config = injector.get("Config");
    console.log(config); // Object {APIKey: "XYZ1234ABC", APISecret: "555-123-111"}
}
// useFactory
{
    console.log("useFactory");
    var MandrillService_1 = /** @class */ (function () {
        function MandrillService() {
        }
        return MandrillService;
    }());
    var SendGridService_1 = /** @class */ (function () {
        function SendGridService() {
        }
        return SendGridService;
    }());
    var isProd_1 = true;
    var injector = core_1.ReflectiveInjector.resolveAndCreate([
        {
            provide: "EmailService",
            useFactory: function () {
                if (isProd_1) {
                    return new MandrillService_1();
                }
                else {
                    return new SendGridService_1();
                }
            }
        },
    ]);
    var emailService1 = injector.get("EmailService");
    console.log(emailService1); // MandrillService {}
}
//# sourceMappingURL=script.js.map