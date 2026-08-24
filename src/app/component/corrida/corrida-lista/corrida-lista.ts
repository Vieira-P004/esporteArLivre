import { Component, signal } from '@angular/core';
import { CorridaService } from '../../../service/corrida/corrida-service';
import { Corrida } from '../../../models/corrida';
import { Router } from '@angular/router';

@Component({
  selector: 'app-corrida-lista',
  imports: [],
  templateUrl: './corrida-lista.html',
  styleUrl: './corrida-lista.css',
})
export class CorridaLista {

  listarCorridas = signal<Corrida[]>([])

  constructor(
    private corridaService: CorridaService,
    private router: Router
    ){}

  ngOnInit(){
    this.listar()
  }

  listar(){
    this.corridaService.listarCorridas()
    .subscribe({
      next:(dadosCorrida) => {
        this.listarCorridas.set([...dadosCorrida])
      },
      error: (msgErro) => {
        console.log(msgErro)
      }
    })
  }

  excluir(objCorrida: Corrida){
    if(confirm(`Deseja excluir a corrida ${objCorrida.descricao_corrida}`)){
      this.corridaService.excluirCorrida(objCorrida.id)
      .subscribe({
        next:(respostaAPI) => {
          this.listarCorridas.update(elem => 
            elem.filter(a => a.id !== objCorrida.id))
          console.log('Atleta excluído com sucesso', respostaAPI)
        },
        error: (msgErro) => {
          return msgErro
        }
      })
    }

    this.ngOnInit()
  }

  carregarDadosForm(objCorrida: Corrida){
    this.router.navigate(["/alterarCorrida", objCorrida.id])
  }
}
