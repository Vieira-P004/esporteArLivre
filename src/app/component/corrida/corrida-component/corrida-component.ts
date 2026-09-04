import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Corrida } from '../../../models/corrida';
import { CorridaService } from '../../../service/corrida/corrida-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corrida-component',
  imports: [FormsModule],
  templateUrl: './corrida-component.html',
  styleUrl: './corrida-component.css',
})
export class CorridaComponent {
   id= 0
   descricao_corrida = 'São Cri Cri'
   data_corrida = ''
   distancia_5km = false
   distancia_10km = false
   distancia_25km = false

  idCorrida = 0
  editar = false

   constructor(
    private corridaService: CorridaService, 
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
    ){}

  ngOnInit(){
    this.idCorrida = Number(this.activeRoute.snapshot.paramMap.get('id'))

    if(this.idCorrida > 0 ){
      this.editar = true
      this.carregarDados(this.idCorrida)
    }
  }



   dadosFormulario(){
      const corrida = new Corrida() 
      corrida.descricao_corrida = this.descricao_corrida
      corrida.data_corrida = this.data_corrida
      corrida.distancia_5km = this.distancia_5km
      corrida.distancia_10km = this.distancia_10km
      corrida.distancia_25km = this.distancia_25km

      if(this.editar){
        corrida.id = this.idCorrida

        this.corridaService.alterarCorrida(corrida)
        .subscribe({
          next: (respostaAPI) => {
            return respostaAPI
          },
          error: (msgErro) => {
            return msgErro
          }
        })
      }else{
        this.corridaService.salvarCorrida(corrida)
        .subscribe({
          next: (respostaAPI) => {
            return respostaAPI
          },
          error: (msgErro) => {
            return msgErro
          }
        })
      }

      this.limparDados()
  }

  carregarDados(idCorrida: number){
    this.corridaService.listarCorrida(idCorrida)
    .subscribe({
      next: (dadosCorrida) => {
        this.descricao_corrida = dadosCorrida.descricao_corrida
        this.data_corrida = dadosCorrida.data_corrida
        this.distancia_5km = dadosCorrida.distancia_5km
        this.distancia_10km = dadosCorrida.distancia_10km
        this.distancia_25km = dadosCorrida.distancia_25km

        this.cdr.detectChanges()
      },
      error: (msgErro) => {
        return msgErro
      }
    })
  }

   limparDados(){
      this.descricao_corrida = ''
      this.data_corrida = ''
      this.distancia_5km = false
      this.distancia_10km = false
      this.distancia_25km = false
    }


}
