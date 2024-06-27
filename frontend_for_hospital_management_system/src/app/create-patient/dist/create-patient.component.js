"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreatePatientComponent = void 0;
var core_1 = require("@angular/core");
var patient_1 = require("../patient");
var CreatePatientComponent = /** @class */ (function () {
    //patient: any = {}; // Initialize patient object
    function CreatePatientComponent(patientService, router) {
        this.patientService = patientService;
        this.router = router;
        this.patient = new patient_1.Patient();
    }
    CreatePatientComponent.prototype.savePatient = function () {
        var _this = this;
        this.patientService.createPatient(this.patient).subscribe(function (data) {
            console.log(data);
            _this.goTopatientList();
        }, function (error) { return console.log(error); });
    };
    CreatePatientComponent.prototype.onSubmit = function () {
        this.savePatient();
        // Implement your submit logic here
        // console.log('Form submitted:', this.patient);
        // You can add further logic such as calling a service to save patient data
    };
    CreatePatientComponent.prototype.goTopatientList = function () {
        this.router.navigate(['/patientdash']); // Navigate to appointment list
    };
    CreatePatientComponent = __decorate([
        core_1.Component({
            selector: 'app-create-patient',
            templateUrl: './create-patient.component.html',
            styleUrl: './create-patient.component.css'
        })
    ], CreatePatientComponent);
    return CreatePatientComponent;
}());
exports.CreatePatientComponent = CreatePatientComponent;
