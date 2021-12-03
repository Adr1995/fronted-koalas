import { TestBed } from '@angular/core/testing';

import { HobbieService } from './hobbie.service';

describe('HobbieService', () => {
  let service: HobbieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HobbieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
