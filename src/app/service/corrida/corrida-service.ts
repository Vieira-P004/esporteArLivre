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
        const urlApi = `http://127.0.0.1:8000/corrida/`

        return this.http.post<Corrida>(urlApi, corrida)
       
    }

    listarCorridas(){
        const urlApi = `http://127.0.0.1:8000/corrida/`

        return this.http.get<Corrida[]>(urlApi)
    }

    listarCorrida(idCorrida: Number){
        const urlApi = `http://127.0.0.1:8000/corrida/${idCorrida}`

        return this.http.get<Corrida>(urlApi)
    }

    excluirCorrida(idCorrida: Number){
        const urlApi = `http://127.0.0.1:8000/corrida/${idCorrida}`

        return this.http.delete<Corrida>(urlApi)
        
    }

    alterarCorrida(corrida: Corrida){
        const urlApi = `http://127.0.0.1:8000/corrida/${corrida.id}`

        return this.http.put<Corrida>(urlApi, corrida)
    
    }
}
