import { Injectable } from '@angular/core';

@Injectable()
export class JlcourseService {
 public morkCourse:Array<Course> = [];
 public morkDetail:CourseDetail;
  constructor() {
     for (var index:number = 0; index < 24; index++) {
  let state:string;
  let capital:string;
  let domain: string;
  state = Math.random()*10>7?'new':Math.random()*10>5?'hot':'fresh';
  capital = Math.random()*10>7?'support':Math.random()*10>5?'online':'live';
  domain = Math.random()*10>7?'it':Math.random()*10>5?'teacher':'School';
  this.morkCourse.push(new Course('技术开发套餐','http://wx.jledu.com.cn/images/upload/course/20161222/1482393428320.jpg',
  Math.floor(Math.random()*100),Math.floor(Math.random()*100),Math.floor(Math.random()*100),state,domain,capital,index,'张三','13:00-15:00','02-12'))
}
    console.log(this.morkCourse);
let teach:Array<any>;
let catalogue:Array<any>;
let comments:Array<any>;
let recommends:Array<any>;
teach = [
  {teachername:'zhangsan',teachersummary:'毕业于清华大学',teachersrc:'http://wx.jledu.com.cn/images/upload/teacher/20150915/1442297969808.jpg'},
  {teachername:'lisi',teachersummary:'毕业于Peking大学',teachersrc:'http://wx.jledu.com.cn/images/upload/teacher/20150915/1442297969808.jpg'}
  ]
comments = [{commenter:'someone',comment:'这是评论的内容',commentdate:new Date()},{commenter:'sometwo',comment:'这是评论的内容2',commentdate:new Date()}];
catalogue = [
              {
                title:'第一章',
                content:['第一节xxx','第二节xxx','第三节xxx']
              },
              {
                title:'第er章',
                content:['第一节xxx','第二节xxx','第三节xxx']
              }
]
  recommends = [new Course('推荐','src',111,111,666,'hot','it','live',2,'李四','1','1')];
this.morkDetail = new CourseDetail('ceshiming',3,666,666,666,teach,'测试描述',catalogue,comments,recommends);
   }
  getDetail(){
    return this.morkDetail;
  }
  getAllCourse():any {
    return this.morkCourse;
  }
  getCourseById(id:number):any{
    return this.morkCourse.find(
      (x) =>{ return x.courseid == id} );
  }

}
export class Course {
  constructor(public coursename: string,
              public src: string,
              public sell: number,
              public watch: number,
              public times: number,
              public coursestatus: string,
              public domian: string,
              public capital: string,
              public courseid: number,
              public teachername: string,
              public teachtime: string,
              public teachedate: string
            ){
  }
}
export class CourseDetail{
  constructor(
    public coursename: string,
    public courseid: number,
    public courseamount: number,
    public coursestudents: number,
    public courseview: number,
    public courseteacherinfo: Array<any>,
    public coursedesc: string,
    public coursecatalogue: Array<any>,
    public coursecomments: Array<any>,
    public courserecommed: Array<any>
  ){}
}
