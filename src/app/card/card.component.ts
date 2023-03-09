import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { Observable } from 'rxjs';

import { City } from '../City';
import { Pessoa } from '../Pessoa';
import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  nome!:string
  sobrenome!:string

  genSelect:string[] = []
  cities: City[]
  selectedCity!: string
  meses:string[]
  mesAtual!:string
  calendar!:Date
  
  pessoas$!:Observable<Pessoa[]>

  nasc!:Date
  idade!:number
  num!:number
  email!:string

  displayex:boolean = false
  displayatt:boolean = false
  lixeira:boolean = true
  editar!:Pessoa

  listaPessoas!:any;

  pessoa!:Pessoa;

  formInvalid:boolean = false; 
  isOk:boolean = false;

  

  pessoaTrash!:Pessoa

  constructor(private service: PessoaService){
    this.meses = [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ];

    this.cities = [
        {name: 'Brasil', code: ''},
        {name: 'Estados Unidos', code: ''},
        {name: 'Uruguai', code: ''},
        {name: 'Argentina', code: ''},
        {name: 'Paraguai', code: ''}
    ];
  }



  getRegistro():Observable<Pessoa[]>{
    return this.pessoas$ = this.service.getAll()
  }

  onChange(){
    console.log
    if(this.genSelect.length > 1){
      this.genSelect.pop();
    }
  }

  ngOnInit():void{
    this.getRegistro()
  }

  edit(p:Pessoa){ 
    this.displayatt = true
  }

  remover(){
    this.service.remove(this.pessoaTrash.id).subscribe(()=>{
      this.displayex = false;
      alert("Cadastro excluído");
      this.getRegistro().subscribe(()=>{})

    }) 
  }

  trash(p:Pessoa){
    this.pessoaTrash = p
    this.displayex = true
  }

  calcIdade(nasc: any): number {
    return this.idade = moment().diff(nasc, 'years');
  }

  formatDate(){
        const dia  = this.calendar.getDate().toString()
        const ano = this.calendar.getFullYear().toString();
        this.mesAtual = this.meses[this.calendar.getMonth()] 
    return dia+" de "+this.mesAtual+" de "+ano;
  }

  enviaform(){
    if(!this.nome || !this.sobrenome || !this.genSelect || !this.calendar || !this.selectedCity){
      this.formInvalid = true;
      this.isOk = false;
    }
    else{     

      this.calcIdade(this.calendar)

      this.pessoa = {nome:this.nome, sobrenome:this.sobrenome, idade:this.idade, 
        nascimento:this.formatDate(), genero:this.genSelect.toString(), naturalidade:this.selectedCity}

      this.service.put(this.pessoa).subscribe(data=>{console.log(data)})

    }
  }

}


