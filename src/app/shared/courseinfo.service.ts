import { HttpModule,Http,Response } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CourseinfoService {
public courseData;
  constructor(private http:Http) {}
getDetail(){
  this.http.request("https://api.douban.com/v2/book/1220562")
  .subscribe((res:Response) => {
    console.log(res);
    console.log(res.json());
  })
}
}
