import { TestBed } from '@angular/core/testing';

import { StudentSreviceService } from './student-srevice.service';

describe('StudentSreviceService', () => {
  let service: StudentSreviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentSreviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
