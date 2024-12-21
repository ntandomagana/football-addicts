import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { PitchDetailsInterface, PitchInterface } from '../types/pitch.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PitchService {

  url = environment.SERVER;



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
