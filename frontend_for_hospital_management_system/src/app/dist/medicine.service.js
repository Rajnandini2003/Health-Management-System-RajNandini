"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MedicineService = void 0;
var core_1 = require("@angular/core");
var MedicineService = /** @class */ (function () {
    function MedicineService(httpClient) {
        this.httpClient = httpClient;
        this.baseUrl = "http://localhost:8080/api/v3/medicines";
    }
    MedicineService.prototype.getMedicines = function () {
        return this.httpClient.get("" + this.baseUrl);
    };
    MedicineService.prototype.createMedicine = function (medicine) {
        return this.httpClient.post("" + this.baseUrl, medicine);
    };
    MedicineService.prototype.getMedicineById = function (id) {
        return this.httpClient.get(this.baseUrl + "/medicines/" + id);
    };
    MedicineService.prototype.updateMedicine = function (medicine) {
        return this.httpClient.put(this.baseUrl + "/medicines/" + medicine.id, medicine);
    };
    MedicineService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], MedicineService);
    return MedicineService;
}());
exports.MedicineService = MedicineService;
