"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdatePatientComponent = void 0;
var core_1 = require("@angular/core");
var patient_1 = require("../patient");
var UpdatePatientComponent = /** @class */ (function () {
    function UpdatePatientComponent(patientService, route, router) {
        this.patientService = patientService;
        this.route = route;
        this.router = router;
        this.patient = new patient_1.Patient();
    }
    UpdatePatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.patientService.getPatientById(this.id).subscribe(function (data) {
            _this.patient = data;
        }, function (error) { return console.log(error); });
    };
    UpdatePatientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.patientService.updatePatient(this.id, this.patient).subscribe(function (data) {
            _this.goToDocDash();
        }, function (error) { return console.log(error); });
    };
    UpdatePatientComponent.prototype.goToDocDash = function () {
        this.router.navigate(['docdash']);
    };
    UpdatePatientComponent = __decorate([
        core_1.Component({
            selector: 'app-update-patient',
            templateUrl: './update-patient.component.html',
            styleUrls: ['./update-patient.component.css']
        })
    ], UpdatePatientComponent);
    return UpdatePatientComponent;
}());
exports.UpdatePatientComponent = UpdatePatientComponent;
