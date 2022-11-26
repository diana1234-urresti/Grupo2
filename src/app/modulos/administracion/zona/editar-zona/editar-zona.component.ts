import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloZona } from 'src/app/modelos/zona.modelo';
import { ZonaService } from 'src/app/servicios/zona.service';

@Component({
  selector: 'app-editar-zona',
  templateUrl: './editar-zona.component.html',
  styleUrls: ['./editar-zona.component.css']
})
export class EditarZonaComponent implements OnInit {

  id : String = '';

  fbvalidador: FormGroup = this.fb.group({
    'id' : ['',[Validators.required]],
    'codigo': ['',[Validators.required]],
    'nombre' : ['',[Validators.required]],
    'color' : ['',[Validators.required]],
    'descripcion': ['',[Validators.required]],   

  })

  constructor(private fb : FormBuilder,
    private sevicioZona : ZonaService,
    private router : Router,
    private route : ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']; 
    this.ObtenerZonas();  
    
  }

  ObtenerZonas(){
    this.sevicioZona.ObtenerZonaPorId(this.id).subscribe((datos : ModeloZona) => {
      this.fbvalidador.controls['id'].setValue(this.id);
      this.fbvalidador.controls['codigo'].setValue(datos.codigo);
      this.fbvalidador.controls['nombre'].setValue(datos.nombre);
      this.fbvalidador.controls['color'].setValue(datos.color);
      this.fbvalidador.controls['descripcion'].setValue(datos.descripcion);
    })
  }

  EditarZona(){
    let codigo = this.fbvalidador.controls['codigo'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let color = this.fbvalidador.controls['color'].value;
    let descripcion = this.fbvalidador.controls['descripcion'].value;
    

    let p = new ModeloZona();

    p.id = this.id;
    p.codigo = codigo;
    p.nombre = nombre;
    p.color = color;
    p.descripcion = descripcion;
    
    this.sevicioZona.ActualizarZona(p).subscribe((datos:ModeloZona) => {
      alert('Se ha actualizado la zona.');
      this.router.navigate(["/administracion/buscar-zona"]);
    },(error : any) =>{
      alert("Error en la actualización de la zona.");      
    })



  }

}
