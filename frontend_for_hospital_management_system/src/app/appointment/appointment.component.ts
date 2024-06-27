import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';  // Correct import path
import { Appointment } from '../appointment';  // Correct import path

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {
  appointments: Appointment[] = [];

  constructor(private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.getAppointments();
  }

  getAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe((data: Appointment[]) => {
      this.appointments = data;
    });
  }

  deleteAppointment(id: number): void {
    this.appointmentService.deleteAppointment(id).subscribe((data: any) => {
      // Handle the response here
      console.log('Appointment deleted successfully', data);
    }, (error: any) => {
      // Handle error here
      console.error('Error deleting appointment', error);
    });
  }
}