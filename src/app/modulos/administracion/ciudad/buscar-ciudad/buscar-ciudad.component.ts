import { Component, OnInit } from '@angular/core';
import { ModeloCiudad } from 'src/app/modelos/ciudad.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';

@Component({
  selector: 'app-buscar-ciudad',
  templateUrl: './buscar-ciudad.component.html',
  styleUrls: ['./buscar-ciudad.component.css']
})
export class BuscarCiudadComponent implements OnInit {

  listadoCiudades: ModeloCiudad[]=[];

  constructor(private ciudadServicio: CiudadService){}

  ngOnInit(): void {
    this.ObtenerListadoCiudades();
    
  }

  ObtenerListadoCiudades(){
    this.ciudadServicio.ObtenerCiudades().subscribe((datos: ModeloCiudad[]) =>{
      this.listadoCiudades=datos;
    })

  }

}
