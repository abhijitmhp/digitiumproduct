import { TestBed } from '@angular/core/testing';

import { VendoruploadService } from './vendorupload.service';

describe('VendoruploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VendoruploadService = TestBed.get(VendoruploadService);
    expect(service).toBeTruthy();
  });
});
