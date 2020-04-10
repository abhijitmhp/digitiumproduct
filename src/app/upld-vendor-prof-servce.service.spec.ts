import { TestBed } from '@angular/core/testing';

import { UpldVendorProfServceService } from './upld-vendor-prof-servce.service';

describe('UpldVendorProfServceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpldVendorProfServceService = TestBed.get(UpldVendorProfServceService);
    expect(service).toBeTruthy();
  });
});
