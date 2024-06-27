import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-update-medicine',
  templateUrl: './update-medicine.component.html',
  styleUrls: ['./update-medicine.component.css']
})
export class UpdateMedicineComponent implements OnInit {

  medicine: Medicine = new Medicine();
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private medicineService: MedicineService
  ) {}

  ngOnInit(): void {
    // Safely get id from route parameters
    this.id = +this.route.snapshot.params['id']; // Convert idParam to number if it exists

    this.medicineService.getMedicineById(this.id).subscribe((data: Medicine) => {
      this.medicine = data;
    });
  }

  onSubmit(): void {
    this.medicineService.updateMedicine(this.id, this.medicine).subscribe(() => {
      console.log('Data updated successfully'); // Logging the success message
      this.goToMedicineList();
    });
  }

  goToMedicineList(): void {
    this.router.navigate(['view-medicine']);
  }
}
