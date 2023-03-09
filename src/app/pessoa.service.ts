import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Pessoa } from './Pessoa';


@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private readonly API = '/api/testes';

  listaPessoas!:string[];
  pessoa!:Pessoa;

  constructor(private http: HttpClient){}

  getAll():Observable<Pessoa[]>{
    return this.http.get<Pessoa[]>(this.API)
  }

  getOne(p:Pessoa):Observable<Pessoa>{
    return this.http.get<Pessoa>(`${this.API}/${p.id}`)
  }

  save(p:any){
    return this.http.post(this.API, p);
  }

  put(p:Pessoa){
    return this.http.put<Pessoa>(`${this.API}/update/${p.id}`, p);
  }
  
  remove(id: any){
    return this.http.delete(`${this.API}/${id}`)
  }
  
}
