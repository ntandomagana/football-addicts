import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
export class PitchComponent implements OnInit {
  pitches: PitchInterface[] | null = [];

  constructor(private router:Router, private pitchService: PitchService) {}

  ngOnInit(): void {

    // this.fetchPitches();

    try {
      this.pitchService.getAllPitches().subscribe((response) => {
        this.pitches = response;
        this.pitches?.forEach((pitches) => {
          this.pitchService.pitches().push(pitches);
        });
      });
    } catch (err) {
      console.error('Error fetching pitches:', err);
    }
  }

  fetchPitches(): void {
    this.pitchService.getAllPitches().subscribe({
      next: (response) => {
        this.pitches = response;
        console.log('Pitches fecthed:', this.pitches);
      },
      error: (error) => {
        console.error('Error fetching pitches:', error);
      }
    });
  }

  showPitchDetailsPage(id: number): void {
    console.log('Navigating with Product ID: ', id)

    if (id === undefined) {
      console.error('No product ID provided');
      return;
    }
    this.router.navigate(['/pitch-details', id]);
  }

}
