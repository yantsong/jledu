import { CourseinfoService } from './shared/courseinfo.service';

import { JlcourseService } from './shared/jlcourse.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {Routes,RouterModule} from '@angular/router'

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FootComponent } from './foot/foot.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CoursenoteComponent } from './coursenote/coursenote.component';
import { NavtabComponent } from './navtab/navtab.component';
import { CourselistComponent } from './courselist/courselist.component';
import { OnlinecourseComponent } from './onlinecourse/onlinecourse.component';
import { RecommendComponent } from './recommend/recommend.component';

import { CourslistComponent } from './courslist/courslist.component';
import { LoginComponent } from './login/login.component';
import { CoursepageComponent } from './coursepage/coursepage.component';
import { ClassifyPipe } from './pipe/classify.pipe';
import { ChangePipe } from './pipe/change.pipe';

import { CourseDetailsComponent } from './course-details/course-details.component';
import { NewsComponent } from './news/news.component';
import { CourseSynopsisComponent } from './course-synopsis/course-synopsis.component';
import { CourseSyllabusComponent } from './course-syllabus/course-syllabus.component';
import { CourseCommentComponent } from './course-comment/course-comment.component';

const rootRouterConfig:Routes=[
  {path:'',redirectTo:'homepage', pathMatch:'full'},
  {path:'homepage',component:HomepageComponent},
  {path:'coursepage',component:CoursepageComponent},
  {path:'course-details/:id',component: CourseDetailsComponent,
    children:[
      {
        path:'course-synopsis',component:CourseSynopsisComponent
      },
      {
        path:'course-syllabus',component:CourseSyllabusComponent
      },
      {
        path:'course-comment',component:CourseCommentComponent
      },
       {
        path:'**',component:CourseSynopsisComponent
      },
    ]
  },
  {path:'**',component:HomepageComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FootComponent,
    HomepageComponent,
    CarouselComponent,
    CoursenoteComponent,
    NavtabComponent,
    CourselistComponent,
    OnlinecourseComponent,
    RecommendComponent,
    CourslistComponent,
    LoginComponent,
    CoursepageComponent,
    ClassifyPipe,
    ChangePipe,
    CourseDetailsComponent,
    NewsComponent,
    CourseSynopsisComponent,
    CourseSyllabusComponent,
    CourseCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig,{useHash:true})
  ],
  providers: [JlcourseService,CourseinfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
