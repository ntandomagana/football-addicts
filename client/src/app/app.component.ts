import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './Components/nav/nav.component';
import { HomeHeroComponent } from './Components/home-hero/home-hero.component';
import { AboutComponent } from './Components/about/about.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavComponent,HomeHeroComponent, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
