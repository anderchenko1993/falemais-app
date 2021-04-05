import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarifaComponent } from './tarifa/tarifa.component';

const routes: Routes = [
  { path: '', component: TarifaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
    TarifaComponent
];
