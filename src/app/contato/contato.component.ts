import { Component } from '@angular/core';
import { PessoaService } from '../pessoa.service';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {


  

  public tell!:number;
  public email!:string;

  formInvalid:boolean = false;
  isOk:boolean = false;
  
  constructor(private pessoaService: PessoaService){}

  }
 

  
