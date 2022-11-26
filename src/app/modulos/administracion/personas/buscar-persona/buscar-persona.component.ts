import { Component, OnInit } from '@angular/core';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-buscar-persona',
  templateUrl: './buscar-persona.component.html',
  styleUrls: ['./buscar-persona.component.css']
})
export class BuscarPersonaComponent implements OnInit{

  listadoUsuarios: ModeloUsuario[]=[];

  constructor(private usuarioServicio: UsuarioService){}

  ngOnInit(): void {
    this.ObtenerListadoUsuarios();
    
  }

  ObtenerListadoUsuarios(){
    this.usuarioServicio.ObtenerUsuarios().subscribe((datos: ModeloUsuario[]) =>{
      this.listadoUsuarios = datos;
    })
  }

}
