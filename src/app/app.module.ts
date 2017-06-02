import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { NewsComponent } from './news/news.component';
import { CourseSynopsisComponent } from './course-synopsis/course-synopsis.component';
import { CourseSyllabusComponent } from './course-syllabus/course-syllabus.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseDetailsComponent,
    NewsComponent,
    CourseSynopsisComponent,
    CourseSyllabusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
