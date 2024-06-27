"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DocdashComponent = void 0;
var core_1 = require("@angular/core");
var DocdashComponent = /** @class */ (function () {
    function DocdashComponent(patientService, router, docauth // Inject DocauthService
    ) {
        this.patientService = patientService;
        this.router = router;
        this.docauth = docauth;
        this.patients = [];
    }
    DocdashComponent.prototype.ngOnInit = function () {
        this.getPatients();
    };
    DocdashComponent.prototype.getPatients = function () {
        var _this = this;
        this.patientService.getPatientslist().subscribe(function (data) {
            _this.patients = data;
        });
    };
    DocdashComponent.prototype.update = function (id) {
        this.router.navigate(['update-patient', id]);
    };
    DocdashComponent.prototype["delete"] = function (id) {
        var _this = this;
        this.patientService.deletePatient(id).subscribe(function (data) {
            console.log(data);
            _this.getPatients();
        });
    };
    DocdashComponent.prototype.view = function (id) {
        this.router.navigate(['view-patient', id]);
    };
    DocdashComponent.prototype.logout = function () {
        this.docauth.logout();
        this.router.navigate(['home']);
    };
    DocdashComponent = __decorate([
        core_1.Component({
            selector: 'app-docdash',
            templateUrl: './docdash.component.html',
            styleUrls: ['./docdash.component.css']
        })
    ], DocdashComponent);
    return DocdashComponent;
}());
exports.DocdashComponent = DocdashComponent;
