import { TestBed, inject } from '@angular/core/testing';

import { JlcourseService } from './jlcourse.service';

describe('JlcourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JlcourseService]
    });
  });

  it('should be created', inject([JlcourseService], (service: JlcourseService) => {
    expect(service).toBeTruthy();
  }));
});
