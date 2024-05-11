import { Component, TrackByFunction } from '@angular/core';
import { CourseDataService } from '../../../services/course/course-data.service';
import { Course, Lecture } from '../../../models/course/course';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-lectures',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-lectures.component.html',
  styleUrl: './course-lectures.component.css',
})
export class CourseLecturesComponent {
  course!: Course;
  keysArray: string[] = [];
  unitMap: { [key: string]: any[] } = {};
  currentLecture!:Lecture;
  trackByFn!: TrackByFunction<Lecture>;
  $: any;
  constructor(
    private courseService: CourseDataService,
    private activatedRouter: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));
    this.courseService.getCourseById(id).subscribe({
      next: (value) => {
        this.course = value;
        value.lectures.forEach((item: Lecture) => {
          const key = `${item.unitId} - ${item.unitTitle}`;
          if (!this.unitMap[key]) {
            this.unitMap[key] = [];
          }
          this.unitMap[key].push(item);
        });
        this.keysArray = Object.keys(this.unitMap);
        this.keysArray.sort();
        for (const key of this.keysArray) {
          this.unitMap[key].sort((a, b) => a.lessonId - b.lessonId);
        }
        
      },
      error: (err) => console.error('Observable emitted an error: ' + err),
      complete: () => console.log('LGTM!'),
    });
  }

  setCurrentUnit(lesson:Lecture){
    this.currentLecture=lesson
    console.log(lesson);
    
  }


}
