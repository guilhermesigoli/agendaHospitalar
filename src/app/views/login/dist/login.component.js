"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var environment_1 = require("src/environments/environment");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, loginService, router) {
        this.formBuilder = formBuilder;
        this.loginService = loginService;
        this.router = router;
        this.isLoggedIn = new core_1.EventEmitter();
        this.loginForm = null;
        this.showError = false;
        this.appName = environment_1.environment.appName;
        this.isLoading = false;
        this.loginForm = this.formBuilder.group({
            username: [null, [forms_1.Validators.email, forms_1.Validators.required, forms_1.Validators.maxLength(80)]],
            password: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(30)]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            this.formValidator();
            return;
        }
        this.isLoading = true;
        this.loginService.login(this.loginForm.value).subscribe(function (response) {
            if (response.length === 0) {
                _this.showError = true;
            }
            else {
                sessionStorage.setItem('user', JSON.stringify(response));
                _this.isLoggedIn.emit();
                environment_1.environment.isLogged = true;
                _this.router.navigate(['/docs']);
            }
        }).add(function () {
            _this.isLoading = false;
        });
    };
    LoginComponent.prototype.formValidator = function () {
        var _this = this;
        Object.keys(this.loginForm.controls).forEach(function (e) {
            _this.loginForm.get(e).markAsDirty();
        });
    };
    LoginComponent.prototype.fieldValidator = function (field) {
        return !this.loginForm.get(field).valid &&
            (this.loginForm.get(field).touched || this.loginForm.get(field).dirty);
    };
    __decorate([
        core_1.Output()
    ], LoginComponent.prototype, "isLoggedIn");
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
