import { TestBed } from '@angular/core/testing';

import { GallaryService } from './gallary.service';

describe('GallaryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GallaryService = TestBed.get(GallaryService);
    expect(service).toBeTruthy();
  });
});
