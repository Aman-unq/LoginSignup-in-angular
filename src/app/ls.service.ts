import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LsService {
  url = "http://localhost:3000/";
  constructor(private http: HttpClient) { }
  signUp(data: any) {
    return this.http.post(this.url + "signupUsers", data)
  }
  login(data: any): Observable<any> {
    return this.http.get(this.url + "signupUsers", data)
  }
}
