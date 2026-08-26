import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Corrida } from '../../models/corrida';

@Injectable({
    providedIn: 'root',
})
export class CorridaService {
    constructor(private http: HttpClient){

    }

    salvarCorrida(corrida: Corrida){
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`

        return this.http.post<Corrida>(urlApi, corrida)
       
    }

    listarCorridas(){
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`

        return this.http.get<Corrida[]>(urlApi)
    }

    listarCorrida(idCorrida: Number){
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`

        return this.http.get<Corrida>(urlApi)
    }

    excluirCorrida(idCorrida: Number){
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${idCorrida}`

        return this.http.delete<Corrida>(urlApi)
        
    }

    alterarCorrida(corrida: Corrida){
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida/${corrida.id}`

        return this.http.put<Corrida>(urlApi, corrida)
    
    }
}
