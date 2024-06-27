"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var admindash_component_1 = require("./admindash/admindash.component");
var appointment_component_1 = require("./appointment/appointment.component");
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
var patientlogin_component_1 = require("./patientlogin/patientlogin.component");
var book_appointment_component_1 = require("./book-appointment/book-appointment.component");
var patientdash_component_1 = require("./patientdash/patientdash.component");
var doctor_availability_component_1 = require("./doctor-availability/doctor-availability.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                admindash_component_1.AdmindashComponent,
                appointment_component_1.AppointmentComponent,
                create_appointment_component_1.CreateAppointmentComponent,
                home_component_1.HomeComponent,
                docdash_component_1.DocdashComponent,
                create_patient_component_1.CreatePatientComponent,
                medicinelist_component_1.MedicinelistComponent,
                create_medicine_component_1.CreateMedicineComponent,
                update_patient_component_1.UpdatePatientComponent,
                view_patient_component_1.ViewPatientComponent,
                update_medicine_component_1.UpdateMedicineComponent,
                doclogin_component_1.DocloginComponent,
                adlogin_component_1.AdloginComponent,
                patientlogin_component_1.PatientloginComponent,
                book_appointment_component_1.BookAppointmentComponent,
                patientdash_component_1.PatientdashComponent,
                doctor_availability_component_1.DoctorAvailabilityComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                app_routing_module_1.AppRoutingModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
