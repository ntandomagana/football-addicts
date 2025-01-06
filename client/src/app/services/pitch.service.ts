import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { PitchDetailsInterface, PitchInterface } from '../types/pitch.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { JwtHeaderService } from './jwt-interceptor.service';


@Injectable({
  providedIn: 'root'
})
export class PitchService {
//my base URL that you find in environemnt
  url = environment.SERVER;



  constructor(private http: HttpClient, 
    private jwtHeaderService: JwtHeaderService) { }
  

  pitches = signal<PitchInterface[]>([]);

  getAllPitches(): Observable<PitchInterface[]> {
    console.log('getting all pitches');
        const headers = this.jwtHeaderService.createHeaders();
    this.jwtHeaderService.token = localStorage.getItem('token');

    return this.http.get<PitchInterface[]>(`${this.url}/pitches`, { headers });
  }

  getPitchById(id: number): Observable<PitchDetailsInterface> {
    const headers = this.jwtHeaderService.createHeaders();
    return this.http.get<PitchDetailsInterface>(`${this.url}/pitch-details/${id}`);
  }
}
