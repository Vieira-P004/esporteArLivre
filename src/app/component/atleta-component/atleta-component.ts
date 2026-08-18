import { Component, ChangeDetectorRef } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AtletaService } from '../../service/atleta-service';
import { Atleta } from '../../models/Atleta';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {

  id = 0
  nome = ''
  cpf = 0
  sexo = ''
  cep = 0
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  editar = false
  idAtleta = 0

  //changeDetector
   constructor(private atletaService: AtletaService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { }
  

  //DECLARANDO AS FUNÇÕES
  exibirDados(){
    console.log(this.nome, this.cpf, this.cep, this.sexo, this.ruaLogradouro, this.bairro, this.cidade, this.uf)
  }

  //Professor
    ngOnInit() {
    this.idAtleta = Number(this.route.snapshot.paramMap.get('id'))

    if (this.idAtleta > 0) {
      this.editar = true
      this.carregaCampo(this.idAtleta)
    }

  }

  //Professor
    carregaCampo(idAtleta: number) {
    this.atletaService.listarAtleta(idAtleta)
      .subscribe({
        next: (objAtleta) => {
          this.id = objAtleta.id
          this.nome = String(objAtleta.nome)
          this.cpf = objAtleta.cpf
          this.sexo = String(objAtleta.sexo)
          this.cep = objAtleta.cep
          this.ruaLogradouro = objAtleta.ruaLogradouro
          this.bairro = objAtleta.bairro
          this.cidade = objAtleta.cidade
          this.uf = objAtleta.uf

          this.cdr.detectChanges()
        }, error: (msgErro) => {
          console.log("Erro ao Listar  o atleta ", msgErro)
        }
      })
  }

  salvarAtleta(){
     const pessoaAtleta = new Atleta()

    pessoaAtleta.nome = this.nome
    pessoaAtleta.cpf = this.cpf
    pessoaAtleta.sexo = this.sexo
    pessoaAtleta.cep = this.cep
    pessoaAtleta.ruaLogradouro = this.ruaLogradouro
    pessoaAtleta.bairro = this.bairro
    pessoaAtleta.cidade = this.cidade
    pessoaAtleta.uf = this.uf

    if (!this.editar) {
      this.atletaService.adicionarAtleta(pessoaAtleta)
        .subscribe({
          next: (resposta) => {
            console.log(resposta)
          },
          error: (msgErro) => {
            console.log("Erro ao cadastrar  o atleta ", msgErro)
          }
        })
    } else {
      pessoaAtleta.id = this.idAtleta
      
      this.atletaService.alterarAtleta(pessoaAtleta)
        .subscribe({
          next: (resposta) => {
            console.log(pessoaAtleta)

            console.log(resposta)
          },
          error: (msgErro) => {
            console.log("Erro ao alterar  o atleta ", msgErro)
          }
        })

      }
    this.limparAtributos()

  }

  listaAtleta(idAtleta: number) {
    this.atletaService.listarAtleta(idAtleta)
      .subscribe({
        next: (dados) => {
          console.table(dados)
        },
        error: (msgErro) => {
          console.log("Erro ao listar atletas ", msgErro)
        }
      })
  }

  limparAtributos(){
    this.nome = ''
    this.cpf = 0
    this.sexo = ''
    this.cep = 0
    this.ruaLogradouro = ''
    this.bairro = ''
    this.cidade = ''
    this.uf = ''
  }

}
