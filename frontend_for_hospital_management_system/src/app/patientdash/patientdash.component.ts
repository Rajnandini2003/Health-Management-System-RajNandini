import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';  // Adjust the path according to your project structure
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientdash',
  templateUrl: './patientdash.component.html',
  styleUrls: ['./patientdash.component.css']
})
export class PatientdashComponent implements OnInit {
  patients: any[] = [];

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
    this.loadPatients();
  }

  loadPatients(): void {
    this.patientService.getPatients().subscribe(
      data => {
        this.patients = data;
      },
      error => {
        console.error('Error fetching patients', error);
      }
    );
  }

  update(id: number): void {
    this.router.navigate(['/update-patient', id]);  // Adjust the route as needed
  }

  delete(id: number): void {
    this.patientService.deletePatient(id).subscribe(
      response => {
        this.loadPatients();  // Reload the list of patients after deletion
      },
      error => {
        console.error('Error deleting patient', error);
      }
    );
  }

  logout(){

    
    this.router.navigate(['home'])

  }
}
