import { TestBed } from '@angular/core/testing';

import { ParqueService } from './parque.service';

describe('ParqueService', () => {
  let service: ParqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
