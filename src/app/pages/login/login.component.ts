import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/datamodels';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError,map } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService);
  failed : boolean = false;
  router = inject(Router);
  user : User = {
    email: '',
    password: ''
  };
  errorMessage : string = '';

  login(){
    this.authService.showLoader.set(true);
    this.authService.login(this.user)
    .subscribe({
      next: (response) => {
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('logged_in', "true");
        this.authService.isUserLoggedIn.set(true);
        this.authService.showLoader.set(false);
        this.router.navigate(["/"]);
      },
      error: (error) => {
        this.failed = true;
        this.authService.showLoader.set(false);
        this.errorMessage = error.error.message;
      }
    })
  }
}
