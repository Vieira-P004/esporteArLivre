import { Atleta } from '../models/Atleta';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class AtletaService {
     //DECLARAÇÃO CONSTRUTOR
  constructor(private http: HttpClient) { }
  private urlApi = 'http://127.0.0.1:8000/pessoa/'

  //ADICIONAR NA API
  adicionarAtleta(atleta: Atleta): Observable<Atleta> {
    

    return this.http.post<Atleta>(`${this.urlApi}`, atleta)
  }

  //LISTAR ATLETAS NA API
  listarAtletas(): Observable<Atleta[]> {
    const urlApi = `http://127.0.0.1:8000/pessoa/`

    return this.http.get<Atleta[]>(urlApi)
  }

  //LISTAR ATLETA
  listarAtleta(idAtleta: number):Observable<Atleta>{
    const urlApi = `http://127.0.0.1:8000/pessoa/${idAtleta}`

    return this.http.get<Atleta>(urlApi)
  }

  salvarAtleta(atleta: Atleta): Observable<Atleta> {
    
    return this.http.post<Atleta>(`${this.urlApi}`, atleta)
  }

  //EXCLUIR NA API
  excluirAtleta(atleta: Atleta): Observable<Atleta> {
    const urlApi = `http://127.0.0.1:8000/pessoa/${atleta.id}`

    return this.http.delete<Atleta>(urlApi)
  }

  //ALTERAR NA API
  alterarAtleta(atleta: Atleta):Observable<Atleta>{
    const urlApi = `http://127.0.0.1:8000/pessoa/${atleta.id}`

    return this.http.put<Atleta>(urlApi, atleta)
  }

  calcularIdade(data_nascimento: string): number{
    const nascimento = new Date (data_nascimento)
    const hoje =  new Date()

    let idade = hoje.getFullYear() - nascimento.getFullYear()
    const mes = hoje.getMonth() - nascimento.getMonth()

    if(mes < 0 || mes === 0 && hoje.getDate() < nascimento.getDate()){
      idade--
    }

    console.log('datinha: ',data_nascimento)
    return idade
  }

  /*
  private atletas: Pessoa[] = []

  adicionar(pessoa: Pessoa) {
    //ARRRRMENGUEEEE PARA GERAR O ID
    pessoa.id = this.atletas.length + 1
    
    this.atletas.push(pessoa)
  }

  listar() {
    console.table(this.atletas)
    return this.atletas
  }

  private localizarAtleta(idAtleta: number){
    return this.atletas.findIndex(elem => elem.id === idAtleta)
  }

  remover(posicaoArray: number){
    this.atletas.splice(1,posicaoArray)
  }

  remover2(pessoa: Pessoa){
    this.atletas = this.atletas.filter(elem => elem.id !== pessoa.id)
  }

  alterar(pessoa : Pessoa){
    let posArray = this.localizarAtleta(pessoa.id)

    if(posArray >=0){
      this.atletas[posArray] = pessoa
    }

  }*/

}
