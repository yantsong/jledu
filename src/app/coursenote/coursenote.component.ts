import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coursenote',
  templateUrl: './coursenote.component.html',
  styleUrls: ['./coursenote.component.scss']
})
export class CoursenoteComponent implements OnInit {
arr=Array;
  constructor() { }

  ngOnInit() {
    console.log(typeof(this.arr));
  }

}
