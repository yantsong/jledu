import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coursenote',
  templateUrl: './coursenote.component.html',
  styleUrls: ['./coursenote.component.scss']
})
export class CoursenoteComponent implements OnInit {
  @Input()
  courseData:Array<any>;
 dataOne:Array<any>;
 dataTwo:Array<any>;
private arr:Function=Array;
  constructor() { }

  ngOnInit() {
    this.dataOne = this.courseData.slice(0,4);
    this.dataTwo = this.courseData.slice(4,8);
    console.log(this.dataOne,this.dataTwo);
    
  }

}
