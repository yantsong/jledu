import { CourseinfoService } from './../shared/courseinfo.service';
import { Http } from '@angular/http';
import { AppComponent } from './../app.component';
import { JlcourseService, Course } from './../shared/jlcourse.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
 private courseData:Object;

  constructor(public parent:AppComponent) {
   }
  ngOnInit() {
    this.courseData = this.parent.courseData;
    console.log(this.courseData);
  }

}
