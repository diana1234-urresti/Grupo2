import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-editar-plan',
  templateUrl: './editar-plan.component.html',
  styleUrls: ['./editar-plan.component.css']
})
export class EditarPlanComponent implements OnInit {

  id : String = '';

  fbvalidador: FormGroup = this.fb.group({
    'id' : ['',[Validators.required]],
    'codigo': ['',[Validators.required]],
    'nombre' : ['',[Validators.required]],
    'color' : ['',[Validators.required]],
    'precio': ['',[Validators.required]],   

  })

  constructor(private fb : FormBuilder,
    private sevicioPlan : PlanService,
    private router : Router,
    private route : ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    this.ObtenerPlan();  
    
  }

  ObtenerPlan(){
    this.sevicioPlan.ObtenerPlanesPorId(this.id).subscribe((datos : ModeloPlan) => {
      this.fbvalidador.controls['id'].setValue(this.id);
      this.fbvalidador.controls['codigo'].setValue(datos.codigo);
      this.fbvalidador.controls['nombre'].setValue(datos.nombre);
      this.fbvalidador.controls['color'].setValue(datos.color);
      this.fbvalidador.controls['precio'].setValue(datos.precio);
    })
  }

  EditarPlan(){
    let codigo = this.fbvalidador.controls['codigo'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let color = this.fbvalidador.controls['color'].value;
    let precio = this.fbvalidador.controls['precio'].value;
    

    let p = new ModeloPlan();

    p.id = this.id;
    p.codigo = codigo;
    p.nombre = nombre;
    p.color = color;
    p.precio = parseInt(precio);
    
    this.sevicioPlan.ActualizarPlan(p).subscribe((datos:ModeloPlan) => {
      alert('Se ha actualizado el plan.');
      this.router.navigate(["/administracion/buscar-plan"]);
    },(error : any) =>{
      alert("Error en la actualización del plan.");      
    })



  }

}
