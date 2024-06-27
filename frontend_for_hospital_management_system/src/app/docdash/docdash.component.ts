import { Component, OnInit } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { DocauthService } from '../docauth.service'; // Import DocauthService

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent implements OnInit {

  patients: Patient[] = [];

  constructor(
    private patientService: PatientService,
    private router: Router,
    private docauth: DocauthService // Inject DocauthService
  ) { }

  ngOnInit(): void {
    this.getPatients();
  }

  getPatients() {
    this.patientService.getPatientslist().subscribe(data => {
      this.patients = data;
    });
  }

  

  update(id: number) {
    this.router.navigate(['update-patient', id]);
  }

  delete(id: number): void {
    this.patientService.deletePatient(id).subscribe(data => {
      console.log(data);
      this.getPatients();
    });
  }

  view(id: number): void {
    this.router.navigate(['view-patient', id]);
  }

  logout() {
    this.docauth.logout();
    this.router.navigate(['home']);
  }
}
