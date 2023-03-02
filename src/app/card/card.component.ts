import { Component } from '@angular/core';
import {  delay, Observable } from 'rxjs';

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
  pessoas$!:Observable<Pessoa[]>

  nasc!:Date;
  idade!:number;
  num!:number;
  email!:string;

  display:boolean = false
  lixeira:boolean = true

  //clicked:boolean = false;

  constructor(private service: PessoaService){}


  getRegistro(){
    return this.pessoas$ = this.service.getAll()
  }

  edit(p:any){
    this.display = true;
  }

  info(){
    console.log('info')
  }

  remover(p:any){
    console.log('removido')
    this.service.remove(p).subscribe(()=>{
      this.display = false;
      alert("Cadastro excluído");
      this.getRegistro().subscribe(()=>{})
    })
  }

  trash(){
    this.display = true
  }
  


}
