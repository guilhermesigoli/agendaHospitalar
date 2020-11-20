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
    function DocsListComponent(router, formBuilder, docsListService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.docsListService = docsListService;
        this.tableData = [];
        this.backUpData = [];
        this.doctor = null;
        this.searchForm = null;
        this.searchForm = this.formBuilder.group({
            name: [null],
            specialty: [null]
        });
    }
    DocsListComponent.prototype.ngOnInit = function () {
        if (!environment_1.environment.isLogged) {
            this.router.navigate(['/login']);
        }
        this.username = JSON.parse(sessionStorage.getItem('user'))[0].name;
        this.getDocsList();
    };
    DocsListComponent.prototype.getDocsList = function () {
        var _this = this;
        this.docsListService.getDocsList().subscribe(function (res) {
            _this.tableData = res;
            _this.backUpData = res;
        });
    };
    DocsListComponent.prototype.setDoc = function (doc) {
        console.log(doc);
        this.doctor = doc;
        this.modalLauncher.nativeElement.click();
    };
    DocsListComponent.prototype.search = function () {
        var _this = this;
        this.tableData = [];
        this.backUpData.forEach(function (e) {
            var _a, _b;
            var name = (_a = _this.searchForm.get('name').value) === null || _a === void 0 ? void 0 : _a.toLowerCase();
            var specialty = (_b = _this.searchForm.get('specialty').value) === null || _b === void 0 ? void 0 : _b.toLowerCase();
            if (name && specialty) {
                if (e.name.toLowerCase().includes(name) && e.specialty.toLowerCase().includes(specialty)) {
                    _this.tableData.push(e);
                }
            }
            else if (name) {
                if (e.name.toLowerCase().includes(name)) {
                    _this.tableData.push(e);
                }
            }
            else if (specialty) {
                if (e.name.toLowerCase().includes(specialty)) {
                    _this.tableData.push(e);
                }
            }
        });
    };
    DocsListComponent.prototype.clearSearch = function () {
        var _this = this;
        this.tableData = [];
        this.backUpData.forEach(function (e) {
            _this.tableData.push(e);
        });
        this.searchForm.reset();
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
