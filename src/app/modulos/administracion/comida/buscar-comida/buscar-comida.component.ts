import { Component, OnInit } from '@angular/core';
import { ModeloComida } from 'src/app/modelos/comida.modelo';
import { ComidaService } from 'src/app/servicios/comida.service';

@Component({
  selector: 'app-buscar-comida',
  templateUrl: './buscar-comida.component.html',
  styleUrls: ['./buscar-comida.component.css']
})
export class BuscarComidaComponent implements OnInit {

  listadoComidas: ModeloComida[] = [];

  constructor(private sevicioComidas : ComidaService){}

  ngOnInit(): void {
    this.ObtenerListadoComidas();
    
  }

  ObtenerListadoComidas(){
    this.sevicioComidas.ObtenerComidas().subscribe((datos : ModeloComida[]) => {
      this.listadoComidas = datos;
    })

  }

}
