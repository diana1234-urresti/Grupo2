import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloPlan } from 'src/app/modelos/plan.modelo';
import { PlanService } from 'src/app/servicios/plan.service';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.component.html',
  styleUrls: ['./crear-plan.component.css']
})
export class CrearPlanComponent implements OnInit {

  fbvalidador: FormGroup = this.fb.group({
    'codigo': ['',[Validators.required]],
    'nombre' : ['',[Validators.required]],
    'color' : ['',[Validators.required]],
    'precio': ['',[Validators.required]],
    

  })

  constructor(private fb : FormBuilder,
    private sevicioPlan : PlanService,
    private router : Router){}

  ngOnInit(): void {
    
  }

  GuardarPlan(){
    let codigo = this.fbvalidador.controls['codigo'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let color = this.fbvalidador.controls['color'].value;
    let precio = this.fbvalidador.controls['precio'].value;
    

    let p = new ModeloPlan();

    p.codigo = codigo;
    p.nombre = nombre;
    p.color = color;
    p.precio = parseInt(precio);
    
    this.sevicioPlan.CrearPlan(p).subscribe((datos:ModeloPlan) => {
      alert('Se ha creado un plan.');
      this.router.navigate(["/administracion/buscar-plan"]);
    },(error : any) =>{
      alert("Error al crear plan.");      
    })



  }


}
