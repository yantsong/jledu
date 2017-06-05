import { Injectable } from '@angular/core';

@Injectable()
export class JlcourseService {
 public morkCourse:Array<Course> = [];
  constructor() {
     for (var index:number = 0; index < 24; index++) {
  let state:string;
  let capital:string;
  let domain:string;
  let teachInfo:Object;
  state = Math.random()*10>7?"new":Math.random()*10>5?"hot":'fresh';
  capital = Math.random()*10>7?"support":Math.random()*10>5?"online":'live';
  domain = Math.random()*10>7?"it":Math.random()*10>5?"teacher":'School';
  teachInfo = {teacherName:'张三',teachTime:"13:00-15:00",teachDate:"02-12",teacherSrc:'http://wx.jledu.com.cn/images/upload/teacher/20150915/1442297969808.jpg',teacherSummary:"毕业于清华大学"}
  this.morkCourse.push(new Course("技术开发套餐","http://wx.jledu.com.cn/images/upload/course/20161222/1482393428320.jpg",Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),state,domain,capital,index,teachInfo))
}
    console.log(this.morkCourse);
   }
  getAllCourse():any {
    return this.morkCourse;
  }
  getCourseById(id:number):any{
    return this.morkCourse.find(
      (x) =>{ return x.courseid == id} )
  }

}
export class Course {
  constructor(public coursename:string,
              public src:string,
              public sell:number,
              public watch:number,
              public times:number,
              public coursestatus:string,
              public domian:string,
              public capital:string,
              public courseid:number,
              public teachInfo:Object,
            ){
  }
}
