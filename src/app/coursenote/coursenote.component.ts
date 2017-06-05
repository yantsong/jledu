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
 kind:string='capital';
 key:string='live';
  constructor() { }
  ngOnInit() {
  }

}
