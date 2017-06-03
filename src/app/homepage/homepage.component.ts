import { JlcourseService, Course } from './../shared/jlcourse.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
 private courseData:Array<Course>;

  constructor(private jlcourse: JlcourseService) { }

  ngOnInit() {
    this.courseData = this.jlcourse.getAllCourse();
    console.log(this.courseData);
  }

}
