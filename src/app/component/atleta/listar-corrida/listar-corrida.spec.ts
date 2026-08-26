import {  TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { AtletaService} from '../../../service/atleta-service';
import { Atleta } from '../../../models/Atleta';


describe('ListarCorrida', () => {

  let service: AtletaService
  let httpMock: HttpTestingController //oq esse rapazinho faz??

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AtletaService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(AtletaService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  it('Deve calcular a idade corretamente', () => {
    const resultado = service.calcularIdade('2004-01-16')

    expect(resultado).toBe(22)
  })

  //======================================//

  it('Deve retornar os atletas', () => {

    const atletasMosck: Atleta[] = [
      {
        "nome": "João",
        "cpf": 12345678910,
        "sexo": "M",
        "cep": 49123123,
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "Se",
        "data_nascimento": "2000-02-25",
        "id": 1,
        "rua_logradouro": "Rua Sei lá das quantas"
      },
      {
        "nome": "Maria",
        "cpf": 11122233302,
        "sexo": "F",
        "cep": 49123123,
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "Se",
        "data_nascimento": "2010-02-20",
        "id": 2,
        "rua_logradouro": "Rua Sei lá das quantas"
      }
      ]
        service.listarAtletas().subscribe(atletas => {
          expect(atletas.length).toBe(2)
          expect(atletas[0].nome).toBe('João')
          expect(atletas[1].nome).toBe('Maria')
        })
    
        const request = httpMock.expectOne('https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta')

        expect(request.request.method).toBe('GET')

        request.flush(atletasMosck)
        })

        //TESTE PARA ADD O ATLETA
        it('deve adicionar uma pessoa', () => {

    const atleta: Atleta =   {
        "nome": "Maria Flor",
        "cpf": 12345678910,
        "sexo": "M",
        "cep": 49123123,
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "Se",
        "data_nascimento": "2000-02-25",
        "id": 3,
        "rua_logradouro": "Rua Sei lá das quantas"
      }


    service.adicionarAtleta(atleta).subscribe(atletas => {

      expect(atletas).toEqual(atletas);

    });


    const request = httpMock.expectOne(
      'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta'
    );


    expect(request.request.method).toBe('POST');

    expect(request.request.body).toEqual(atleta);

    request.flush(atleta);
  });

  //TESTE PARA EDITAR O ATLETA
  it('deve editar um atleta', () => {

   const atleta: Atleta =   {
        "nome": "João Souza",
        "cpf": 12345678910,
        "sexo": "M",
        "cep": 49123123,
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "Se",
        "data_nascimento": "2000-02-25",
        "id": 1,
        "rua_logradouro": "Rua Sei lá das quantas"
   }


    service.alterarAtleta(atleta).subscribe(atletas => {

      expect(atletas).toEqual(atleta);

    });


    const request = httpMock.expectOne(
      'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/1'
    );


    expect(request.request.method).toBe('PUT');

    expect(request.request.body).toEqual(atleta);


    request.flush(atleta);

  });

  //TESTE PARA EXCLUIR O ATLETA
   it('deve excluir um atleta', () => {
    const atleta: Atleta =   {
        "nome": "João Souza",
        "cpf": 12345678910,
        "sexo": "M",
        "cep": 49123123,
        "bairro": "Centro",
        "cidade": "Aracaju",
        "uf": "Se",
        "data_nascimento": "2000-02-25",
        "id": 1,
        "rua_logradouro": "Rua Sei lá das quantas"
   }

  service.excluirAtleta(atleta).subscribe(result => {
    expect(result).toEqual(atleta)
  })


    const request = httpMock.expectOne(
      'https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/atleta/1'
    );


    expect(request.request.method).toBe('DELETE');


    request.flush(atleta);

  });
});
