import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {VentasRoutingModule} from "./ventas-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbHighlight, NgbInputDatepicker} from "@ng-bootstrap/ng-bootstrap";
import {VentasListComponent} from "./ventas-list/ventas-list.component";
import { VentasDetalleComponent } from './ventas-detalle/ventas-detalle.component';


@NgModule({
  declarations: [
    VentasListComponent,
    VentasDetalleComponent
  ],
  imports: [
    CommonModule,
    VentasRoutingModule,
    FormsModule,
    NgbHighlight,
    NgbInputDatepicker,
    ReactiveFormsModule
  ]
})
export class VentasModule { }
