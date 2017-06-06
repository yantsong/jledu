import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.scss']
})
export class RecommendComponent implements OnInit {
@Input()
courseData:Object;
private kind:string = "capital"
private key:string = "support"
private index:number = 0;
  constructor() { }
  ngOnInit() {
  }

}
