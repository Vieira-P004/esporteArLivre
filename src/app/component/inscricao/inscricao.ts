import { ChangeDetectorRef, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InscricaoModels } from '../../models/inscricao';
import { InscricaoService } from '../../service/inscricao/inscricao-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-inscricao',
  imports: [FormsModule],
  templateUrl: './inscricao.html',
  styleUrl: './inscricao.css',
})
export class Inscricao {

  id = 0
  atletaCadastrado = false
  buscarCpf = ''
  corridaEscolhida =  false
  distaciaDisponiveis = false
  kit = ''
  categoriaIdade = ''

  idInscricao = 0

  constructor(
    private inscricao: InscricaoService,
    private activeRoute: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ){}

  ngOnInit(){
      this.idInscricao = Number(this.activeRoute.snapshot.paramMap.get('id'))
  }

  formInscricao(){
    const inscricaoNewObg = new InscricaoModels
    inscricaoNewObg.atletaCadastrado = this.atletaCadastrado
    inscricaoNewObg.buscarCpf = this.buscarCpf
    inscricaoNewObg.corridaEscolhida = this.corridaEscolhida
    inscricaoNewObg.distaciaDisponiveis = this.distaciaDisponiveis
    inscricaoNewObg.kit = this.kit
    inscricaoNewObg.categoriaIdade = this.categoriaIdade

    this.limparDados()
  }

  limparDados(){
    this.atletaCadastrado = false
    this.buscarCpf = ''
    this.corridaEscolhida = false
    this.distaciaDisponiveis = false
    this.kit = ''
    this.categoriaIdade = ''
  }
}
