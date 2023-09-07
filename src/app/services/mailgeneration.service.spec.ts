import { TestBed } from '@angular/core/testing';

import { MailgenerationService } from './mailgeneration.service';

describe('MailgenerationService', () => {
  let service: MailgenerationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MailgenerationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
