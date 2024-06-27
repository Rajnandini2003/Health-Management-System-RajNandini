"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.AppModule = void 0;

var core_1 = require("@angular/core");

var platform_browser_1 = require("@angular/platform-browser");

var app_routing_module_1 = require("./app-routing.module");

var app_component_1 = require("./app.component");

var http_1 = require("@angular/common/http");

var admindash_component_1 = require("./admindash/admindash.component");

var appointmentlist_component_1 = require("./appointment/appointment.component");

var AppModule =
/** @class */
function () {
  function AppModule() {}

  AppModule = __decorate([core_1.NgModule({
    declarations: [app_component_1.AppComponent, admindash_component_1.AdmindashComponent, appointmentlist_component_1.AppointmentComponent],
    imports: [platform_browser_1.BrowserModule, app_routing_module_1.AppRoutingModule, http_1.HttpClientModule],
    providers: [],
    bootstrap: [app_component_1.AppComponent]
  })], AppModule);
  return AppModule;
}();

exports.AppModule = AppModule;