import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [UpperCasePipe, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  loggedIn = false;
  title = 'Recipe Book';
  authService = inject(AuthService);
  router = inject(Router);
  constructor(){}

  ngOnInit(){
    if(localStorage.getItem('token') != "" && localStorage.getItem('logged_in') === "true"){
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  logout(){
    this.authService.logout().subscribe((data)=>{
      this.authService.isUserLoggedIn.set(false);
      localStorage.setItem('logged_in', 'false');
      localStorage.setItem('token', '');
      this.loggedIn = false;
      this.router.navigate(['/login']);
    });    
  }
}
