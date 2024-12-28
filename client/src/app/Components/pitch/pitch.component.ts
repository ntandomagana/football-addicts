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
  styleUrl: './pitch.component.css',
})
export class PitchComponent implements OnInit {
  pitches: PitchInterface[] | null = [];

  constructor(private router: Router, private pitchService: PitchService) {}

  ngOnInit(): void {
    this.fetchAllPitches();
  }

  trackById(index: number, pitch: PitchInterface): number {
    return pitch.id;
  }
  
  fetchAllPitches(): void {
    this.pitchService.getAllPitches().subscribe({
      next: (response: PitchInterface[]) => {
        console.log('Pitches fecthed:', response);
        this.pitches= response;
      },
      error: (error) => {
        console.error('Error  fetching pitches:', error);
      },
    });
  }

  showPitchDetailsPage(id: number): void {
    console.log('Navigating with Product ID: ', id);
    this.router.navigate(['/pitch-details', id]);
  }
}
