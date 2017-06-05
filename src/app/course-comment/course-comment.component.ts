import { JlcourseService } from 'app/shared/jlcourse.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-comment',
  templateUrl: './course-comment.component.html',
  styleUrls: ['./course-comment.component.scss']
})
export class CourseCommentComponent implements OnInit {
private courseData:object;
  constructor( private course:JlcourseService) {
this.courseData = this.course.getDetail();
   }
  ngOnInit() {
    console.log(this.courseData);
  }

}
