import { Component, OnInit } from '@angular/core';
import {  delay, Observable } from 'rxjs';

import { Pessoa } from '../Pessoa';
import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  nome!:string;
  sobrenome!:string;
  gen!:string;
  
  pessoas!:Pessoa[];
  pessoas$!:Observable<Pessoa[]>

  nasc!:Date;
  idade!:number;
  num!:number;
  email!:string;

  displayex:boolean = false
  displayatt:boolean = false
  lixeira:boolean = true
  editar!:Pessoa

  //clicked:boolean = false;

  constructor(private service: PessoaService){}

  getRegistro():Observable<Pessoa[]>{
    return this.pessoas$ = this.service.getAll()
  }


  ngOnInit():void{
    this.getRegistro()
  }

  edit(p:Pessoa){ 
    this.displayatt = true
    this.service.getOne(p).subscribe((data)=>{
      this.editar = data;
      console.log(this.editar.nome)
    })
    
  }

  info(){
    console.log('info')
  }

  remover(p:any){
    this.service.remove(p).subscribe(()=>{
      this.displayex = false;
      alert("Cadastro excluído");
      this.getRegistro().subscribe(()=>{})
    })
  }

  trash(){
    this.displayex = true

  }
  


}


