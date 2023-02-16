import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

import { Pessoa } from './Pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = '/api/testes';

  formInvalid:boolean = false;
  isOk:boolean = false;

  nome!:string;
  sobrenome!:string;

  listaPessoas!:string[];
  pessoa!:Pessoa;

  constructor(private http: HttpClient){}

  getAll():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API)
  }

  save(p:any){
    return this.http.post(this.API, p);
  }
  
  
}
