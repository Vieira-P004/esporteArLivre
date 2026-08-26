import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { CorridaService } from '../../../service/corrida/corrida-service';
import { Corrida } from '../../../models/corrida';
import { CorridaLista } from './corrida-lista';

describe('CorridaLista', () => {
  let service: CorridaService;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ //o que esse prividers tá fznd????
        CorridaService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(CorridaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Deve listar as corridas', () => {

    const corridaMock: Corrida[] = [
      {
        "data_corrida": "2026-09-15",
        "descricao_corrida": "São Cri Cri",
        "distancia5km": true,
        "distancia10km": true,
        "distancia25km": true,
        "id": 2
      }
    ]

    service.listarCorridas().subscribe(corridas => {
      expect(corridas.length).toBe(1)
      expect(corridas[2].descricao_corrida).toBe('São Cri Cri')
    })

    const request = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/2')

    expect(request.request.method).toBe('GET')
    request.flush(corridaMock) //o que o flush faz??
  })

  it('Deve adicionar a corrida', () => {

    const corridaMock: Corrida = 
      {
        "data_corrida": "2026-09-15",
        "descricao_corrida": "São Cri Cri",
        "distancia5km": true,
        "distancia10km": true,
        "distancia25km": true,
        "id": 2
      }

      service.salvarCorrida(corridaMock).subscribe(corridaMock => {
        expect(corridaMock).toEqual(corridaMock)
      });

      const request = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida');

      expect(request.request.method).toBe('POST');
      expect(request.request.body).toEqual(corridaMock)
      request.flush(corridaMock)
  });

  it('Deve editar uma corrida', () => {
    const corridaMock: Corrida = {
        "data_corrida": "2026-09-15",
        "descricao_corrida": "São Cri Cri",
        "distancia5km": true,
        "distancia10km": true,
        "distancia25km": true,
        "id": 2
    }

    service.alterarCorrida(corridaMock).subscribe(corridaMock => {
      expect(corridaMock).toEqual(corridaMock)
    });

    const request = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/2');

    expect(request.request.method).toBe('PUT');
    expect(request.request.body).toEqual(corridaMock);
    request.flush(corridaMock)
  });

  it('Deve excluir uma corrida', () => {
      const corridaMock: Corrida = {
        "data_corrida": "2026-09-15",
        "descricao_corrida": "São Cri Cri",
        "distancia5km": true,
        "distancia10km": true,
        "distancia25km": true,
        "id": 2
    }

    service.excluirCorrida(2).subscribe(result => {
      expect(result).toEqual(result)
    })

    const request = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/2')

    expect(request.request.method).toBe('DELETE');
    request.flush(corridaMock)
  })

});
