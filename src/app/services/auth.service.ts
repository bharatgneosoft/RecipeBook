import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { User } from '../models/datamodels';
import { catchError, Observable, single, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  http = inject(HttpClient);
  apiUrl = 'http://localhost:8000/api/';
  isUserLoggedIn = signal(false);
  showLoader = signal(false);

  constructor() { 
    if(localStorage.getItem('logged_in')==="true") {
      this.isUserLoggedIn.set(true);
    }
  }

  register(data:User):Observable<any> {
    return this.http.post(this.apiUrl+'register', data);
  }

  login(data:User):Observable<any> {
    return this.http.post(this.apiUrl+'login', data).pipe(
      catchError(error => {
        console.error('Error in login API:', error);
        return throwError(() => error); // Rethrow the error so the component can handle it
      })
    );;
  }

  logout():Observable<any> {
    return this.http.post(this.apiUrl+'logout', {});
  }
}
