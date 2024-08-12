import { TestBed } from '@angular/core/testing';

import { PrintedletterService } from './printedletter.service';

describe('PrintedletterService', () => {
  let service: PrintedletterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintedletterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
