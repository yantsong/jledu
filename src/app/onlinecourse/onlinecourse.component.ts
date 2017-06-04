import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-onlinecourse',
  templateUrl: './onlinecourse.component.html',
  styleUrls: ['./onlinecourse.component.scss']
})
export class OnlinecourseComponent implements OnInit {
 private key:string = 'hot';
 private kind:string = 'coursestatus'
  @Input()
  courseData:Array<any>;
  constructor() { }
  ngOnInit() {
  }
  checkNewCourse(){
    console.log(111);
    
    this.key = "fresh";
  }

}
