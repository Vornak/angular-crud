import { NgModule } from '@angular/core';
import { PessoaComponent } from './pessoa/pessoa.component';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';


const routes: Routes = [
  { path: '', component: PessoaComponent },
  { path: 'list', component:CardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
