import { TestBed, inject } from '@angular/core/testing';

import { IEXService } from './i-e-x.service';

describe('IEXService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IEXService]
    });
  });

  it('should be created', inject([IEXService], (service: IEXService) => {
    expect(service).toBeTruthy();
  }));
});
