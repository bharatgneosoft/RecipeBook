import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { User } from '../../models/datamodels';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user : User;
  authservice = inject(AuthService)
  router = inject(Router);
  success:boolean = false
  constructor() {
    this.user = {
      name:"",
      email:"",
      password:""
    };
  }

  register() {
    // console.log(this.user);
    this.authservice.register(this.user).subscribe(()=>{
      this.success = true;
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 5000);      
    });
  }
}
