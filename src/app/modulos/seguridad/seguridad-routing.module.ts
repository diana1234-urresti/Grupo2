import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';

const routes: Routes = [
  {
    path: "cambio-clave",
    component: CambioClaveComponent
  },
  {
    path: "identificacion",
    component: IdentificacionComponent
  },
  {
    path: "recuperar-clave",
    component:RecuperarClaveComponent
  },
  {
    path: "cerrar-sesion",
    component:CerrarSesionComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
