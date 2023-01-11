import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {VentasListComponent} from "./ventas-list/ventas-list.component";

const routes: Routes = [
  {
    path: 'lista',
    component: VentasListComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class VentasRoutingModule {
}
