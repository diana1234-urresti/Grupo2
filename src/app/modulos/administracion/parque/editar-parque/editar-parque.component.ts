import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloParque } from 'src/app/modelos/parque.modelo';
import { ParqueService } from 'src/app/servicios/parque.service';

@Component({
  selector: 'app-editar-parque',
  templateUrl: './editar-parque.component.html',
  styleUrls: ['./editar-parque.component.css']
})
export class EditarParqueComponent implements OnInit {

  id : string = '';

  fbvalidador: FormGroup = this.fb.group({
    'id' : ['',[Validators.required]],
    'codigo': ['',[Validators.required]],
    'nombre' : ['',[Validators.required]],
    'direccion' : ['',[Validators.required]],
    'email' : ['',[Validators.required,Validators.email]],
    'color' : ['',[Validators.required]],
    'visitantes': ['',[Validators.required]],
    'logo' : ['',[Validators.required]],
    'mapa' : ['',[Validators.required]],
    'descripcion' : ['',[Validators.required]]

  })

  constructor(private fb : FormBuilder,
    private sevicioParque : ParqueService,
    private router : Router,
    private route : ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarParque();
  }

  BuscarParque(){
    this.sevicioParque.ObtenerParquesPorId(this.id).subscribe((datos: ModeloParque) => {
      this.fbvalidador.controls['id'].setValue(this.id);
      this.fbvalidador.controls['codigo'].setValue(datos.codigo);
      this.fbvalidador.controls['nombre'].setValue(datos.nombre);
      this.fbvalidador.controls['direccion'].setValue(datos.direccion);
      this.fbvalidador.controls['email'].setValue(datos.email);
      this.fbvalidador.controls['color'].setValue(datos.color);
      this.fbvalidador.controls['visitantes'].setValue(datos.max_visitantes_dia);
      this.fbvalidador.controls['logo'].setValue(datos.logo);
      this.fbvalidador.controls['mapa'].setValue(datos.mapa);
      this.fbvalidador.controls['descripcion'].setValue(datos.descripcion);

    })
  }

  EditarParque(){
    let codigo = this.fbvalidador.controls['codigo'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let direccion = this.fbvalidador.controls['direccion'].value;
    let email = this.fbvalidador.controls['email'].value;
    let color = this.fbvalidador.controls['color'].value;
    let visitantes = this.fbvalidador.controls['visitantes'].value;
    let logo = this.fbvalidador.controls['logo'].value;
    let mapa = this.fbvalidador.controls['mapa'].value;
    let descripcion = this.fbvalidador.controls['descripcion'].value;

    let p = new ModeloParque();

    p.id = this.id;
    p.codigo = codigo;
    p.nombre = nombre;
    p.direccion = direccion;
    p.email = email;
    p.color = color;
    p.max_visitantes_dia = parseInt(visitantes);
    p. logo = logo;
    p.mapa = mapa;
    p.descripcion = descripcion;


    this.sevicioParque.ActualizarParque(p).subscribe((datos:ModeloParque) => {
      alert('Se ha actualizado un parque.');
      this.router.navigate(["/administracion/buscar-parque"]);
    },(error : any) =>{
      alert("Error al actualizar parque.");      
    })
  }


}
