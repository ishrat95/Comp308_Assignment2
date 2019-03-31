// Student Name: Ishratben Vahora
// StudentID: 300986257
// Date: 2019-03-30
import { TestBed } from '@angular/core/testing';

import { ContactListService } from './contact-list.service';

describe('ContactListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContactListService = TestBed.get(ContactListService);
    expect(service).toBeTruthy();
  });
});
