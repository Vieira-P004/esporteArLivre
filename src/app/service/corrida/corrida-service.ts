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
        const urlApi = `https://6a8629049c451dc67a646a3e.mockapi.io/pamelaRun/`

        return this.http.post<Corrida>(urlApi, corrida)
       
    }

    listarCorridas(){
        const urlApi = `https://6a8629049c451dc67a646a3e.mockapi.io/pamelaRun`

        return this.http.get<Corrida[]>(urlApi)
    }

    listarCorrida(idCorrida: Number){
        const urlApi = `https://6a8629049c451dc67a646a3e.mockapi.io/pamelaRun/${idCorrida}`

        return this.http.get<Corrida>(urlApi)
    }

    excluirCorrida(idCorrida: Number){
        const urlApi = `https://6a8629049c451dc67a646a3e.mockapi.io/pamelaRun/${idCorrida}`

        return this.http.delete<Corrida>(urlApi)
        
    }

    alterarCorrida(corrida: Corrida){
        const urlApi = `https://6a8629049c451dc67a646a3e.mockapi.io/pamelaRun/${corrida.id}`

        return this.http.put<Corrida>(urlApi, corrida)
    
    }
}
