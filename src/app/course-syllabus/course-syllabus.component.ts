import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course-syllabus',
  templateUrl: './course-syllabus.component.html',
  styleUrls: ['./course-syllabus.component.scss']
})
export class CourseSyllabusComponent implements OnInit {
coursekey:boolean=true;
  constructor() { }

  ngOnInit() {
  }
onoff(){
  this.coursekey=!this.coursekey;
}
}
