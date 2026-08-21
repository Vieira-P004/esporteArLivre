import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InscricaoModels } from '../../models/inscricao';

@Component({
  selector: 'app-inscricao',
  imports: [],
  templateUrl: './inscricao.html',
  styleUrl: './inscricao.css',
})
export class Inscricao {

  id = 0
  atletaCadastrao = ''
  buscarCpf = ''
  corridaEscolhida =  ''
  distaciaDisponiveis = ''
  kit = ''
  categoriaIdade = ''
}
