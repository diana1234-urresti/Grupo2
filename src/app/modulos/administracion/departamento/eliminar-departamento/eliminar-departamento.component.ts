import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-eliminar-departamento',
  templateUrl: './eliminar-departamento.component.html',
  styleUrls: ['./eliminar-departamento.component.css']
})
export class EliminarDepartamentoComponent {

  
  id: string ='';

  fbvalidador: FormGroup = this.fb.group({
    'id' : ['',[Validators.required]],
    'codigo' : ['',[Validators.required]],
    'nombre' : ['',[Validators.required]]
  });

  constructor(private fb: FormBuilder, 
    private servicioDepartamento: DepartamentoService,
    private router: Router,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarDepartamento();    
  }

  BuscarDepartamento(){
    this.servicioDepartamento.ObtenerDepartamentosPorId(this.id).subscribe((datos: ModeloDepartamento) => {
      this.fbvalidador.controls['id'].setValue(this.id);
     this.fbvalidador.controls['codigo'].setValue(datos.codigo);
     this.fbvalidador.controls['nombre'].setValue(datos.nombre); 
    });
  }

  EliminarDepartamento(){
    this.servicioDepartamento.EliminarDepartamento(this.id).subscribe((datos:ModeloDepartamento) =>{
      alert("Departamento Eliminado.");
      this.router.navigate(['/administracion/buscar-departamento']);
    }, (error:any) => {
      alert("Error en la eliminación del departamento.")
    })
  }

  

}
