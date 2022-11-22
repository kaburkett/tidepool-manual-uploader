import { TestBed } from '@angular/core/testing';

import { TidepoolService } from './tidepool.service';

describe('TidepoolService', () => {
  let service: TidepoolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TidepoolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
