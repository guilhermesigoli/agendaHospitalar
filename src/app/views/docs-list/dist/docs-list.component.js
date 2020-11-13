"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DocsListComponent = void 0;
var environment_1 = require("src/environments/environment");
var core_1 = require("@angular/core");
var DocsListComponent = /** @class */ (function () {
    function DocsListComponent(router, docsListService) {
        this.router = router;
        this.docsListService = docsListService;
        this.tableData = [];
        this.doctor = null;
    }
    DocsListComponent.prototype.ngOnInit = function () {
        if (!environment_1.environment.isLogged) {
            this.router.navigate(['/docs']);
        }
        this.getDocsList();
    };
    DocsListComponent.prototype.getDocsList = function () {
        var _this = this;
        this.docsListService.getDocsList().subscribe(function (res) {
            _this.tableData = res;
        });
    };
    DocsListComponent.prototype.setDoc = function (doc) {
        console.log(doc);
        this.doctor = doc;
        this.modalLauncher.nativeElement.click();
    };
    __decorate([
        core_1.ViewChild('successModalLauncher')
    ], DocsListComponent.prototype, "modalLauncher");
    DocsListComponent = __decorate([
        core_1.Component({
            selector: 'app-docs-list',
            templateUrl: './docs-list.component.html',
            styleUrls: ['./docs-list.component.scss']
        })
    ], DocsListComponent);
    return DocsListComponent;
}());
exports.DocsListComponent = DocsListComponent;
