import { JlcourseService } from 'app/shared/jlcourse.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {
  id:number;
  courseData:any;
  recommedData:Array<any>=[];
  constructor(private route: ActivatedRoute,private course: JlcourseService) { 
  this.route.params.subscribe(
    params => {
     this.id = params['id'];
    }
  )
  }
  ngOnInit() {
    this.courseData = this.course.getCourseById(this.id);
    this.recommedData.push(this.course.getCourseById(7));
    console.log(this.recommedData);
  }

}
