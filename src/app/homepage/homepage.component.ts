import { JlcourseService, Course } from './../shared/jlcourse.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
 private morkCourse:Array<Course>;

  constructor(private jlcourse: JlcourseService) { }

  ngOnInit() {
    this.morkCourse = this.jlcourse.getAllCourse();
    console.log(this.morkCourse);
    
  }

}
