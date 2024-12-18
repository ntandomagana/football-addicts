import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      surname: ['', [Validators.required]],
      phone_number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  };

  /**
   * onSubmit handles the form submission.
   * It checks if the form is valid and then logs the registration data or alerts the user if the form is invalid.
   */
  onSubmit(): void {
    if (this.registerForm.valid) {
      alert('Registered successfully');
      // this.loginService
      //   .register(
      //     this.registerForm.value.name,
      //     this.registerForm.value.surname,
      //     this.registerForm.value.phone,
      //     this.registerForm.value.email,
      //     this.registerForm.value.password,
      //   )
      //   .subscribe( {
      //     next: (data: any) => {
      //       console.log(data);
      //       alert("User registered successfully")
      //       this.router.navigate(['/login'])
      //       .then(() => {
      //         window.location.reload()
      //       });
      //     },
      //     error: (error: any) => {
      //       alert("User already registered")
      //     }

      //   });
    } else {
      alert('Form is invalid. Please check your inputs.');
    }
  }
}