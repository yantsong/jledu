import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.scss']
})
export class CourselistComponent implements OnInit {
@Input()
courseData:Array<any>;
private currentData:Array<any>;
  constructor() { }
  ngOnInit() {
  }
}
