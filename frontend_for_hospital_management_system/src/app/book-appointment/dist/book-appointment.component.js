"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BookAppointmentComponent = void 0;
var core_1 = require("@angular/core");
var BookAppointmentComponent = /** @class */ (function () {
    function BookAppointmentComponent() {
        this.patient = {
            name: '',
            age: '',
            blood: '',
            medicalhistory: '',
            slots: '',
            urgency: ''
        };
    }
    BookAppointmentComponent.prototype.onSubmit = function () {
        console.log('Patient Details:', this.patient);
        // Add your form submission logic here
    };
    BookAppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-book-appointment',
            templateUrl: './book-appointment.component.html',
            styleUrls: ['./book-appointment.component.css']
        })
    ], BookAppointmentComponent);
    return BookAppointmentComponent;
}());
exports.BookAppointmentComponent = BookAppointmentComponent;
