import { TestBed, inject } from '@angular/core/testing';

import { ValidationFormsService } from './validation-forms.service';

describe('ValidationFormsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationFormsService]
    });
  });

  it('should be created', inject([ValidationFormsService], (service: ValidationFormsService) => {
    expect(service).toBeTruthy();
  }));
});
