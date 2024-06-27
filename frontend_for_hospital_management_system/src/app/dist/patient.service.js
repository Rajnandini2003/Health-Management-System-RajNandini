"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PatientService = void 0;
var core_1 = require("@angular/core");
var PatientService = /** @class */ (function () {
    function PatientService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "http://localhost:8080/api/v1/patients";
    }
    PatientService.prototype.getPatientslist = function () {
        return this.httpClient.get("" + this.baseUrl);
    };
    PatientService.prototype.createPatient = function (patient) {
        return this.httpClient.post("" + this.baseUrl, patient);
    };
    PatientService.prototype.getPatientById = function (id) {
        return this.httpClient.get(this.baseUrl + "/" + id);
    };
    PatientService.prototype.updatePatient = function (id, patient) {
        return this.httpClient.put(this.baseUrl + "/" + id, patient);
    };
    PatientService.prototype.deletePatient = function (id) {
        return this.httpClient["delete"](this.baseUrl + "/" + id);
    };
    PatientService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PatientService);
    return PatientService;
}());
exports.PatientService = PatientService;
