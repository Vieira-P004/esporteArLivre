import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { ListarCorrida } from './listar-corrida';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { Atleta } from '../../models/Atleta';
import { Subscriber } from 'rxjs';


describe('ListarCorrida', () => {
    let service : ListarCorrida
    let httpMock : HttpTestingController

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        providers: [
          ListarCorrida,
          provideHttpClient
        ]
      }).compileComponents();

      service = TestBed.inject(ListarCorrida)
      httpMock = TestBed.inject(HttpTestingController)
    });

    it('Resultado esperado é calcular corretamente a idade'), () => {
    const resultado = service.calcularIdade('1976-02-28')
    expect(resultado).toBe(50);
    }

    it('Resultado esperado da lista de atletas', () => {
      const atletas: Atleta[] = [{
        "nome": "Rute",
        "sexo": "",
        "cpf": 78945612300,
        "cep": 49001456,
        "rua_logradouro": "Rua Capela",
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "SE",
        "data_nascimento": "1980-02-12",
        "id": 1
      },
    {
      "nome": "Maria",
      "cpf": 78945612300,
      "sexo": "",
      "cep": 49001456,
      "rua_logradouro": "Rua Capela",
      "bairro": "Centro",
      "cidade": "Aracaju",
      "uf": "SE",
      "data_nascimento": "1980-02-12",
      "id": 2
    },
    ]
    })

    service.listaAtletas().subscribe(result => {
      const requisicao = httpMock.expectOne('https.mockapi')

      expect(requisicao.request.method).toBe('GET')

      requisicao.flush(atletas)
    })

    
});
