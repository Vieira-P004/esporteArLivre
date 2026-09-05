import { Component, signal } from '@angular/core';
import { AtletaService } from '../../../service/atleta-service';
import { AtletaComponent } from '../atleta-component/atleta-component';
import { Atleta } from '../../../models/Atleta';
import { Router } from '@angular/router';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-listar-corrida',
  imports: [],
  templateUrl: './listar-corrida.html',
  styleUrl: './listar-corrida.css',
})
export class ListarCorrida {

  //DECLARAÇÃO ARRAY DO TIPO PESSOA
  //listaAtletas: Atleta[] = []
  listaAtletas = signal<Atleta[]>([])

  //DECLARAÇÃO CONSTRUTOR
  constructor(  
    private listarAtleta: AtletaComponent,
    private listaService: AtletaService,
    private router: Router, 
    private cdr: ChangeDetectorRef
  ) {}

  //EXECUTAR INSTRUÇÕES AO CARREGAR CRIAR O COMPONENTE
  ngOnInit() {
    this.listarAtletas()
  }

  //LISTAR OS ATLETAS
  listarAtletas() {
    this.listaService.listarAtletas()
      .subscribe({
        next: (dados) => {
          //this.listaAtletas = [...dados].sort((a, b) => a.nome.localeCompare(b.nome))
          this.listaAtletas.set([...dados].sort((a, b) => a.nome.localeCompare(String(b.nome))))

          this.cdr.detectChanges()
        },
        error: (msgErro) => {
          console.log("Erro ao cadastrar  o atleta ", msgErro)
        }

      })

  }

  //EXCLUIR ATLETA
  excluirAtleta(atleta: Atleta){
    if(confirm(`Deseja excluir ${atleta.nome} da competição? `)){
      this.listaService.excluirAtleta(atleta)
      .subscribe({
        next:(dados)=>{
           this.listaAtletas.update(elem =>
            elem.filter(a => a.id !== atleta.id)
          );
          
          console.log('Atleta excluído com Sucesso ', dados)
        },
        error: (msgErro) => {
          console.log("Erro ao Excluir  o atleta ", msgErro)
        }
      })

    }
    this.ngOnInit()
  }

  //ALTERAR DADOS
  buscarAtleta(idAtleta: Atleta){
    this.router.navigate(['/cadastroAtleta', idAtleta])
  }

  calcularIdade(data_nascimento: string){
    return this.listaService.calcularIdade(data_nascimento)
  }

  imc(peso: string, altura: string):number {
    return this.listarAtleta.imc(Number(peso), Number(altura))
  }
}
