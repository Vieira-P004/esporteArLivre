import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Corrida } from '../../../models/corrida';
import { CorridaService } from '../../../service/corrida/corrida-service';

@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})
export class CorridaComponent {
   id= 0
   descricaoCorrida = '400km'
   dataCorrida = ''
   distancia5km = false
   distancia10km = false
   distancia25km = false

   constructor(private corridaService: CorridaService){}

   dadosFormulario(){
    const corrida = new Corrida() 
    corrida.descricaoCorrida = this.descricaoCorrida
    corrida.dataCorrida = this.dataCorrida
    corrida.distancia5km = this.distancia5km
    corrida.distancia10km = this.distancia10km
    corrida.distancia25km = this.distancia25km

    this.corridaService.salvarCorrida(corrida)

    this.limparDados()
   }

   limparDados(){
    this.descricaoCorrida = ''
    this.dataCorrida = ''
    this.distancia5km = false
    this.distancia10km = false
    this.distancia25km = false
    }

}
