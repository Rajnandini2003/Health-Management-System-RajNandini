"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var admindash_component_1 = require("./admindash/admindash.component"); // Correct import path
var appointment_component_1 = require("./appointment/appointment.component"); // Correct import path
var create_appointment_component_1 = require("./create-appointment/create-appointment.component");
var home_component_1 = require("./home/home.component");
var docdash_component_1 = require("./docdash/docdash.component");
var create_patient_component_1 = require("./create-patient/create-patient.component");
var medicinelist_component_1 = require("./medicinelist/medicinelist.component");
var create_medicine_component_1 = require("./create-medicine/create-medicine.component");
var update_patient_component_1 = require("./update-patient/update-patient.component");
var view_patient_component_1 = require("./view-patient/view-patient.component");
var update_medicine_component_1 = require("./update-medicine/update-medicine.component");
var doclogin_component_1 = require("./doclogin/doclogin.component");
var adlogin_component_1 = require("./adlogin/adlogin.component");
var adminauthguard_service_1 = require("./adminauthguard.service");
var doctorauthguard_service_1 = require("./doctorauthguard.service");
var patientlogin_component_1 = require("./patientlogin/patientlogin.component");
var patientdash_component_1 = require("./patientdash/patientdash.component");
var book_appointment_component_1 = require("./book-appointment/book-appointment.component");
var doctor_availability_component_1 = require("./doctor-availability/doctor-availability.component");
var routes = [
    { path: 'admin', component: admindash_component_1.AdmindashComponent, canActivate: [adminauthguard_service_1.AdminauthguardService] },
    { path: 'appointmentlist', component: appointment_component_1.AppointmentComponent, canActivate: [adminauthguard_service_1.AdminauthguardService] },
    { path: 'create-appointment', component: create_appointment_component_1.CreateAppointmentComponent, canActivate: [adminauthguard_service_1.AdminauthguardService] },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'docdash', component: docdash_component_1.DocdashComponent, canActivate: [doctorauthguard_service_1.DoctorauthguardService] },
    { path: 'create-patient', component: create_patient_component_1.CreatePatientComponent, canActivate: [doctorauthguard_service_1.DoctorauthguardService] },
    { path: 'view-medicine', component: medicinelist_component_1.MedicinelistComponent, canActivate: [doctorauthguard_service_1.DoctorauthguardService] },
    { path: 'create-medicine', component: create_medicine_component_1.CreateMedicineComponent, canActivate: [doctorauthguard_service_1.DoctorauthguardService] },
    { path: 'update-patient/:id', component: update_patient_component_1.UpdatePatientComponent, canActivate: [doctorauthguard_service_1.DoctorauthguardService] },
    { path: 'view-patient/:id', component: view_patient_component_1.ViewPatientComponent, canActivate: [doctorauthguard_service_1.DoctorauthguardService] },
    { path: 'update-medicine/:id', component: update_medicine_component_1.UpdateMedicineComponent, canActivate: [doctorauthguard_service_1.DoctorauthguardService] },
    { path: 'doclogin', component: doclogin_component_1.DocloginComponent },
    { path: 'adlogin', component: adlogin_component_1.AdloginComponent },
    { path: 'patientlogin', component: patientlogin_component_1.PatientloginComponent },
    {
        path: 'patientdash', component: patientdash_component_1.PatientdashComponent
    },
    {
        path: 'book-appointment', component: book_appointment_component_1.BookAppointmentComponent
    },
    {
        path: 'doctor-availability', component: doctor_availability_component_1.DoctorAvailabilityComponent
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
