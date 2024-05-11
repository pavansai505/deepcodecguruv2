import { Component } from '@angular/core';
import { FooterComponent } from '../../home/footer/footer.component';
import { NavbarComponent } from '../../utilities/navbar/navbar.component';

@Component({
  selector: 'app-course-search',
  standalone: true,
  imports: [FooterComponent,NavbarComponent],
  templateUrl: './course-search.component.html',
  styleUrl: './course-search.component.css'
})
export class CourseSearchComponent {

}
