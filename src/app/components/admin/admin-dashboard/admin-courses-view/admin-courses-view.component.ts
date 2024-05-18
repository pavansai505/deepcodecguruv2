import { Component } from '@angular/core';
import { Course } from '../../../../models/course/course';
import { Router, RouterLink } from '@angular/router';
import { CourseDataService } from '../../../../services/course/course-data.service';
import { CommonModule } from '@angular/common';
import { TruncateStringSizePipe } from '../../../../pipes/truncate-string-size.pipe';

@Component({
  selector: 'app-admin-courses-view',
  standalone: true,
  imports: [CommonModule,RouterLink,TruncateStringSizePipe],
  templateUrl: './admin-courses-view.component.html',
  styleUrl: './admin-courses-view.component.css',
})
export class AdminCoursesViewComponent {
  courses: Course[] = [];
  constructor(
    private router: Router,
    private courseService: CourseDataService
  ) {}
  ngOnInit() {
    this.courseService.getCourses().subscribe({
      next: (value) => (this.courses = value),
      error: (err) => console.error('Observable emitted an error: ' + err),
      complete: () => {},
    });
  }
}
