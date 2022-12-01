import { BoundElementProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ModeloCiudad } from 'src/app/modelos/ciudad.modelo';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-buscar-ciudad',
  templateUrl: './buscar-ciudad.component.html',
  styleUrls: ['./buscar-ciudad.component.css']
})
export class BuscarCiudadComponent implements OnInit {

  listadoCiudades: ModeloCiudad[]=[];
 
  constructor(private ciudadServicio: CiudadService,
    private departamentoServicio : DepartamentoService){}

  ngOnInit(): void {
    this.ObtenerListadoCiudades();
       
  }

  ObtenerListadoCiudades(){
    
    this.ciudadServicio.ObtenerCiudades().subscribe((datos: ModeloCiudad[]) =>{
      this.listadoCiudades=datos;
    })
  }

  ObtenerNombreDepartamento(id : String): String{
    let listadoDepartamentos : ModeloDepartamento[] = [];
    let nombreDepartamento : String = '';
    this.departamentoServicio.ObtenerDepartamentos().subscribe((datos : ModeloDepartamento[]) => {
      listadoDepartamentos = datos;
    })

    listadoDepartamentos.forEach(element => {
      if(element.id==id){
        nombreDepartamento=element.id;
      }
      
    });


    return nombreDepartamento;
  }

}
function value(v: any, string: any): any {
  throw new Error('Function not implemented.');
}

