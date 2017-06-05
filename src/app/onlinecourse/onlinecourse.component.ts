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
  @Input()
  courseData:Array<any>;
  constructor() { }
  ngOnInit() {
  }
  checkNewCourse(){
    this.onoff = !this.onoff;
    this.key = "fresh";
  }
   checkHotCourse(){
    this.onoff = !this.onoff;
    this.key = "hot";
  }


}
