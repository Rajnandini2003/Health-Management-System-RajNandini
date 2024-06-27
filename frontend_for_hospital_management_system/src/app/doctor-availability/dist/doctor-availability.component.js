"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DoctorAvailabilityComponent = void 0;
var core_1 = require("@angular/core");
var DoctorAvailabilityComponent = /** @class */ (function () {
    function DoctorAvailabilityComponent() {
        this.doctorAvailability = [
            { name: 'Dr. Rajnandini Bhowmick', time: 'Morning', specialization: 'Child Specialist' },
            { name: 'Dr. Suniti Dutta', time: 'Evening', specialization: 'Cancer Specialist' },
            { name: 'Dr. Sritama Das', time: 'Afternoon(12:00 P.M. - 14:00 P.M.)', specialization: 'Gastroenterologist' },
            { name: 'Dr. Poulami Chowdhury', time: 'Evening', specialization: 'Orthopedician' },
            { name: 'Dr. Dinesh Gupta', time: 'Morning', specialization: 'Child Specialist' },
        ];
    }
    DoctorAvailabilityComponent.prototype.ngOnInit = function () {
    };
    DoctorAvailabilityComponent = __decorate([
        core_1.Component({
            selector: 'app-doctor-availability',
            templateUrl: './doctor-availability.component.html',
            styleUrls: ['./doctor-availability.component.css']
        })
    ], DoctorAvailabilityComponent);
    return DoctorAvailabilityComponent;
}());
exports.DoctorAvailabilityComponent = DoctorAvailabilityComponent;
