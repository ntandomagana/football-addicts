import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeHeroComponent } from './Components/home-hero/home-hero.component';
import { PitchComponent } from './Components/pitch/pitch.component';
import { BelowPitchComponent } from './Components/below-pitch/below-pitch.component';
import { PitchDetailsComponent } from './Components/pitch-details/pitch-details.component';

export const routes: Routes = [
    
    { path: '', component: HomeHeroComponent },
    { path:'home', component: HomeHeroComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'pitch', component: PitchComponent },
    { path: 'below-pitch', component: BelowPitchComponent },
    { path: 'pitch-details', component: PitchDetailsComponent }
    
]