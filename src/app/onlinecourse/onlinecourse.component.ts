import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-onlinecourse',
  templateUrl: './onlinecourse.component.html',
  styleUrls: ['./onlinecourse.component.scss']
})
export class OnlinecourseComponent implements OnInit {
 private key:string = 'hot';
 private kind:string = 'coursestatus';
 private onoff:boolean = true;
 private currentData:Array<any>;
 
  @Input()
  courseData:Array<any>;
  @Input()
  newData:Array<any>;
  @Input()
  allData:Array<any>;
  constructor() { }
  ngOnInit() {
    console.log(this.courseData);
    this.currentData = this.courseData;
  }

  checkNewCourse(){
    this.onoff = !this.onoff;
    this.key = "fresh";
    this.currentData = this.newData;
  }
   checkHotCourse(){
    this.onoff = !this.onoff;
    this.key = "hot";
    // this.currentData = this.courseData[newCourseList];
  }
   checkAllCourse(){
    this.onoff = !this.onoff;
    this.key = "hot";
    // this.currentData = this.courseData[newCourseList];
  }


}
