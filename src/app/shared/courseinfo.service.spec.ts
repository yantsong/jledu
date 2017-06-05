import { TestBed, inject } from '@angular/core/testing';

import { CourseinfoService } from './courseinfo.service';

describe('CourseinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourseinfoService]
    });
  });

  it('should be created', inject([CourseinfoService], (service: CourseinfoService) => {
    expect(service).toBeTruthy();
  }));
});
