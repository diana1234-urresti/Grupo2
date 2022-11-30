import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloCiudad } from 'src/app/modelos/ciudad.modelo';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { CiudadService } from 'src/app/servicios/ciudad.service';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-eliminar-ciudad',
  templateUrl: './eliminar-ciudad.component.html',
  styleUrls: ['./eliminar-ciudad.component.css']
})
export class EliminarCiudadComponent implements OnInit {

  id : string = '';
  //listadoDepartamentos: ModeloDepartamento[]=[];




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
    this.BuscarCiudad();
    //this.ListarDepartamentos();
        
  }

  BuscarCiudad(){
    this.servicioCiudad.ObtenerCiudadesPorId(this.id).subscribe((datos: ModeloCiudad) =>{
      this.fbvalidador.controls['id'].setValue(this.id);
      this.fbvalidador.controls["codigo"].setValue(datos.codigo);   
      this.fbvalidador.controls['nombre'].setValue(datos.nombre);
      this.fbvalidador.controls['departamentoId'].setValue(datos.departamentoId);
    })
  }

  /*ListarDepartamentos(){
    return this.servicioDepartamento.ObtenerDepartamentos().subscribe((datos: ModeloDepartamento[]) => {
      this.listadoDepartamentos = datos;
    });
  }*/

  EliminarCiudad(){
       

    this.servicioCiudad.EliminarCiudad(this.id).subscribe((datos: ModeloCiudad)=>{
      alert('Se ha eliminado la ciudad.');
      this.router.navigate(['/administracion/buscar-ciudad']);
    },(error:any) =>{
      alert('Error al eliminar la ciudad.')
    });


  }

}
