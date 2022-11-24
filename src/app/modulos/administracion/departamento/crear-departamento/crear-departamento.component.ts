import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-crear-departamento',
  templateUrl: './crear-departamento.component.html',
  styleUrls: ['./crear-departamento.component.css']
})
export class CrearDepartamentoComponent implements OnInit{
  
  fbvalidador: FormGroup = this.fb.group({
    'codigo' : ['',[Validators.required]],
    'nombre' : ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private servicioDepartamento: DepartamentoService,
    private router: Router){}

  ngOnInit(): void {
    
  }

  GuardarDepartamento(){
    let codigo = this.fbvalidador.controls['codigo'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let p = new ModeloDepartamento();

    p.codigo=codigo;
    p.nombre=nombre;

    this.servicioDepartamento.CrearDepartamento(p).subscribe((datos:ModeloDepartamento) =>{
      alert("Departamento guardado.")
      this.router.navigate(['/administracion/buscar-departamento']);
    }, (error:any) => {
      alert("Error en almacenamiento.")
    })
  }

}
