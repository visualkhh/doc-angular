"use strict";
/* tslint:disable:no-unused-variable */
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var forms_1 = require("@angular/forms");
var login_component_1 = require("./login.component");
describe('Component: Login', function () {
    var component;
    var fixture;
    beforeEach(function () {
        // refine the test module by declaring the test component
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.ReactiveFormsModule, forms_1.FormsModule],
            declarations: [login_component_1.LoginComponent]
        });
        // create component and test fixture
        fixture = testing_1.TestBed.createComponent(login_component_1.LoginComponent);
        // get test component from the fixture
        component = fixture.componentInstance;
        component.ngOnInit();
    });
    it('form invalid when empty', function () {
        expect(component.form.valid).toBeFalsy();
    });
    it('email field validity', function () {
        var errors = {};
        var email = component.form.controls['email'];
        expect(email.valid).toBeFalsy();
        // Email field is required
        errors = email.errors || {};
        expect(errors['required']).toBeTruthy();
        // Set email to something
        email.setValue("test");
        errors = email.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['pattern']).toBeTruthy();
        // Set email to something correct
        email.setValue("test@example.com");
        errors = email.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['pattern']).toBeFalsy();
    });
    it('password field validity', function () {
        var errors = {};
        var password = component.form.controls['password'];
        // Email field is required
        errors = password.errors || {};
        expect(errors['required']).toBeTruthy();
        // Set email to something
        password.setValue("123456");
        errors = password.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeTruthy();
        // Set email to something correct
        password.setValue("123456789");
        errors = password.errors || {};
        expect(errors['required']).toBeFalsy();
        expect(errors['minlength']).toBeFalsy();
    });
    it('submitting a form emits a user', function () {
        expect(component.form.valid).toBeFalsy();
        component.form.controls['email'].setValue("test@test.com");
        component.form.controls['password'].setValue("123456789");
        expect(component.form.valid).toBeTruthy();
        var user;
        // Subscribe to the Observable and store the user in a local variable.
        component.loggedIn.subscribe(function (value) { return user = value; });
        // Trigger the login function
        component.login();
        // Now we can check to make sure the emitted value is correct
        expect(user.email).toBe("test@test.com");
        expect(user.password).toBe("123456789");
    });
});
//# sourceMappingURL=login.component.spec.js.map