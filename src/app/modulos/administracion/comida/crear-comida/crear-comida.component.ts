import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloComida } from 'src/app/modelos/comida.modelo';
import { ComidaService } from 'src/app/servicios/comida.service';

@Component({
  selector: 'app-crear-comida',
  templateUrl: './crear-comida.component.html',
  styleUrls: ['./crear-comida.component.css']
})
export class CrearComidaComponent implements OnInit{

  fbvalidador : FormGroup = this.fb.group({
    'codigo' : ['',[Validators.required]],
    'nombre' : ['',[Validators.required]],
    'imagen' : ['',[Validators.required]],
    'menu' : ['',[Validators.required]]
  })

  constructor(private fb:FormBuilder,
    private servicioComida:ComidaService,
    private router:Router){}

  ngOnInit(): void {
    
  }

  GuardarComida(){
    let codigo = this.fbvalidador.controls['codigo'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let imagen = this.fbvalidador.controls['imagen'].value;
    let menu = this.fbvalidador.controls['menu'].value;

    let p = new ModeloComida();

    p.codigo = codigo;
    p.nombre = nombre;
    p.imagen = imagen;
    p.menu = menu;

    this.servicioComida.CrearComida(p).subscribe((datos: ModeloComida) => {
      alert('La comida fue creada.');
      this.router.navigate(['/administracion/buscar-comida']);
    },(error: any) => {
      alert('Error en la creación de la comida.');
    })



  }

}
