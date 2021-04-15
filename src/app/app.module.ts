import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TarifaComponent } from './tarifa/tarifa.component';
import { MensagemComponent } from './componentes/mensagem/mensagem.component';
import { PlanosComponent } from './componentes/planos/planos.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    TarifaComponent,
    MensagemComponent,
    PlanosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
