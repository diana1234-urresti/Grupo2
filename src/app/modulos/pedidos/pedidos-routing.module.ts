import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignarPedidoComponent } from './asignar-pedido/asignar-pedido.component';

const routes: Routes = [
  {
    path: "asignar-pedido",
    component: AsignarPedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
