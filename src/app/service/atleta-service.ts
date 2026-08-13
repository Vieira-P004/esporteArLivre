import { Service } from '@angular/core';
import { Pessoa } from '../models/Pessoas';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AtletaService {

    private atletas: Pessoa[] = []

    adicionar(){

    }
}
