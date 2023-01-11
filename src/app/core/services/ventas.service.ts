import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Venta, VentaRespuesta, VentaRespuestaM } from '../modelos/Venta';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(
    private http : HttpClient
  ) { }

  getLista(fecha : string): Observable<VentaRespuesta> {
    //return this.http.get<VentaRespuesta>(`${environment.apiUrl}venta/listar?fecha=${fecha}`);
    console.log(fecha);
    
    if(fecha == '') {
      fecha = 'null';
    }

    return this.http.get<VentaRespuesta>(`${environment.apiUrl}venta/listar?fecha=${fecha}`);
  }

  getDetalle(id : number) : Observable<VentaRespuestaM> {
    return this.http.get<VentaRespuestaM>(`${environment.apiUrl}venta/obtener/${id}`);
  }
}