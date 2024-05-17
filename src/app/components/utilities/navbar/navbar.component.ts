import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AccessControlService } from '../../../services/auth/access-control.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isUserLoggedIn:boolean=false
  constructor(private router:Router,private accessControl:AccessControlService){
    this.isUserLoggedIn=accessControl.isUserLoggedIn()
  }

changePageToSearch(){
  this.router.navigate(['/courses/search'])
}

}
