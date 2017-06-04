import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseSynopsisComponent } from './course-synopsis.component';

describe('CourseSynopsisComponent', () => {
  let component: CourseSynopsisComponent;
  let fixture: ComponentFixture<CourseSynopsisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseSynopsisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseSynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
