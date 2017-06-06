import { CourseinfoService } from './shared/courseinfo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  courseData:object;
  constructor(private course:CourseinfoService){
  }
  title = 'app works!';
  ngOnInit(){
this.courseData=this.course.getCourse();
  }
}
