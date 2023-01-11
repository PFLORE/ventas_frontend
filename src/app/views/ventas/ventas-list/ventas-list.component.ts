import {Component, OnInit, ViewChild, ViewChildren} from '@angular/core';
import { Venta, VentaRespuesta, VentaRespuestaM } from 'src/app/core/modelos/Venta';
import { VentasService } from 'src/app/core/services/ventas.service';
import {VentasDetalleComponent} from "../ventas-detalle/ventas-detalle.component";


@Component({
  selector: 'app-ventas-list',
  templateUrl: './ventas-list.component.html',
  styleUrls: ['./ventas-list.component.css'],
})
export class VentasListComponent implements OnInit {

  // @ts-ignore
  @ViewChild('vd') vd: VentasDetalleComponent

  lista : Venta[] = [];
  detalle? : Venta;
  fecha : string = 'null';

  constructor(
    private ventaService : VentasService
  ) {

  }
  ngOnInit(): void {
    this.getListar();
  }

  open() {


  }

  getListar() {
    console.log(this.fecha);
    this.ventaService.getLista(this.fecha).subscribe((res : VentaRespuesta) => {
      this.lista = res.respuesta;
    });
  }

  verDetalle(id : number) {
    this.ventaService.getDetalle(id).subscribe((res : VentaRespuestaM) => {
      this.detalle = res.respuesta;
    });
  }

}
