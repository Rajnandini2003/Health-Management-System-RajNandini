import { Component } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.css']
})
export class BookAppointmentComponent {
  patient: any = {
    name: '',
    age: '',
    blood: '',
    medicalhistory: '',
    slots: '',
    urgency: ''
  };

  constructor() {}

  onSubmit() {
    console.log('Patient Details:', this.patient);
    // Add your form submission logic here
  }
}
