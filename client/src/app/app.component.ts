import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NavComponent } from './Components/nav/nav.component';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    RouterModule, 
    NavComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
}
