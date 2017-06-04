import { Component, OnInit } from '@angular/core';
import { Course, JlcourseService } from "app/shared/jlcourse.service";

@Component({
  selector: 'app-coursepage',
  templateUrl: './coursepage.component.html',
  styleUrls: ['./coursepage.component.scss']
})
export class CoursepageComponent implements OnInit {
private courseData:Array<Course>;

  constructor(private jlcourse: JlcourseService) { }

  ngOnInit() {
    this.courseData = this.jlcourse.getAllCourse();
    console.log(this.courseData);
  }

}
