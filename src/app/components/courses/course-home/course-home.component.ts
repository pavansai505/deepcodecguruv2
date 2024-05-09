import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './course-home.component.html',
  styleUrl: './course-home.component.css',
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class CourseHomeComponent {
  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 20,
    breakpoints: {
        992: {
            spaceBetween: 20
        }
    }
}
changePageToSearch(){}

}
