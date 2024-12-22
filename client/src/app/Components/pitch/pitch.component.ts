import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PitchInterface } from '../../types/pitch.interface';
import { Router } from '@angular/router';
import { PitchService } from '../../services/pitch.service';

@Component({
  selector: 'app-pitch',
  imports: [CommonModule],
  templateUrl: './pitch.component.html',
  styleUrl: './pitch.component.css'
})
export class PitchComponent implements OnInIt {
  pitches: PitchInterface[] | null = [];

  constructor(private router:Router, pitchService:PitchService) {}

  ngOnInIt(): void {
    try {
      this.PitchService.getAllPitches().subscribe((response) => {
        this.pitches = response;
        this.pitches?.forEach((pitches) => {
          this.PitchService.pitches().push(pitches);
        });
      });
    } catch (err) {
      console.error('Error fetching pitches:', err);
    }
  }

  showPitchDetailsPage(id: number | undefined) {
    console.log('Navigating with Product ID: ', id)

    if (id === undefined) {
      console.error('No product ID provided');
      return;
    }
    this.router.navigate(['/pitch-details', id]);
  }

}
