import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./views/dashboard/dashboard.component";
import {ErrorPageComponent} from "./views/error-page/error-page.component";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'ventas',
        loadChildren: () => import('./views/ventas/ventas.module').then((m) => m.VentasModule)
      },
    ]
  },

  {
    path: 'error',
    component: ErrorPageComponent
  },
  {path: '**', pathMatch: 'full', redirectTo: 'error'}
]
const config: ExtraOptions = {
  useHash: false,
  scrollPositionRestoration: 'top',
  onSameUrlNavigation: 'reload'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
