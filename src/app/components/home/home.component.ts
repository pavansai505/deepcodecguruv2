import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { BenefitsComponent } from './benefits/benefits.component';
import { NumbersDataComponent } from './numbers-data/numbers-data.component';
import { CoursesBrochureComponent } from './courses-brochure/courses-brochure.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent,BenefitsComponent,NumbersDataComponent,CoursesBrochureComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
