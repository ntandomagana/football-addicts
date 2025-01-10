import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PitchService } from '../../services/pitch.service';
import { PitchDetailsInterface } from '../../types/pitch.interface';
import { HttpClient } from '@angular/common/http';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';


import { MatInputModule } from '@angular/material/input';

import {MatTimepickerModule} from '@angular/material/timepicker';
import { MatIconModule } from '@angular/material/icon';  
import { ReactiveFormsModule } from '@angular/forms';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@Component({
  selector: 'app-pitch-details',
  imports: [MatCardModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    CommonModule,
    MatTimepickerModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule
  
  ],
  templateUrl: './pitch-details.component.html',
  styleUrl: './pitch-details.component.css'
})
export class PitchDetailsComponent implements OnInit {
  pitch: PitchDetailsInterface | null = null;
  // @ViewChild('calendar') calendar: MatCalendar<any>;

  calendarVisible: boolean = false;
  selectedDate: Date | null = null;
  
  selectedTime: string | null = null;
  

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

  openCalendar(): void{
    this.calendarVisible = true;
    console.log('Calendar opened');
  }

  onDateSelect(date: Date): void {
    this.selectedDate = date;
    console.log('Selected date:', this.onDateSelect);
    if (!this.selectedDate) {
      console.error('No date selected');
      return;
    }
  }

  onTimeChange(event: any): void {
    this.selectedTime = event.target.value;
    
    console.log('Selected time:', this.selectedTime);
  }

  bookPitch() {
    if (this.selectedDate && this.selectedTime) {
      console.log('Pitch booked for:', this.selectedDate, 'at', this.selectedTime);
    } else {
      console.error('Please select a date and time.');

      
    }
  }



}
