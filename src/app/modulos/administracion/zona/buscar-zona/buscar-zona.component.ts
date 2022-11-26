import { Component, OnInit } from '@angular/core';
import { ModeloZona } from 'src/app/modelos/zona.modelo';
import { ZonaService } from 'src/app/servicios/zona.service';

@Component({
  selector: 'app-buscar-zona',
  templateUrl: './buscar-zona.component.html',
  styleUrls: ['./buscar-zona.component.css']
})
export class BuscarZonaComponent implements OnInit{

  listadoZonas : ModeloZona[] = [];
  
  
  constructor(private servicioZona:ZonaService){}

  ngOnInit(): void {
    this.ObtenerListadoZonas();    
  }

  ObtenerListadoZonas(){
    this.servicioZona.ObtenerZonas().subscribe((datos : ModeloZona[]) => {
      this.listadoZonas=datos;
    })
  }

}
