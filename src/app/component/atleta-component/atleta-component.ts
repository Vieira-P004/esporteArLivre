import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-atleta-component',
  imports: [FormsModule],
  templateUrl: './atleta-component.html',
  styleUrl: './atleta-component.css',
})
export class AtletaComponent {

  nome = ''
  cpf = ''
  sexo = ''
  cep = ''
  ruaLogradouro = ''
  bairro = ''
  cidade = ''
  uf = ''

  //DECLARANDO AS FUNÇÕES
  exibirDados(){
    console.log(this.nome, this.cpf, this.cep, this.sexo, this.ruaLogradouro, this.bairro, this.cidade, this.uf)
  }
}
