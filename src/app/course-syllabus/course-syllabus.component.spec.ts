import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSyllabusComponent } from './course-syllabus.component';

describe('CourseSyllabusComponent', () => {
  let component: CourseSyllabusComponent;
  let fixture: ComponentFixture<CourseSyllabusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSyllabusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSyllabusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
