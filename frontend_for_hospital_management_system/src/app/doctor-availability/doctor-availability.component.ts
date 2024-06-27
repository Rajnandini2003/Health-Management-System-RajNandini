import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-availability',
  templateUrl: './doctor-availability.component.html',
  styleUrls: ['./doctor-availability.component.css']
})
export class DoctorAvailabilityComponent implements OnInit {

  doctorAvailability = [
    { name: 'Dr. Rajnandini Bhowmick', time: 'Morning', specialization: 'Child Specialist' },
    { name: 'Dr. Suniti Dutta', time: 'Evening', specialization: 'Cancer Specialist' },
    { name: 'Dr. Sritama Das', time: 'Afternoon(12:00 P.M. - 14:00 P.M.)', specialization: 'Gastroenterologist' },
    { name: 'Dr. Poulami Chowdhury', time: 'Evening', specialization: 'Orthopedician' },
    { name: 'Dr. Dinesh Gupta', time: 'Morning', specialization: 'Child Specialist' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
