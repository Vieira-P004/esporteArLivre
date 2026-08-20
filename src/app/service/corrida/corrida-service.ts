import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../../models/corrida';
import { execFile } from 'child_process';

@Injectable({
    providedIn: 'root',
})
export class CorridaService {
    constructor(private http: HttpClient){

    }

    salvarCorrida(corrida: Corrida){
        let resposta =  ''
        const urlApi = `https://6a8629049c451dc67a646a3e.mockapi.io/pamelaRun/`

        this.http.post<Corrida>(urlApi, corrida)
        .subscribe({
            next:(respostaAPI)=> {
                return respostaAPI
            },
            error:(msgErro)=>{
                return msgErro
            }
        })
    }

    listarCorrida(idCorrida: Number){
        const urlApi = `https://6a8629049c451dc67a646a3e.mockapi.io/pamelaRun/${idCorrida}`

        this.http.get<Corrida[]>(urlApi)
        .subscribe({
            next: (respostaApi) => {
                return respostaApi
            },
            error: (msgErro) => {
                return msgErro
            }
        })
    }

    excluirCorrida(idCorrida: Number){
        const urlApi = `https://6a8629049c451dc67a646a3e.mockapi.io/pamelaRun/${idCorrida}`

        this.http.delete<Corrida>(urlApi)
        .subscribe({
            next: (respostaApi) => {
                return respostaApi
            },
            error: (msgErro) => {
                msgErro
            }
        })
    }

    alterarCorrida(corrida: Corrida){
        const urlApi = `https://6a8629049c451dc67a646a3e.mockapi.io/pamelaRun/${corrida.id}`

        this.http.delete<Corrida>(urlApi)
        .subscribe({
            next: (respostaApi) => {
                return respostaApi
            },
            error: (msgErro) => {
                msgErro
            }
        })
    }
}
