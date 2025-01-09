import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from './Components/nav/nav.component';




@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    RouterModule, 
    NavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
