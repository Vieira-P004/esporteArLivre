import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InscricaoModels } from '../../models/inscricao';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InscricaoService {

    constructor(private http: HttpClient){}

    adicionarAtletaCadastrado(atletaCadastrado: InscricaoModels): Observable<InscricaoModels> {
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida`

        return this.http.post<InscricaoModels>(urlApi, atletaCadastrado)
    }

    buscaPorCpf(cpfAtleta: number){
        const urlApi = `https://6a7f6d923183f5fd884b1a61.mockapi.io/esportearlivre/corrida${cpfAtleta}`

        return this.http.get<InscricaoModels>(urlApi)
    }
}
