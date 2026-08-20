import { Component, signal } from '@angular/core';
import { CorridaService } from '../../../service/corrida/corrida-service';
import { ListarCorrida } from '../../listar-corrida/listar-corrida';

@Component({
  selector: 'app-corrida-lista',
  imports: [],
  templateUrl: './corrida-lista.html',
  styleUrl: './corrida-lista.css',
})
export class CorridaLista {

  listarCorrida = signal<ListarCorrida[]>([])

  constructor(private corridaService: CorridaService){}

  ngOnInit(){
    this.listar()
  }

  listar(){
  }
}
