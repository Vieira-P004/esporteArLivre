import { TestBed } from '@angular/core/testing';

import { Inscricao } from './inscricao';

describe('Inscricao', () => {
  let service: Inscricao;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Inscricao);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
