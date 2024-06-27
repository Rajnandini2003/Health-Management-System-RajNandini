"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UpdateMedicineComponent = void 0;
var core_1 = require("@angular/core");
var medicine_1 = require("../medicine");
var UpdateMedicineComponent = /** @class */ (function () {
    function UpdateMedicineComponent(route, router, medicineService) {
        this.route = route;
        this.router = router;
        this.medicineService = medicineService;
        this.medicine = new medicine_1.Medicine();
        this.id = 0;
    }
    UpdateMedicineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.medicineService.getMedicineById(this.id).subscribe(function (medicine) {
            _this.medicine = medicine;
            //this.getMedicine();
        }, goToMedicineList(), {
            "this": .router.navigate(['view-medicine'])
        }, onSubmit(), void {
            "this": .medicineService.updateMedicine(this.id, this.medicine).subscribe(function () {
                console.log(data);
                // Optionally, navigate to a different route after successful update
                _this.router.navigate(['/medicines']);
            })
        });
    };
    UpdateMedicineComponent = __decorate([
        core_1.Component({
            selector: 'app-update-medicine',
            templateUrl: './update-medicine.component.html',
            styleUrls: ['./update-medicine.component.css']
        })
    ], UpdateMedicineComponent);
    return UpdateMedicineComponent;
}());
exports.UpdateMedicineComponent = UpdateMedicineComponent;
