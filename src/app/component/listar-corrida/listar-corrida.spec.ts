import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCorrida } from './listar-corrida';

describe('ListarCorrida', () => {
  let component: ListarCorrida;
  let fixture: ComponentFixture<ListarCorrida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarCorrida],
    }).compileComponents();

    fixture = TestBed.createComponent(ListarCorrida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
