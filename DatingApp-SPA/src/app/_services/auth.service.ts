import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private http: HttpClient) { }

  baseUrl = 'http://localhost:5001/api/auth/';

  Login(model: any) {
     return this.http.post(this.baseUrl + 'Login', model)
            .pipe(
              map((response: any) => {
                const user = response;
                if (user) {
                  localStorage.setItem('token', user.token);
                }
              })
            );
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register' , model);
  }

}
