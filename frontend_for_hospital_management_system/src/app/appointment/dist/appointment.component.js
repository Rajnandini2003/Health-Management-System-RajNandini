"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppointmentComponent = void 0;
var core_1 = require("@angular/core");
var AppointmentComponent = /** @class */ (function () {
    function AppointmentComponent(appointmentService) {
        this.appointmentService = appointmentService;
        this.appointments = [];
    }
    AppointmentComponent.prototype.ngOnInit = function () {
        this.getAppointments();
    };
    AppointmentComponent.prototype.getAppointments = function () {
        var _this = this;
        this.appointmentService.getAllAppointments().subscribe(function (data) {
            _this.appointments = data;
        });
    };
    AppointmentComponent.prototype.deleteAppointment = function (id) {
        this.appointmentService.deleteAppointment(id).subscribe(function (data) {
            // Handle the response here
            console.log('Appointment deleted successfully', data);
        }, function (error) {
            // Handle error here
            console.error('Error deleting appointment', error);
        });
    };
    AppointmentComponent = __decorate([
        core_1.Component({
            selector: 'app-appointment',
            templateUrl: './appointment.component.html',
            styleUrls: ['./appointment.component.css']
        })
    ], AppointmentComponent);
    return AppointmentComponent;
}());
exports.AppointmentComponent = AppointmentComponent;
