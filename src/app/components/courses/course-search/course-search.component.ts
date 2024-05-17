import { Component } from '@angular/core';
import { FooterComponent } from '../../home/footer/footer.component';
import { NavbarComponent } from '../../utilities/navbar/navbar.component';
import { Course } from '../../../models/course/course';
import { Router } from 'express';
import { CourseDataService } from '../../../services/course/course-data.service';
import { RouterLink } from '@angular/router';
import { TruncateStringSizePipe } from '../../../pipes/truncate-string-size.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-search',
  standalone: true,
  imports: [FooterComponent,NavbarComponent,RouterLink,TruncateStringSizePipe,CommonModule],
  templateUrl: './course-search.component.html',
  styleUrl: './course-search.component.css'
})
export class CourseSearchComponent {
  courses:Course[]=[]
  constructor(private courseService:CourseDataService){}
  ngOnInit(){
    this.courseService.getCourses().subscribe({
      next: (value) =>this.courses=value,
      error: (err) => console.error('Observable emitted an error: ' + err),
      complete: () =>{}
    });
    
  }
}
