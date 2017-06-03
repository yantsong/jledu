import { Injectable } from '@angular/core';

@Injectable()
export class JlcourseService {
 public morkCourse:Array<Course> = [];
  constructor() {
     for (var index:number = 0; index < 24; index++) {
  let state:string;
  let capital:string;
  let domain:string;
  state = Math.random()*10>7?"new":Math.random()*10>5?"hot":'fresh';
  capital = Math.random()*10>7?"support":Math.random()*10>5?"online":'live';
  domain = Math.random()*10>7?"it":Math.random()*10>5?"teacher":'School';
  this.morkCourse.push(new Course("技术开发套餐","http://wx.jledu.com.cn/images/upload/course/20161222/1482393428320.jpg",Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),state,domain,capital,index))
}
    console.log(this.morkCourse);
   }
  getAllCourse():any {
    return this.morkCourse;
  }

}
export class Course {
  constructor(public coursename:string,
              public src:string,
              public sell:number,
              public watch:number,
              public time:number,
              public coursestatus:string,
              public domian:string,
              public capital:string,
              public courseid:number
            ){
  }
}
