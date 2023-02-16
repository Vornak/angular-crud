import { Component } from '@angular/core';

import { Pessoa } from '../Pessoa';
import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  nome!:string;
  sobrenome!:string;
  gen!:string;
  
  pessoas!:Pessoa[];

  nasc!:Date;
  idade!:number;
  num!:number;
  email!:string;

  //clicked:boolean = false;

  constructor(private service: PessoaService){}


  //PARA CADA ELEMENTO DA ARRAY QUE RETORNA FAZER UM CARD COM OS DADOS
  getRegistro(){
    this.service.getAll().subscribe(data => (
      this.pessoas = data
    ))
  }
  listaDados(){

  }

  edit(){
    console.log('editar')
  }

  info(){
    console.log('info')
  }

  trash(){
    console.log('trash')
  }
  


}
