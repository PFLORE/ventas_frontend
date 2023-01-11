import {Component, Input, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { toJSDate } from '@ng-bootstrap/ng-bootstrap/datepicker/ngb-calendar';
import { Venta, VentaRespuestaM } from 'src/app/core/modelos/Venta';
import { VentasService } from 'src/app/core/services/ventas.service';
@Component({
  selector: 'app-ventas-detalle',
  templateUrl: './ventas-detalle.component.html',
  styleUrls: ['./ventas-detalle.component.css'],
})
export class VentasDetalleComponent implements OnInit {


  //@Input() detalle? : Venta;

  detalle : Venta = {
    id: 0,
    fecha: '',
    cliente: {
      id: 0,
      nombres: '',
      apellidos: '',
      dni: '',
      telefono: '',
      email: ''
    },
    detalleVentas: [],
    total : 0
  };

  @Input() set detalles(val : any){
    if(val) {
      this.detalle = val;
    }
  };
  //form!: FormGroup;
  //formCliente! : FormGroup;

  constructor(
    private ventaService : VentasService,
    private formBuilder : FormBuilder
  ) {

  }
  ngOnInit(): void {
    //this.buildFormCliente();
    //this.buildForm();
  }

  /*buildFormCliente() {
    this.formCliente = this.formBuilder.group({
      id: [''],
      nombres: [''],
      apellidos: [''],
      dni: [''],
      telefono: [''],
      email: ['']
    });
  }

  buildForm() {
    this.form = this.formBuilder.group({
      id: [''],
      fecha: [''],
      cliente: this.formCliente,
      detalleVentas: [],
      total : []
    });
  }

  get detalleArr() : any {
    return this.form.get("detalleVentas");
  }
  */
}
