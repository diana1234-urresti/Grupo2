import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloDepartamento } from 'src/app/modelos/departamento.modelo';
import { DepartamentoService } from 'src/app/servicios/departamento.service';

@Component({
  selector: 'app-editar-departamento',
  templateUrl: './editar-departamento.component.html',
  styleUrls: ['./editar-departamento.component.css']
})
export class EditarDepartamentoComponent implements OnInit {

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

  EditarDepartamento(){
   
    let codigo = this.fbvalidador.controls['codigo'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let p = new ModeloDepartamento();

    p.id=this.id;
    p.codigo=codigo;
    p.nombre=nombre;

    this.servicioDepartamento.ActualizarDepartamento(p).subscribe((datos:ModeloDepartamento) =>{
      alert("Departamento actualizado.");
      this.router.navigate(['/administracion/buscar-departamento']);
    }, (error:any) => {
      alert("Error en la actualización.")
    })
  }

}
