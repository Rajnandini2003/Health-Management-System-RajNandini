"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PatientloginComponent = void 0;
var core_1 = require("@angular/core");
var PatientloginComponent = /** @class */ (function () {
    function PatientloginComponent(router) {
        this.router = router;
        this.username = '';
        this.password = '';
    }
    PatientloginComponent.prototype.checkLogin = function () {
        // Add your login logic here
        if (this.username === 'patient' && this.password === 'password') {
            console.log('Login successful');
        }
        else {
            console.log('Login failed');
        }
    };
    PatientloginComponent = __decorate([
        core_1.Component({
            selector: 'app-patientlogin',
            templateUrl: './patientlogin.component.html',
            styleUrls: ['./patientlogin.component.css']
        })
    ], PatientloginComponent);
    return PatientloginComponent;
}());
exports.PatientloginComponent = PatientloginComponent;
