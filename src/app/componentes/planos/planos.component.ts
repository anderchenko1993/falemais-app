import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.css']
})
export class PlanosComponent implements OnInit {

  @Input()
  tarifa: any;

  constructor() { }

  ngOnInit(): void {
  }

}
