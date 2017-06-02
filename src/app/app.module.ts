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

const rootRouterConfig:Routes=[
  {path:'',component:HomepageComponent},
  {path:'homepage',component:HomepageComponent},
  {path:'coursepage',component:CoursepageComponent},
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
    CoursepageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
