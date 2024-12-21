import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PitchDetailsInterface } from '../types/pitch.interface';

@Injectable({
  providedIn: 'root'
})
export class PitchService {



  constructor(private http: HttpClient, private jwtHeaderService: JwtHeaderService) { }
  

  pitches = signal<PitchInterface[]>([]);

  getPitches(): Observable<PitchInterface[]> {
    this.jwtHeaderService.token = localStorage.getItem('token');
    const headers = this.jwtHeaderService.cretaeHeaders();
    return this.http.get<PitchInterface[]>(`${this.url}/pitches`);
  }

  getPichById(id: number): Observable<PitchDetailsInterface[]> {
    const headers = this.jwtHeaderService.createHeaders();
    return this.http.get<PitchDetailsInterface[]>(`${this.url}/pitches/${id}`);
  }
}
