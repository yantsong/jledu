import { JlcourseService } from 'app/shared/jlcourse.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-syllabus',
  templateUrl: './course-syllabus.component.html',
  styleUrls: ['./course-syllabus.component.scss']
})
export class CourseSyllabusComponent implements OnInit {
coursekey:boolean=true;
private courseData:object;
  constructor( private course:JlcourseService) {
this.courseData = this.course.getDetail();
   }
  ngOnInit() {
  console.log(this.courseData);
  }
onoff(){
  this.coursekey=!this.coursekey;
}
}
