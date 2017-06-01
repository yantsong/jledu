import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navtab',
  templateUrl: './navtab.component.html',
  styleUrls: ['./navtab.component.scss']
})
export class NavtabComponent implements OnInit {

@Input()
 title:string = "精彩课程";
@Input()
 tips:string="更多>"
  constructor() { }

  ngOnInit() {
  }

}
