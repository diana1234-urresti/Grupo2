import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadorSesionGuard } from 'src/app/guardianes/validador-sesion.guard';
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
    component: BuscarAtraccionComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: 'crear-atraccion',
    component: CrearAtraccionComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:  'editar-atraccion/:id',
    component: EditarAtraccionComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: 'eliminar-atraccion/:id',
    component: EliminarAtraccionComponent,
    canActivate : [ValidadorSesionGuard]
  },

  
  //Ciudades

  {
    path:"buscar-ciudad",
    component: BuscarCiudadComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "crear-ciudad",
    component: CrearCiudadComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:  "editar-ciudad/:id",
    component: EditarCiudadComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "eliminar-ciudad/:id",
    component: EliminarCiudadComponent,
    canActivate : [ValidadorSesionGuard]
  },

  //Comidas

  {
    path:"buscar-comida",
    component: BuscarComidaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "crear-comida",
    component: CrearComidaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:  "editar-comida/:id",
    component: EditarComidaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "eliminar-comida",
    component: EliminarComidaComponent,
    canActivate : [ValidadorSesionGuard]
  },

  //Compras

  {
    path:"buscar-compra",
    component: BuscarCompraComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "crear-compra",
    component: CrearCompraComponent,
   
  },
  {
    path:  "editar-compra",
    component: EditarCompraComponent,
  },
  {
    path: "eliminar-compra",
    component: EliminarCompraComponent,
    canActivate : [ValidadorSesionGuard]
  },

  //Configuración

  {
    path:"buscar-configuracion",
    component: BuscarConfiguracionComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "crear-configuracion",
    component: CrearConfiguracionComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:  "editar-configuracion",
    component: EditarConfiguracionComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "eliminar-configuracion",
    component: EliminarConfiguracionComponent,
    canActivate : [ValidadorSesionGuard]
  },

  //Departamento

  {
    path:"buscar-departamento",
    component: BuscarDepartamentoComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "crear-departamento",
    component: CrearDepartamentoComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:  "editar-departamento/:id",
    component: EditarDepartamentoComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "eliminar-departamento/:id",
    component: EliminarDepartamentoComponent,
    canActivate : [ValidadorSesionGuard]
  },

  //Parque

  {
    path:"buscar-parque",
    component: BuscarParqueComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "crear-parque",
    component: CrearParqueComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:  "editar-parque/:id",
    component: EditarParqueComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "eliminar-parque",
    component: EliminarParqueComponent,
    canActivate : [ValidadorSesionGuard]
  },

  //Personas

  {
    path:"buscar-persona",
    component: BuscarPersonaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "crear-persona",
    component: CrearPersonaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:  "editar-persona/:id",
    component: EditarPersonaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "eliminar-persona",
    component: EliminarPersonaComponent,
    canActivate : [ValidadorSesionGuard]
  },

  //Planes

  {
    path:"buscar-plan",
    component: BuscarPlanComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "crear-plan",
    component: CrearPlanComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:  "editar-plan/:id",
    component: EditarPlanComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "eliminar-plan",
    component: EliminarPlanComponent,
    canActivate : [ValidadorSesionGuard]
  },

  //Zonas

  {
    path:"buscar-zona",
    component: BuscarZonaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "crear-zona",
    component: CrearZonaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path:  "editar-zona/:id",
    component: EditarZonaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  {
    path: "eliminar-zona",
    component: EliminarZonaComponent,
    canActivate : [ValidadorSesionGuard]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministracionRoutingModule { }
