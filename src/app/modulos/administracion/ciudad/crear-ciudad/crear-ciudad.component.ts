import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloCiudad } from 'src/app/modelos/ciudad.modelo';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { ModeloParque } from 'src/app/modelos/parque.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { DepartamentoService } from 'src/app/servicios/departamento.service';
import { ParqueService } from 'src/app/servicios/parque.service';

@Component({
  selector: 'app-crear-ciudad',
  templateUrl: './crear-ciudad.component.html',
  styleUrls: ['./crear-ciudad.component.css']
})
export class CrearCiudadComponent implements OnInit{

  listadoDepartamentos: ModeloDepartamento[]=[];
  listadoParques : ModeloParque[] = [];




  fbvalidador: FormGroup = this.fb.group({
    'codigo':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'departamentoId':['',[Validators.required]],
    'parques' : ['',[Validators.required]]
    
  });

  constructor(private fb:FormBuilder,
    private servicioCiudad: CiudadService,
    private servicioParque : ParqueService,
    private router: Router,
    private servicioDepartamento: DepartamentoService){

  }

  ngOnInit(): void {
    this.ListarDepartamentos();
    this.ListarParques();
        
  }

  ListarDepartamentos(){
    return this.servicioDepartamento.ObtenerDepartamentos().subscribe((datos: ModeloDepartamento[]) => {
      this.listadoDepartamentos = datos;
    });
  }

  ObtenerDepartamentoID(nombre : String): String{

    let IdDepartamento : String = '';

    this.servicioDepartamento.ObtenerDepartamentos().subscribe((datos : ModeloDepartamento[]) => {
      this.listadoDepartamentos = datos;
    })
    this.listadoDepartamentos.forEach(departamento => {
      if (departamento.nombre==nombre){
          IdDepartamento = departamento.id!;
      }
      
    });
    return IdDepartamento;

  }

  ListarParques(){
    return this.servicioParque.ObtenerParques().subscribe((datos : ModeloParque[]) => {
      this.listadoParques = datos;
    })
  }

  GuardarCiudad(){
    let codigo =this.fbvalidador.controls["codigo"].value;
   
    let nombre = this.fbvalidador.controls['nombre'].value;
   
    let departamentoId = this.fbvalidador.controls['departamentoId'].value;
    

    let p = new ModeloCiudad();

    p.codigo=codigo;
    p.nombre=nombre;
    p.departamentoId=  this.ObtenerDepartamentoID( departamentoId);
    

    this.servicioCiudad.CrearCiudad(p).subscribe((datos: ModeloCiudad)=>{
      alert('Ciudad creada.');
      this.router.navigate(['/administracion/buscar-ciudad']);
    },(error:any) =>{
      alert('Error almacenando la ciudad.')
    });


  }

}
