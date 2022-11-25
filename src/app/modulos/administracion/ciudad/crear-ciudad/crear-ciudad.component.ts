import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCiudad } from 'src/app/modelos/ciudad.modelo';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit{

  listadoDepartamentos: ModeloDepartamento[]=[];




  fbvalidador: FormGroup = this.fb.group({
    'codigo':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'departamentoId':['',[Validators.required]],
    
  });

  constructor(private fb:FormBuilder,
    private servicioCiudad: CiudadService,
    private router: Router,
    private servicioDepartamento: DepartamentoService){

  }

  ngOnInit(): void {
    this.ListarDepartamentos();
        
  }

  ListarDepartamentos(){
    return this.servicioDepartamento.ObtenerDepartamentos().subscribe((datos: ModeloDepartamento[]) => {
      this.listadoDepartamentos = datos;
    });
  }

  GuardarCiudad(){
    let codigo =this.fbvalidador.controls["codigo"].value;
   
    let nombre = this.fbvalidador.controls['nombre'].value;
   
    let departamentoId = this.fbvalidador.controls['departamentoId'].value;
    

    let p = new ModeloCiudad();

    p.codigo=codigo;
    p.nombre=nombre;
    p.departamentoId=departamentoId;
    

    this.servicioCiudad.CrearCiudad(p).subscribe((datos: ModeloCiudad)=>{
      alert('Ciudad creada.');
      this.router.navigate(['/administracion/buscar-ciudad']);
    },(error:any) =>{
      alert('Error almacenando la ciudad.')
    });


  }

}
