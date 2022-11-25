import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloAtraccion } from 'src/app/modelos/atraccion.modelo';
import { AtraccionService } from 'src/app/servicios/atraccion.service';

@Component({
  selector: 'app-buscar-atraccion',
  templateUrl: './buscar-atraccion.component.html',
  styleUrls: ['./buscar-atraccion.component.css']
})
export class BuscarAtraccionComponent implements OnInit{

  listadoAtracciones : ModeloAtraccion[] = [];

  

  constructor( private servicioAtraccion : AtraccionService){}

  ngOnInit(): void {
    this.ObtenerListadoAtracciones();
    
  }

  ObtenerListadoAtracciones(){
    this.servicioAtraccion.ObtenerAtraccion().subscribe((datos : ModeloAtraccion[]) => {
      this.listadoAtracciones = datos;
    })


  }



}
