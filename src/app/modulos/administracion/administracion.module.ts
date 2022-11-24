import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministracionRoutingModule } from './administracion-routing.module';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { BuscarAtraccionComponent } from './atraccion/buscar-atraccion/buscar-atraccion.component';
import { EditarAtraccionComponent } from './atraccion/editar-atraccion/editar-atraccion.component';
import { CrearAtraccionComponent } from './atraccion/crear-atraccion/crear-atraccion.component';
import { EliminarAtraccionComponent } from './atraccion/eliminar-atraccion/eliminar-atraccion.component';
import { BuscarCiudadComponent } from './ciudad/buscar-ciudad/buscar-ciudad.component';
import { CrearCiudadComponent } from './ciudad/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';
import { EliminarCiudadComponent } from './ciudad/eliminar-ciudad/eliminar-ciudad.component';
import { BuscarComidaComponent } from './comida/buscar-comida/buscar-comida.component';
import { CrearComidaComponent } from './comida/crear-comida/crear-comida.component';
import { EditarComidaComponent } from './comida/editar-comida/editar-comida.component';
import { EliminarComidaComponent } from './comida/eliminar-comida/eliminar-comida.component';
import { BuscarDepartamentoComponent } from './departamento/buscar-departamento/buscar-departamento.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { BuscarParqueComponent } from './parque/buscar-parque/buscar-parque.component';
import { CrearParqueComponent } from './parque/crear-parque/crear-parque.component';
import { EditarParqueComponent } from './parque/editar-parque/editar-parque.component';
import { EliminarParqueComponent } from './parque/eliminar-parque/eliminar-parque.component';
import { BuscarCompraComponent } from './compra/buscar-compra/buscar-compra.component';
import { CrearCompraComponent } from './compra/crear-compra/crear-compra.component';
import { EditarCompraComponent } from './compra/editar-compra/editar-compra.component';
import { EliminarCompraComponent } from './compra/eliminar-compra/eliminar-compra.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { CrearConfiguracionComponent } from './configuracion/crear-configuracion/crear-configuracion.component';
import { BuscarConfiguracionComponent } from './configuracion/buscar-configuracion/buscar-configuracion.component';
import { EditarConfiguracionComponent } from './configuracion/editar-configuracion/editar-configuracion.component';
import { EliminarConfiguracionComponent } from './configuracion/eliminar-configuracion/eliminar-configuracion.component';
import { BuscarZonaComponent } from './zona/buscar-zona/buscar-zona.component';
import { CrearZonaComponent } from './zona/crear-zona/crear-zona.component';
import { EditarZonaComponent } from './zona/editar-zona/editar-zona.component';
import { EliminarZonaComponent } from './zona/eliminar-zona/eliminar-zona.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearPersonaComponent,
    BuscarPersonaComponent,
    EliminarPersonaComponent,
    EditarPersonaComponent,
    BuscarAtraccionComponent,
    EditarAtraccionComponent,
    CrearAtraccionComponent,
    EliminarAtraccionComponent,
    BuscarCiudadComponent,
    CrearCiudadComponent,
    EditarCiudadComponent,
    EliminarCiudadComponent,
    BuscarComidaComponent,
    CrearComidaComponent,
    EditarComidaComponent,
    EliminarComidaComponent,
    BuscarDepartamentoComponent,
    CrearDepartamentoComponent,
    EditarDepartamentoComponent,
    EliminarDepartamentoComponent,
    BuscarParqueComponent,
    CrearParqueComponent,
    EditarParqueComponent,
    EliminarParqueComponent,
    BuscarCompraComponent,
    CrearCompraComponent,
    EditarCompraComponent,
    EliminarCompraComponent,
    BuscarPlanComponent,
    CrearPlanComponent,
    EditarPlanComponent,
    EliminarPlanComponent,
    CrearConfiguracionComponent,
    BuscarConfiguracionComponent,
    EditarConfiguracionComponent,
    EliminarConfiguracionComponent,
    BuscarZonaComponent,
    CrearZonaComponent,
    EditarZonaComponent,
    EliminarZonaComponent
  ],
  imports: [
    CommonModule,
    AdministracionRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdministracionModule { }
