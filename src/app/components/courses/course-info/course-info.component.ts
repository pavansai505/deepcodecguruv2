import { Component } from '@angular/core';
import { NavbarComponent } from '../../utilities/navbar/navbar.component';
import { FooterComponent } from '../../utilities/footer/footer.component';
import { CourseDataService } from '../../../services/course/course-data.service';
import { ActivatedRoute } from '@angular/router';
import { Course, Lecture } from '../../../models/course/course';

@Component({
  selector: 'app-course-info',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.css',
})
export class CourseInfoComponent {
  course!: Course;
  constructor(
    private courseService: CourseDataService,
    private activatedRouter: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(id).subscribe({
      next: (value) => {
        this.course = value;
      },
      error: (err) => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('LGTM!'),
    });
  }
}
