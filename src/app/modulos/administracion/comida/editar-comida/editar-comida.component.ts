import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloComida } from 'src/app/modelos/comida.modelo';
import { ComidaService } from 'src/app/servicios/comida.service';

@Component({
  selector: 'app-editar-comida',
  templateUrl: './editar-comida.component.html',
  styleUrls: ['./editar-comida.component.css']
})
export class EditarComidaComponent implements OnInit {

  id : String = '';

  fbvalidador : FormGroup = this.fb.group({
    'id' : ['',[Validators.required]],
    'codigo' : ['',[Validators.required]],
    'nombre' : ['',[Validators.required]],
    'imagen' : ['',[Validators.required]],
    'menu' : ['',[Validators.required]]
  })

  constructor(private fb:FormBuilder,
    private servicioComida:ComidaService,
    private router:Router,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.BuscarComida();    
  }

  BuscarComida(){
    this.servicioComida.ObtenerComidasPorId(this.id).subscribe((datos: ModeloComida) => {
      this.fbvalidador.controls['codigo'].setValue(datos.codigo);
      this.fbvalidador.controls['nombre'].setValue(datos.nombre);
      this.fbvalidador.controls['imagen'].setValue(datos.imagen);
      this.fbvalidador.controls['menu'].setValue(datos.menu);
    })
  }

  EditarComida(){
    let codigo = this.fbvalidador.controls['codigo'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let imagen = this.fbvalidador.controls['imagen'].value;
    let menu = this.fbvalidador.controls['menu'].value;

    let p = new ModeloComida();

    p.id = this.id;
    p.codigo = codigo;
    p.nombre = nombre;
    p.imagen = imagen;
    p.menu = menu;

    this.servicioComida.ActualizarComida(p).subscribe((datos: ModeloComida) => {
      alert('La comida fue actualizada.');
      this.router.navigate(['/administracion/buscar-comida']);
    },(error: any) => {
      alert('Error en la actualización de la comida.');
    })



  }

}
