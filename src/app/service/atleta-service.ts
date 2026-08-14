import { Pessoa } from '../models/Pessoas';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AtletaService {
    private atletas: Pessoa[] = []

    adicionar(pessoa: Pessoa){
        pessoa.id = this.atletas.length + 1 //gerandor de id fake
        this.atletas.push(pessoa)
    }

    listar(){
        return this.atletas
    }

    private localizarAtleta(idAtleta: number){
        return this.atletas.findIndex(elem => elem.id === idAtleta)
    }

    //o que é o primeiro parâmetro? e o que é o segundo???
    remover(posicaoArray: number){
        this.atletas.splice(1, posicaoArray)
    }

    remover2(pessoa : Pessoa){
        this.atletas = this.atletas.filter(elem => elem.id !== pessoa.id)
    }

    alterar(pessoa : Pessoa){
        let posArray = this.localizarAtleta(pessoa.id)

        if(posArray >=0){
            this.atletas[posArray] = pessoa
        }
    }
}
