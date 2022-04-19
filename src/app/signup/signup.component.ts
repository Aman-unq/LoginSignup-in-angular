import { Router } from '@angular/router';
import { LsService } from './../ls.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
  })
  constructor(private ls: LsService, private router: Router) { }

  ngOnInit(): void { }

  signUp() {
    // console.warn(this.signupForm.value)
    this.ls.signUp(this.signupForm.value).subscribe((result) => {
      alert("SignUp Successfull")
      this.signupForm.reset();
      this.router.navigate(['login']);
    })
  }
}
