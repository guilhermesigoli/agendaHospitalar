"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var environment_1 = require("src/environments/environment");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, registerService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.registerService = registerService;
        this.isLoggedIn = new core_1.EventEmitter();
        this.registerForm = null;
        this.showError = false;
        this.appName = environment_1.environment.appName;
        this.isLoading = false;
        this.registerForm = this.formBuilder.group({
            username: [null, [forms_1.Validators.email, forms_1.Validators.required, forms_1.Validators.maxLength(80)]],
            password: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(30)]],
            name: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(80)]],
            cpf: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(11)]],
            address: [null, [forms_1.Validators.required]],
            phone: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(11)]]
        });
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        if (!this.registerForm.valid) {
            this.formValidator();
            return;
        }
        this.isLoading = true;
        this.registerService.find(this.registerForm.get('cpf').value).subscribe(function (response) {
            if (response.length === 0) {
                _this.registerService.register(_this.registerForm.value).subscribe(function (res) {
                    _this.isLoggedIn.emit();
                    _this.router.navigate(['/']);
                });
            }
            else {
                _this.showError = true;
            }
        }).add(function () {
            _this.isLoading = false;
        });
    };
    RegisterComponent.prototype.formValidator = function () {
        var _this = this;
        Object.keys(this.registerForm.controls).forEach(function (e) {
            _this.registerForm.get(e).markAsDirty();
        });
    };
    RegisterComponent.prototype.fieldValidator = function (field) {
        return !this.registerForm.get(field).valid &&
            (this.registerForm.get(field).touched || this.registerForm.get(field).dirty);
    };
    __decorate([
        core_1.Output()
    ], RegisterComponent.prototype, "isLoggedIn");
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
