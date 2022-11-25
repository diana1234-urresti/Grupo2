import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloAtraccion } from 'src/app/modelos/atraccion.modelo';
import { AtraccionService } from 'src/app/servicios/atraccion.service';

@Component({
  selector: 'app-crear-atraccion',
  templateUrl: './crear-atraccion.component.html',
  styleUrls: ['./crear-atraccion.component.css']
})
export class CrearAtraccionComponent implements OnInit {

  fbvalidador : FormGroup = this.fb.group({
    'codigo' : ['',[Validators.required]],
    'nombre' : ['',[Validators.required]],
    'imagen' : ['',[Validators.required]],
    'estatura' : ['',[Validators.required]],
    'video' : ['',[Validators.required]],
    'descripcion' : ['',[Validators.required]]
  })

  constructor(private fb:FormBuilder,
    private servicioAtraccion:AtraccionService,
    private router:Router){}

  ngOnInit(): void {
    
  }

  GuardarAtraccion(){
    let codigo = this.fbvalidador.controls['codigo'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let imagen = this.fbvalidador.controls['imagen'].value;
    let estatura = this.fbvalidador.controls['estatura'].value;
    let video = this.fbvalidador.controls['video'].value;
    let descripcion = this.fbvalidador.controls['descripcion'].value;

    let p = new ModeloAtraccion();

    p.codigo = codigo;
    p.nombre = nombre;
    p.imagen = imagen;
    p.min_estatura = estatura;
    p.enlace_youtube = video;
    p.descripcion = descripcion;

    this.servicioAtraccion.CrearAtraccion(p).subscribe((datos: ModeloAtraccion) => {
      alert('La comida fue creada.');
      this.router.navigate(['/administracion/buscar-atraccion']);
    },(error: any) => {
      alert('Error en la creación de la comida.');
    })



  }


}
