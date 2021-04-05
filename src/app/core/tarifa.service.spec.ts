import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { TarifaService } from './tarifa.service';

describe('TarifaService', () => {
  let service: TarifaService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TarifaService]
    });
    service = TestBed.inject(TarifaService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('deve ser instanciado', () => {
    expect(service).toBeTruthy();
  });

  it('deve retornar os 4 códigos DDD', () => {
    expect(service.getCodigos().length).toBe(4);
  });

  it('deve retornar os valores das tarifas', fakeAsync(() => {
    const tarifa = { 
      origem: "011",
      destino: "017",
      plano: 1,
      minutos: 40
    };

    service.calculoTarifa(tarifa).subscribe(result => {
      expect(result.comPlano).toEqual(18.7);
      expect(result.semPlano).toEqual(68);
    });

    const request = httpMock.expectOne(req => {
      return req.method === 'POST';
    });

    const mockTarifa = {
      comPlano: 18.7,
      semPlano: 68
    };

    request.flush(mockTarifa);

    tick();
  }));
});
