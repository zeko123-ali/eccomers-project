import { TestBed } from '@angular/core/testing';

import { CatgrsService } from './catgrs.service';

describe('CatgrsService', () => {
  let service: CatgrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatgrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
