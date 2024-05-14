import { Component } from '@angular/core';
import { NavbarComponent } from '../../utilities/navbar/navbar.component';
import { FooterComponent } from '../../utilities/footer/footer.component';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  imports: [NavbarComponent,FooterComponent],
  templateUrl: './user-dashboard.component.html',
  styleUrl: './user-dashboard.component.css'
})
export class UserDashboardComponent {

}
