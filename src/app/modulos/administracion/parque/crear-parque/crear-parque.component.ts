import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloParque } from 'src/app/modelos/parque.modelo';
import { ParqueService } from 'src/app/servicios/parque.service';

@Component({
  selector: 'app-crear-parque',
  templateUrl: './crear-parque.component.html',
  styleUrls: ['./crear-parque.component.css']
})
export class CrearParqueComponent implements OnInit{
  
  fbvalidador: FormGroup = this.fb.group({
    'codigo': ['',[Validators.required]],
    'nombre' : ['',[Validators.required]],
    'direccion' : ['',[Validators.required]],
    'email' : ['',[Validators.required,Validators.email]],
    'color' : ['',[Validators.required]],
    'visitantes': ['',[Validators.required]],
    'logo' : ['',[Validators.required]],
    'mapa' : ['',[Validators.required]],
    'descripcion' : ['',[Validators.required]]

  })

  constructor(private fb : FormBuilder,
    private sevicioParque : ParqueService,
    private router : Router){}

  ngOnInit(): void {
    
  }

  GuardarParque(){
    let codigo = this.fbvalidador.controls['codigo'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let direccion = this.fbvalidador.controls['direccion'].value;
    let email = this.fbvalidador.controls['email'].value;
    alert(email + '' + typeof(email))
    let color = this.fbvalidador.controls['color'].value;
    alert(color + '' + typeof(color))
    let visitantes = this.fbvalidador.controls['visitantes'].value;
    let logo = this.fbvalidador.controls['logo'].value;
    let mapa = this.fbvalidador.controls['mapa'].value;
    let descripcion = this.fbvalidador.controls['descripcion'].value;

    let p = new ModeloParque();

    p.codigo = codigo;
    p.nombre = nombre;
    p.direccion = direccion;
    p.email = email;
    p.color = color;
    p.max_visitantes_dia = parseInt(visitantes);
    p. logo = logo;
    p.mapa = mapa;
    p.descripcion = descripcion;

    this.sevicioParque.CrearParque(p).subscribe((datos:ModeloParque) => {
      alert('Se ha creado un parque.');
      this.router.navigate(["/administracion/buscar-parque"]);
    },(error : any) =>{
      alert("Error al crear parque.");      
    })



  }



  

}
