import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCiudad } from 'src/app/modelos/ciudad.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit{

  fbvalidador: FormGroup = this.fb.group({
    'codigo':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'departamentoId':['',[Validators.required]],
    'parques':['',[Validators.required]]
  });

  constructor(private fb:FormBuilder,
    private servicioCiudad: CiudadService,
    private router: Router){

  }

  ngOnInit(): void {
    
  }

  GuardarCiudad(){
    let codigo =this.fbvalidador.controls["codigo"].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let departamentoId = this.fbvalidador.controls['departamentoId'].value;
    let parques = this.fbvalidador.controls['parques'].value;

    let p = new ModeloCiudad();

    p.codigo=codigo;
    p.nombre=nombre;
    p.departamentoId=departamentoId;
    p.parques=parques;

    this.servicioCiudad.CrearCiudad(p).subscribe((datos: ModeloCiudad)=>{
      alert('Ciudad creada.');
      this.router.navigate(['/administracion/buscar-ciudad']);
    },(error:any) =>{
      alert('Error almacenando la ciudad.')
    });


  }

}
