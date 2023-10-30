import { TestBed } from '@angular/core/testing';

import { FianzasService } from './fianzas.service';

describe('FianzasService', () => {
  let service: FianzasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FianzasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
