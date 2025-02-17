import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PitchService } from '../../services/pitch.service';
import { PitchDetailsInterface } from '../../types/pitch.interface';
import { HttpClient } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';

import { MatTimepickerModule } from '@angular/material/timepicker';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// import { MbscModule } from '@mobiscroll/angular';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-pitch-details',
  imports: [
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    CommonModule,
    MatTimepickerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  templateUrl: './pitch-details.component.html',
  styleUrl: './pitch-details.component.css',
})
export class PitchDetailsComponent implements OnInit {
  pitch: PitchDetailsInterface | null = null;
  // @ViewChild('ca\lendar') calendar: MatCalendar<any>;

  minTime = '08:00';
  maxTime = '22:00';

  calendarVisible: boolean = false;
  selectedDate: Date | null = null;
  selectedTime: string | null = null;
  timeError: string | null = null;
  confirmationMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private pitchService: PitchService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const pitchId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Pitch ID:', pitchId);
    if (pitchId) {
      this.fetchPitchDetails(pitchId);
    }
  }
  //this fetches the pitch using its id
  fetchPitchDetails(id: number): void {
    this.pitchService.getPitchById(id).subscribe({
      next: (data) => {
        this.pitch = data;
        console.log('Pitch details fetched:', this.pitch);
      },
      error: (err) => {
        console.error('Error fetching pitch details:', err);
      },
    });
  }

  openCalendar(): void {
    this.calendarVisible = true;
    console.log('Calendar opened');
  }

  onDateSelect(date: Date): void {
    this.selectedDate = date;
    console.log('Selected date:', this.selectedDate);
    if (!this.selectedDate) {
      alert('Please select a date');
      console.error('No date selected');
      return;
    }
  }

  onTimeChange(event: any): void {
    this.selectedTime = event.target.value;
    console.log('time cklicked');
    this.checkBookingTime(this.selectedTime);

    if (this.timeError) {
      alert(this.timeError);
      // this.selectedTime = null;
    } else {
      console.log('Selected time is valid:', this.selectedTime);
    }
  }

  checkBookingTime(time: string | null): void {
    if (time) {

      if (time < this.minTime || time > this.maxTime) {
        this.timeError = `Bookings are only allowed between ${this.minTime} and ${this.maxTime}.`;
      } else {
        this.timeError = null;
      }
    }
  }


  bookPitch(): void {
    if (!this.selectedDate) {
      alert('Please select a date.');
      console.error('No date selected.');
      return;
    }
  
    if (!this.selectedTime) {
      alert('Please select a valid time.');
      console.error('No time selected.');
      return;
    }
  
    if (this.timeError) {
      alert(this.timeError);
      console.error('Cannot book: Invalid time selected.');
      return;
    }
  
    const formattedDate = this.selectedDate.toLocaleDateString();
    const userConfirm = confirm(
      `Are you sure you want to book ${this.pitch?.name} for ${formattedDate} at ${this.selectedTime}?`
    );
  
    if (userConfirm) {
      alert('Pitch booked!');
      this.confirmationMessage = `Your booking for ${this.pitch?.name} on ${formattedDate} at ${this.selectedTime} has been confirmed. Please check your email.`;
      console.log('Pitch booked:', this.confirmationMessage);
    } else {
      this.confirmationMessage = 'Booking cancelled';
      console.log('Booking cancelled');
      this.router.navigate(['/pitches']);
    }
  }
  
}