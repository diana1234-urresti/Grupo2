import { Component, OnInit } from '@angular/core';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-buscar-departamento',
  templateUrl: './buscar-departamento.component.html',
  styleUrls: ['./buscar-departamento.component.css']
})
export class BuscarDepartamentoComponent implements OnInit {

  listadoDepartamentos: ModeloDepartamento[]=[];

  constructor(private departamentoServicio: DepartamentoService){}

  ngOnInit(): void {
    this.ObtenerListadoDepartamentos();
    
  }

  ObtenerListadoDepartamentos(){
    this.departamentoServicio.ObtenerDepartamentos().subscribe((datos: ModeloDepartamento[]) =>{
      this.listadoDepartamentos = datos;
    })
  }

}
