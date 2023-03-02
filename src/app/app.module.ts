import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import {DialogModule} from 'primeng/dialog';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { ContatoComponent } from './contato/contato.component';
import { PessoaService } from './pessoa.service';
import { PessoaComponent } from './pessoa/pessoa.component';
import { EditarCadastroComponent } from './editar-cadastro/editar-cadastro.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    PessoaComponent,
    ContatoComponent,
    CardComponent,
    EditarCadastroComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    FormsModule,
    BrowserAnimationsModule,
    FieldsetModule,
    CheckboxModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    CalendarModule,
    CommonModule,
    MessageModule,
    MessagesModule,
    InputMaskModule,
    DropdownModule,
    TableModule,
    HttpClientModule,
    MatCardModule,
    ToolbarModule,
    ReactiveFormsModule,
    DialogModule,
    AppRoutingModule

  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
