import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCiudad } from 'src/app/modelos/ciudad.modelo';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-editar-ciudad',
  templateUrl: './editar-ciudad.component.html',
  styleUrls: ['./editar-ciudad.component.css']
})
export class EditarCiudadComponent {

  id : string = '';
  listadoDepartamentos: ModeloDepartamento[]=[];




  fbvalidador: FormGroup = this.fb.group({
    'id' : ['',[Validators.required]],
    'codigo':['',[Validators.required]],
    'nombre':['',[Validators.required]],
    'departamentoId':['',[Validators.required]],
    
  });

  constructor(private fb:FormBuilder,
    private servicioCiudad: CiudadService,
    private router: Router,
    private servicioDepartamento: DepartamentoService,
    private route : ActivatedRoute){

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ListarDepartamentos();
        
  }

  BuscarCiudad(){
    this.servicioCiudad.ObtenerCiudadesPorId(this.id).subscribe((datos: ModeloCiudad) =>{
      this.fbvalidador.controls['id'].setValue(this.id);
      this.fbvalidador.controls["codigo"].setValue(datos.codigo);   
      this.fbvalidador.controls['nombre'].setValue(datos.nombre);
      this.fbvalidador.controls['departamentoId'].setValue(datos.departamentoId);
    })
  }

  ListarDepartamentos(){
    return this.servicioDepartamento.ObtenerDepartamentos().subscribe((datos: ModeloDepartamento[]) => {
      this.listadoDepartamentos = datos;
    });
  }

  EditarCiudad(){
    let codigo =this.fbvalidador.controls["codigo"].value;   
    let nombre = this.fbvalidador.controls['nombre'].value;   
    let departamentoId = this.fbvalidador.controls['departamentoId'].value;
    

    let p = new ModeloCiudad();

    p.id = this.id;
    p.codigo = codigo;
    p.nombre = nombre;
    p.departamentoId = departamentoId;
    

    this.servicioCiudad.ActualizarCiudad(p).subscribe((datos: ModeloCiudad)=>{
      alert('Se ha actualizado la ciudad.');
      this.router.navigate(['/administracion/buscar-ciudad']);
    },(error:any) =>{
      alert('Error al actualizar la ciudad.')
    });


  }

}
