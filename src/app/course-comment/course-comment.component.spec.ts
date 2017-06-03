import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseCommentComponent } from './course-comment.component';

describe('CourseCommentComponent', () => {
  let component: CourseCommentComponent;
  let fixture: ComponentFixture<CourseCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
