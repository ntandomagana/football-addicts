import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PitchService } from '../../services/pitch.service';
import { PitchDetailsInterface } from '../../types/pitch.interface';
import { HttpClient } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCalendarBody } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-pitch-details',
  imports: [MatDatepickerModule,
    MatNativeDateModule, 
    MatCalendarBody, 
    MatCardModule, 
    CommonModule,
    FormsModule,
    MatFormFieldModule],
  templateUrl: './pitch-details.component.html',
  styleUrl: './pitch-details.component.css'
})
export class PitchDetailsComponent implements OnInit {
  pitch: PitchDetailsInterface | null = null;
  selected: Date | null = null;
  selectedDate: Date | null = null;
  selectedTime: string = '';

  constructor(
    private route: ActivatedRoute, 
    private pitchService: PitchService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const pitchId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Pitch ID:', pitchId)
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

  bookPitch() {
    // This method will handle the booking logic when the user clicks the "Book Pitch" button.
    if (this.selectedDate && this.selectedTime) {
      console.log('Pitch booked for:', this.selectedDate, 'at', this.selectedTime);
      // You can send this data to your backend to create a booking
    } else {
      console.error('Please select a date and time.');
    }
  }


}