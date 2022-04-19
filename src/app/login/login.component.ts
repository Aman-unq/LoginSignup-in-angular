import { Router } from '@angular/router';
import { LsService } from './../ls.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private ls: LsService, private router: Router) { }
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })
  ngOnInit() { }
  login() {
      this.ls.login(this.loginForm.value)
    // this.http.get<any>("http://localhost:3000/signupUsersList")
      .subscribe((res) => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
        });
        if (user) {
          alert('Login Succesful');
          this.loginForm.reset()
          this.router.navigate(["home"])
        } else {
          alert("user not found")
        }
      }, err => {
        alert("Something went wrong")
      })
  }}

  


