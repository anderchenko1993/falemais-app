import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TarifaService } from '../core/tarifa.service';
import { Tarifa } from './tarifa';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent implements OnInit {

  tarifa: Tarifa;
  planos: any[] = [];
  codigos: string[] = [];
  resultado: object;

  constructor(private tarifaService: TarifaService) { }

  ngOnInit(): void {
    this.tarifa = new Tarifa;
    this.getPlanos();
    this.getCodigos();
  }

  getPlanos() {
    this.tarifaService.getPlanos().subscribe(planos => {
      this.planos = planos;
    });
  }

  getCodigos() {
    this.codigos = this.tarifaService.getCodigos();
  }

  calcular(form: NgForm) {
    if(form.valid) {
      this.tarifaService.calculoTarifa(this.tarifa).subscribe(result => {
        this.resultado = result;
      },
      error => alert('Erro ao efetuar o cálculo.'));
    }
  }

}
