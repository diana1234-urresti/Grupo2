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
  listadoDepartamentos : ModeloDepartamento[] = [];

 
  constructor(private ciudadServicio: CiudadService,
    private departamentoServicio : DepartamentoService){}

  ngOnInit(): void {
    this.ObtenerListadoCiudades();
       
  }

  ObtenerListadoCiudades(){
    
    this.ciudadServicio.ObtenerCiudades().subscribe((ciudades: ModeloCiudad[]) =>{
      ciudades.forEach(el => {
        let ciudad = new ModeloCiudad();
        this.departamentoServicio.ObtenerDepartamentosPorId(el.departamentoId!).subscribe((depto: ModeloDepartamento) => {
          ciudad.departamentoId = depto.nombre;
        })         
        ciudad.id = el.id;
        ciudad.codigo = el.codigo;
        ciudad.nombre = el.nombre; 
   

        this.listadoCiudades.push(ciudad);

        
        this.listadoCiudades.forEach(element => {
          console.log(element.nombre)
          console.log(element.departamentoId)
          
        });
        
      });
      
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

