"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ViewPatientComponent = void 0;
var core_1 = require("@angular/core");
var patient_1 = require("../patient");
var ViewPatientComponent = /** @class */ (function () {
    function ViewPatientComponent(route, patientService) {
        this.route = route;
        this.patientService = patientService;
        this.id = 0;
        this.patient = new patient_1.Patient(); // Correct initialization
    }
    ViewPatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.patientService.getPatientById(this.id).subscribe(function (data) {
            _this.patient = data;
        });
    };
    ViewPatientComponent = __decorate([
        core_1.Component({
            selector: 'app-view-patient',
            templateUrl: './view-patient.component.html',
            styleUrls: ['./view-patient.component.css']
        })
    ], ViewPatientComponent);
    return ViewPatientComponent;
}());
exports.ViewPatientComponent = ViewPatientComponent;
