import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursenoteComponent } from './coursenote.component';

describe('CoursenoteComponent', () => {
  let component: CoursenoteComponent;
  let fixture: ComponentFixture<CoursenoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursenoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursenoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
