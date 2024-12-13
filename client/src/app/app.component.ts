import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './Components/nav/nav.component';
import { HomeHeroComponent } from './Components/home-hero/home-hero.component';
import { AboutComponent } from './Components/about/about.component';
import { PitchComponent } from './Components/pitch/pitch.component';
import { BelowPitchComponent } from './Components/below-pitch/below-pitch.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent,HomeHeroComponent, AboutComponent, PitchComponent, BelowPitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
