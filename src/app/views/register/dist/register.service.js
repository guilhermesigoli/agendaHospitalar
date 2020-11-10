"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterService = void 0;
var environment_1 = require("src/environments/environment");
var core_1 = require("@angular/core");
var RegisterService = /** @class */ (function () {
    function RegisterService(http) {
        this.http = http;
        this.baseUrl = environment_1.environment.baseUrl;
    }
    // login(user) {
    //   return this.http.get(`${this.baseUrl}/users`, {
    //     params: {
    //       username: user.username,
    //       password: user.password
    //     }
    //   })
    // }
    RegisterService.prototype.find = function (cpf) {
        return this.http.get(this.baseUrl + "/users", {
            params: {
                cpf: cpf
            }
        });
    };
    RegisterService.prototype.register = function (user) {
        return this.http.post(this.baseUrl + "/users", __assign({}, user));
    };
    RegisterService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RegisterService);
    return RegisterService;
}());
exports.RegisterService = RegisterService;
