"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProfileComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(formBuilder, router, profileService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.profileService = profileService;
        this.profileForm = null;
        this.profileForm = this.formBuilder.group({
            id: [null],
            username: [null, [forms_1.Validators.email, forms_1.Validators.required, forms_1.Validators.maxLength(80)]],
            password: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(30)]],
            name: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(80)]],
            cpf: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(11)]],
            address: [null, [forms_1.Validators.required]],
            phone: [null, [forms_1.Validators.required, forms_1.Validators.maxLength(11)]]
        });
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.setAccount();
    };
    ProfileComponent.prototype.setAccount = function () {
        var user = JSON.parse(sessionStorage.getItem('user'))[0];
        console.log(user);
        this.profileForm.setValue({
            id: user.id,
            username: user.username,
            password: user.password,
            name: user.name,
            cpf: user.cpf,
            address: user.address,
            phone: user.phone
        });
    };
    ProfileComponent.prototype.update = function () {
        var _this = this;
        this["delete"]();
        this.profileService.update(this.profileForm.value).subscribe(function (res) {
            sessionStorage.removeItem('user');
            sessionStorage.setItem('user', JSON.stringify(_this.profileForm.value));
            _this.router.navigate(['/profile']);
        });
    };
    ProfileComponent.prototype["delete"] = function () {
        this.profileService["delete"](this.profileForm.get('id').value).subscribe();
    };
    ProfileComponent.prototype.deleteAccount = function () {
        this["delete"]();
        this.router.navigate(['/login']);
    };
    ProfileComponent.prototype.formValidator = function () {
        var _this = this;
        Object.keys(this.profileForm.controls).forEach(function (e) {
            _this.profileForm.get(e).markAsDirty();
        });
    };
    ProfileComponent.prototype.fieldValidator = function (field) {
        return !this.profileForm.get(field).valid &&
            (this.profileForm.get(field).touched || this.profileForm.get(field).dirty);
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            templateUrl: './profile.component.html',
            styleUrls: ['./profile.component.scss']
        })
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
