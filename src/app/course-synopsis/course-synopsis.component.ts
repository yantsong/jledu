import { JlcourseService } from 'app/shared/jlcourse.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-synopsis',
  templateUrl: './course-synopsis.component.html',
  styleUrls: ['./course-synopsis.component.scss']
})
export class CourseSynopsisComponent implements OnInit {
private courseData:object;
  constructor( private course:JlcourseService) {
this.courseData = this.course.getDetail();
   }

  ngOnInit() {
  }

}
