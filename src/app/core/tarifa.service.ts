import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Tarifa } from '../tarifa/tarifa';

@Injectable({
  providedIn: 'root'
})
export class TarifaService {

  constructor(private http: HttpClient) { }

  getPlanos(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/planos`);
  }

  getCodigos() {
    return ["011", "016", "017", "018"];
  }

  calculoTarifa(tarifa: Tarifa): Observable<any> {
    return this.http.post(`${environment.baseUrl}/tarifas/calculo`, tarifa);
  }

}
