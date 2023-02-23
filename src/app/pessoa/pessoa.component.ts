import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'

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
  selectedCity!: string;
  meses:string[]
  mesAtual!:string
  
  nome:string = '';
  sobrenome:string = '';
  gen:string[] = [];
  calendar!:Date;
  idade!:any;
  nascimento!:string
  listaPessoas!:any;

  pessoa!:Pessoa;

  formInvalid:boolean = false; 
  isOk:boolean = false;

  ngOnInit(){

  }

  //msgOk:Message[] = [{severity:'success', summary:'Enviado!', detail:'Formulário enviado com sucesso'}] ;

  constructor(private service: PessoaService) {
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

  calcIdade(nasc: any): number {
    return this.idade = moment().diff(nasc, 'years');
  }

  formatDate(){
        const dia  = this.calendar.getDate().toString()
        //const mes  = (this.calendar.getMonth()+1).toString() //+1 pois no getMonth janeiro começa com zero
        const ano = this.calendar.getFullYear().toString();
        this.mesAtual = this.meses[this.calendar.getMonth()] 
    return dia+" de "+this.mesAtual+" de "+ano;
  }
  enviaform(){
    if(!this.nome || !this.sobrenome){
      this.formInvalid = true;
      this.isOk = false;
    }
    else{     
      //FORMULARIO OK
//      this.isOk = false;
//      this.formInvalid = false;



      this.calcIdade(this.calendar)
      console.log(this.selectedCity)
      this.pessoa = {nome:this.nome, sobrenome:this.sobrenome, idade:this.idade, 
        nascimento:this.formatDate(), genero:this.gen.toString(), naturalidade:this.selectedCity}
      this.service.save(this.pessoa).subscribe(data=>(this.listaPessoas = JSON.stringify([data])))
      
      this.getPessoa()
    }
  }

}


