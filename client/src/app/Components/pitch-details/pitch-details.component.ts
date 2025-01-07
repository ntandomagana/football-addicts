import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PitchService } from '../../services/pitch.service';
import { PitchDetailsInterface } from '../../types/pitch.interface';

@Component({
  selector: 'app-pitch-details',
  imports: [],
  templateUrl: './pitch-details.component.html',
  styleUrl: './pitch-details.component.css'
})
export class PitchDetailsComponent implements OnInit {
  pitch: PitchDetailsInterface | null = null;

  constructor(private route: ActivatedRoute, private pitchService: PitchService) {}

  ngOnInit(): void {
    const pitchId = Number(this.route.snapshot.paramMap.get('id'));
    console.log('Pitch ID:', pitchId)
    if (pitchId) {
      this.fetchPitchDetails(pitchId);
    }
  }

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
}