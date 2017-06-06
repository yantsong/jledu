import { HttpModule,Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseinfoService {
public courseData:object = {
  allCourseList:[
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
  ],
   newCourseList:[
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
  ],
  mapCourseList:{
     recommen_2:[
      {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
      {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
      {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
      {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
      {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
      {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
      {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
      {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
      {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
      {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
      {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
      {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"}
    ],
   recommen_32:[
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg"}
   ]
  },
  courseDtos:[
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg",liveBeginTime:"尚未开始",liveEndTime:"尚未开始",courseLiveEndTime:"尚未开始",courseliveBeginTime:"尚未开始"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg",liveBeginTime:"尚未开始",liveEndTime:"尚未开始",courseLiveEndTime:"尚未开始",courseliveBeginTime:"尚未开始"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg",liveBeginTime:"尚未开始",liveEndTime:"尚未开始",courseLiveEndTime:"尚未开始",courseliveBeginTime:"尚未开始"},
     {pageBuycount:66,pageViewcount:666,courseName:"正在努力加载..",logo:"http://wx.jledu.com.cn/images/upload/course/20160630/1467281952649.jpg",liveBeginTime:"尚未开始",liveEndTime:"尚未开始",courseLiveEndTime:"尚未开始",courseliveBeginTime:"尚未开始"},
  ]
};
  constructor(private http:Http) {
  }
getCourse(){
  console.log(this.courseData);
  
  this.http.request("http://192.168.10.198/front/ajax/h5Courses")
  .subscribe((res:Response) => {
  this.courseData = res.json().entity;
  console.log(this.courseData);
  })
  return this.courseData;
}

}
