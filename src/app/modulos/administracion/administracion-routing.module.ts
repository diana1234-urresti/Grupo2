import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscarAtraccionComponent } from './atraccion/buscar-atraccion/buscar-atraccion.component';
import { CrearAtraccionComponent } from './atraccion/crear-atraccion/crear-atraccion.component';
import { EditarAtraccionComponent } from './atraccion/editar-atraccion/editar-atraccion.component';
import { EliminarAtraccionComponent } from './atraccion/eliminar-atraccion/eliminar-atraccion.component';
import { BuscarCiudadComponent } from './ciudad/buscar-ciudad/buscar-ciudad.component';
import { CrearCiudadComponent } from './ciudad/crear-ciudad/crear-ciudad.component';
import { EditarCiudadComponent } from './ciudad/editar-ciudad/editar-ciudad.component';
import { EliminarCiudadComponent } from './ciudad/eliminar-ciudad/eliminar-ciudad.component';
import { BuscarComidaComponent } from './comida/buscar-comida/buscar-comida.component';
import { CrearComidaComponent } from './comida/crear-comida/crear-comida.component';
import { EditarComidaComponent } from './comida/editar-comida/editar-comida.component';
import { EliminarComidaComponent } from './comida/eliminar-comida/eliminar-comida.component';
import { BuscarCompraComponent } from './compra/buscar-compra/buscar-compra.component';
import { CrearCompraComponent } from './compra/crear-compra/crear-compra.component';
import { EditarCompraComponent } from './compra/editar-compra/editar-compra.component';
import { EliminarCompraComponent } from './compra/eliminar-compra/eliminar-compra.component';
import { BuscarConfiguracionComponent } from './configuracion/buscar-configuracion/buscar-configuracion.component';
import { CrearConfiguracionComponent } from './configuracion/crear-configuracion/crear-configuracion.component';
import { EditarConfiguracionComponent } from './configuracion/editar-configuracion/editar-configuracion.component';
import { EliminarConfiguracionComponent } from './configuracion/eliminar-configuracion/eliminar-configuracion.component';
import { BuscarDepartamentoComponent } from './departamento/buscar-departamento/buscar-departamento.component';
import { CrearDepartamentoComponent } from './departamento/crear-departamento/crear-departamento.component';
import { EditarDepartamentoComponent } from './departamento/editar-departamento/editar-departamento.component';
import { EliminarDepartamentoComponent } from './departamento/eliminar-departamento/eliminar-departamento.component';
import { BuscarParqueComponent } from './parque/buscar-parque/buscar-parque.component';
import { CrearParqueComponent } from './parque/crear-parque/crear-parque.component';
import { EditarParqueComponent } from './parque/editar-parque/editar-parque.component';
import { EliminarParqueComponent } from './parque/eliminar-parque/eliminar-parque.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarPlanComponent } from './plan/buscar-plan/buscar-plan.component';
import { CrearPlanComponent } from './plan/crear-plan/crear-plan.component';
import { EditarPlanComponent } from './plan/editar-plan/editar-plan.component';
import { EliminarPlanComponent } from './plan/eliminar-plan/eliminar-plan.component';
import { BuscarZonaComponent } from './zona/buscar-zona/buscar-zona.component';
import { CrearZonaComponent } from './zona/crear-zona/crear-zona.component';
import { EditarZonaComponent } from './zona/editar-zona/editar-zona.component';
import { EliminarZonaComponent } from './zona/eliminar-zona/eliminar-zona.component';

const routes: Routes = [
  {
    path:'buscar-atraccion',
    component: BuscarAtraccionComponent
  },
  {
    path: 'crear-atraccion',
    component: CrearAtraccionComponent
  },
  {
    path:  'editar-atraccion',
    component: EditarAtraccionComponent
  },
  {
    path: 'eliminar-atraccion',
    component: EliminarAtraccionComponent
  },

  
  //Ciudades

  {
    path:"buscar-ciudad",
    component: BuscarCiudadComponent
  },
  {
    path: "crear-ciudad",
    component: CrearCiudadComponent
  },
  {
    path:  "editar-ciudad/:id",
    component: EditarCiudadComponent
  },
  {
    path: "eliminar-ciudad",
    component: EliminarCiudadComponent
  },

  //Comidas

  {
    path:"buscar-comida",
    component: BuscarComidaComponent
  },
  {
    path: "crear-comida",
    component: CrearComidaComponent
  },
  {
    path:  "editar-comida",
    component: EditarComidaComponent
  },
  {
    path: "eliminar-comida",
    component: EliminarComidaComponent
  },

  //Compras

  {
    path:"buscar-compra",
    component: BuscarCompraComponent
  },
  {
    path: "crear-compra",
    component: CrearCompraComponent
  },
  {
    path:  "editar-compra",
    component: EditarCompraComponent
  },
  {
    path: "eliminar-compra",
    component: EliminarCompraComponent
  },

  //Configuración

  {
    path:"buscar-configuracion",
    component: BuscarConfiguracionComponent
  },
  {
    path: "crear-configuracion",
    component: CrearConfiguracionComponent
  },
  {
    path:  "editar-configuracion",
    component: EditarConfiguracionComponent
  },
  {
    path: "eliminar-configuracion",
    component: EliminarConfiguracionComponent
  },

  //Departamento

  {
    path:"buscar-departamento",
    component: BuscarDepartamentoComponent
  },
  {
    path: "crear-departamento",
    component: CrearDepartamentoComponent
  },
  {
    path:  "editar-departamento/:id",
    component: EditarDepartamentoComponent
  },
  {
    path: "eliminar-departamento",
    component: EliminarDepartamentoComponent
  },

  //Parque

  {
    path:"buscar-parque",
    component: BuscarParqueComponent
  },
  {
    path: "crear-parque",
    component: CrearParqueComponent
  },
  {
    path:  "editar-parque/:id",
    component: EditarParqueComponent
  },
  {
    path: "eliminar-parque",
    component: EliminarParqueComponent
  },

  //Personas

  {
    path:"buscar-persona",
    component: BuscarPersonaComponent
  },
  {
    path: "crear-persona",
    component: CrearPersonaComponent
  },
  {
    path:  "editar-persona",
    component: EditarPersonaComponent
  },
  {
    path: "eliminar-persona",
    component: EliminarPersonaComponent
  },

  //Planes

  {
    path:"buscar-plan",
    component: BuscarPlanComponent
  },
  {
    path: "crear-plan",
    component: CrearPlanComponent
  },
  {
    path:  "editar-plan",
    component: EditarPlanComponent
  },
  {
    path: "eliminar-plan",
    component: EliminarPlanComponent
  },

  //Zonas

  {
    path:"buscar-zona",
    component: BuscarZonaComponent
  },
  {
    path: "crear-zona",
    component: CrearZonaComponent
  },
  {
    path:  "editar-zona",
    component: EditarZonaComponent
  },
  {
    path: "eliminar-zona",
    component: EliminarZonaComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
