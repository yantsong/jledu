import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.scss']
})
export class CourselistComponent implements OnInit {
private arr:Function=Array;
@Input()
num:number=4;
  constructor() { }

  ngOnInit() {
  }

}
