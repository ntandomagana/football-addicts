import { Component } from '@angular/core';
import { BelowPitchComponent } from '../below-pitch/below-pitch.component';
import { PitchComponent } from '../pitch/pitch.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-home-hero',
  imports: [
    AboutComponent,
    PitchComponent,
    BelowPitchComponent,
  ],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.css'
})
export class HomeHeroComponent {

}
