import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private authService:AuthService,private router:Router){

  }

  signInForm=new FormGroup({
    email:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })
  onSubmit(form:FormGroup) {
    
    this.authService.signIn(form.value).subscribe({
      next: (value) =>{sessionStorage.setItem("jwt",value.token);sessionStorage.setItem("username",value.username)},
      error: (err) => console.error('Observable emitted an error: ' + err),
      complete: () =>this.router.navigate(['/home']),
    });
    
    }

}
