import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModeloParque } from 'src/app/modelos/parque.modelo';
import { ParqueService } from 'src/app/servicios/parque.service';

@Component({
  selector: 'app-buscar-parque',
  templateUrl: './buscar-parque.component.html',
  styleUrls: ['./buscar-parque.component.css']
})
export class BuscarParqueComponent implements OnInit {

  listadoParques: ModeloParque[]=[];

  constructor(private parqueServicio: ParqueService,
    private fb: FormBuilder){}



  ngOnInit(): void {
    this.ObtenerListadoParques();
    
  }

  ObtenerListadoParques(){
    this.parqueServicio.ObtenerParques().subscribe((datos: ModeloParque[]) => {
      this.listadoParques=datos;
    })

  }
}
