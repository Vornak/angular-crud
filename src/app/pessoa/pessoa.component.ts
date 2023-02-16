import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { City } from '../City';
import { Pessoa } from '../Pessoa';
import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {

  cities: City[];
  selectedCity!: City;
  
  nome:string = '';
  sobrenome:string = '';
  gen:string[] = [];
  calendar!:Date;
  idade!:any;
  listaPessoas!:any;

  pessoa!:Pessoa;

  formInvalid:boolean = false; 
  isOk:boolean = false;
  btnCheck:boolean=false; //começa como false para fins de testes

  ngOnInit(){

  }

  //msgOk:Message[] = [{severity:'success', summary:'Enviado!', detail:'Formulário enviado com sucesso'}] ;

  constructor(private service: PessoaService) {

    this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
  }
  onChange(){
    if(this.gen.length > 1){
      this.gen.pop();
    }
  }

  getPessoa(){
   return this.service.getAll().subscribe(data=>(
    this.listaPessoas = JSON.stringify(data)
   ));
  }

  calcIdade(calendar:Date){
    this.idade = [calendar.getDay(), calendar.getMonth(), calendar.getFullYear()]
    return console.log(this.idade)
  }



  enviaform(){
    if(!this.nome || !this.sobrenome || this.calendar){
      this.formInvalid = true;
      this.isOk = false;
    }
    else{     
      //FORMULARIO OK
      this.isOk = false;
      this.formInvalid = false;


      this.pessoa = {nome:this.nome, sobrenome:this.sobrenome}

      this.service.save(this.pessoa).subscribe(data=>(this.listaPessoas = JSON.stringify([data])))
      
      this.getPessoa()
    }
  }

}


