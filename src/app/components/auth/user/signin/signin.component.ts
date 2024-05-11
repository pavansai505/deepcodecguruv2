import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import {  Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';
import { TokenService } from '../../../../services/token/token.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [RouterLink,ReactiveFormsModule,CommonModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(private authService:AuthService,private router:Router,private tokenService:TokenService){

  }

  signInForm=new FormGroup({
    email:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
  })
  onSubmit(form:FormGroup) {
    
    this.authService.signIn(form.value).subscribe({
      next: (value) =>{this.tokenService.setToken("jwt",value.token);this.tokenService.setToken("username",value.username)},
      error: (err) => console.error('Observable emitted an error: ' + err),
      complete: () =>this.router.navigate(['/home']),
    });
    
    }

}
