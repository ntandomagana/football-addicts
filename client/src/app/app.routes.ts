import { Routes } from '@angular/router';
import { RouterModule, Router } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeHeroComponent } from './Components/home-hero/home-hero.component';
import { PitchComponent } from './Components/pitch/pitch.component';
import { BelowPitchComponent } from './Components/below-pitch/below-pitch.component';

export const routes: Routes = [
    { path: '', component: HomeHeroComponent },
    { path: 'pitch', component: PitchComponent },
    { path: 'below-pitch', component: BelowPitchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }
]