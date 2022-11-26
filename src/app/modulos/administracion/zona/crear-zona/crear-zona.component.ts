import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloZona } from 'src/app/modelos/zona.modelo';
import { ZonaService } from 'src/app/servicios/zona.service';

@Component({
  selector: 'app-crear-zona',
  templateUrl: './crear-zona.component.html',
  styleUrls: ['./crear-zona.component.css']
})
export class CrearZonaComponent implements OnInit {

  fbvalidador: FormGroup = this.fb.group({
    'codigo': ['',[Validators.required]],
    'nombre' : ['',[Validators.required]],
    'color' : ['',[Validators.required]],
    'descripcion': ['',[Validators.required]],   

  })

  constructor(private fb : FormBuilder,
    private servicioZon : ZonaService,
    private router : Router){}

  ngOnInit(): void {
    
  }

  GuardarZona(){
    let codigo = this.fbvalidador.controls['codigo'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let color = this.fbvalidador.controls['color'].value;
    let descripcion = this.fbvalidador.controls['descripcion'].value;
    

    let p = new ModeloZona();

    p.codigo = codigo;
    p.nombre = nombre;
    p.color = color;
    p.descripcion = descripcion;
    
    this.servicioZon.CrearZona(p).subscribe((datos:ModeloZona) => {
      alert('Se ha creado una zona.');
      this.router.navigate(["/administracion/buscar-zona"]);
    },(error : any) =>{
      alert("Error al crear zona.");      
    })



  }



}
