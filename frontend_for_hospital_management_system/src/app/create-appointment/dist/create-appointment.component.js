"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateAppointmentComponent = void 0;
var core_1 = require("@angular/core");
var appointment_1 = require("../appointment"); // Adjust path if necessary
var CreateAppointmentComponent = /** @class */ (function () {
    function CreateAppointmentComponent(appointmentService, router) {
        this.appointmentService = appointmentService;
        this.router = router;
        this.appointment = new appointment_1.Appointment();
    }
    CreateAppointmentComponent.prototype.saveAppointment = function () {
        var _this = this;
        this.appointmentService.createAppointment(this.appointment).subscribe(function (data) {
            console.log(data);
            _this.goToAppointmentList(); // Navigate to appointment list after saving
        });
    };
    CreateAppointmentComponent.prototype.onSubmit = function () {
        this.saveAppointment();
        //console.log('Form submitted:', this.appointment);
    };
    CreateAppointmentComponent.prototype.goToAppointmentList = function () {
        this.router.navigate(['/appointmentlist']); // Navigate to appointment list
    };
    CreateAppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-create-appointment',
            templateUrl: './create-appointment.component.html',
            styleUrls: ['./create-appointment.component.css']
        })
    ], CreateAppointmentComponent);
    return CreateAppointmentComponent;
}());
exports.CreateAppointmentComponent = CreateAppointmentComponent;
