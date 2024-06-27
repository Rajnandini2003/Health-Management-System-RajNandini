import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router service
import { Appointment } from '../appointment';  // Adjust path if necessary
import { AppointmentService } from '../appointment.service';  // Adjust path if necessary

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.css']
})
export class CreateAppointmentComponent {
  appointment: Appointment = new Appointment();

  constructor(
    private appointmentService: AppointmentService, private router: Router)
   // private router: Router  // Inject Router service
   {}

  saveAppointment() {
    this.appointmentService.createAppointment(this.appointment).subscribe(data => {
      console.log(data);
      this.goToAppointmentList();  // Navigate to appointment list after saving
    });
  }


  onSubmit() {
    this.saveAppointment();
    //console.log('Form submitted:', this.appointment);
  }
  goToAppointmentList() {
    this.router.navigate(['/appointmentlist']);  // Navigate to appointment list
  }
}
