import { Component } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { Patient } from '../patient';


@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrl: './create-patient.component.css'
})
export class CreatePatientComponent {

  patient: Patient = new Patient();
  //patient: any = {}; // Initialize patient object

  constructor(private patientService:PatientService, private router: Router){}

  savePatient() {
    this.patientService.createPatient(this.patient).subscribe(data => {
      console.log(data);
      this. goTopatientList();
    }, error => console.log(error));
  }

  onSubmit() {

    this.savePatient();

    // Implement your submit logic here
   // console.log('Form submitted:', this.patient);
    // You can add further logic such as calling a service to save patient data
  }

  goTopatientList() {
    this.router.navigate(['/patientdash']);  // Navigate to appointment list
  }

}
