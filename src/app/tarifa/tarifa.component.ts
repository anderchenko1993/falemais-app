import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TarifaService } from '../core/tarifa.service';
import { origemDestinoValidator } from './origem-destino.validator';
import { Tarifa } from './tarifa';

@Component({
  selector: 'app-tarifa',
  templateUrl: './tarifa.component.html',
  styleUrls: ['./tarifa.component.css']
})
export class TarifaComponent implements OnInit {

  tarifaForm: FormGroup;
  planos: any[] = [];
  codigos: string[] = [];
  tarifa: any;
  submitted: boolean = false;

  constructor(private tarifaService: TarifaService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.tarifaForm = this.formBuilder.group(
      {
        origem: ['', [Validators.required]],
        destino: ['', [Validators.required]],
        plano: ['', [Validators.required]],
        minutos: ['', [Validators.required]]
      },
      {
        validators: [origemDestinoValidator]
      }
    );

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

  calcular() {
    if (this.tarifaForm.valid) {
      const tarifa = this.tarifaForm.getRawValue() as Tarifa;
      console.log(tarifa);

      this.tarifaService.calculoTarifa(tarifa).subscribe((result: any) => {
        this.tarifa = result;
        this.submitted = true;
      },
        error => alert('Erro ao efetuar o cálculo.'));
    }
  }

}
