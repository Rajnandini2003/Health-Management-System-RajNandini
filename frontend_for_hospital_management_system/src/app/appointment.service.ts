import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Appointment } from './appointment';  // Ensure this path is correct

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private baseUrl = 'http://localhost:8080/api/v2/appointments';

  constructor(private httpClient: HttpClient) { }

  getAllAppointments(): Observable<Appointment[]> {
    return this.httpClient.get<Appointment[]>(`${this.baseUrl}`);
  }

  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.baseUrl}`, appointment);
    
  }

  bookAppointment(appointment: Appointment): Observable<Appointment> {
    return this.httpClient.post<Appointment>(`${this.baseUrl}`, appointment);
  }

  deleteAppointment(id: number): Observable<object> {
    return this.httpClient.delete(`${this.baseUrl}/${id}`);

  }
}
