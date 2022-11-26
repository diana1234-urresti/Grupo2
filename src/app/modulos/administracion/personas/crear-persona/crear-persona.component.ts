import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-crear-persona',
  templateUrl: './crear-persona.component.html',
  styleUrls: ['./crear-persona.component.css']
})
export class CrearPersonaComponent implements OnInit {

  fbvalidador : FormGroup = this.fb.group({
    'dni' : ['',[Validators.required]],
    'nombre' : ['',[Validators.required]],
    'apellido' : ['',[Validators.required]],
    'email' : ['',[Validators.required]],
    'cargo' : ['',[Validators.required]],
    'telefono' : [''],
    'celular' : ['',[Validators.required]],
    'nacimiento' : ['',[Validators.required]]
  })

  constructor(private fb:FormBuilder,
    private servicioUsuario:UsuarioService,
    private router : Router
    ){}

  ngOnInit(): void {
    
  }

  GuardarUsuario(){
    let dni = this.fbvalidador.controls['dni'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let apellido = this.fbvalidador.controls['apellido'].value;
    let email = this.fbvalidador.controls['email'].value;
    let cargo = JSON.stringify(this.fbvalidador.controls['cargo'].value);    
    let telefono = this.fbvalidador.controls['telefono'].value;
    let celular = this.fbvalidador.controls['celular'].value;
    let nacimiento = new Date(this.fbvalidador.controls['nacimiento'].value);

    let p = new ModeloUsuario();

    p.dni = dni;
    p.nombre = nombre;
    p.apellido = apellido;
    p.email = email;
    p.cargo = cargo;
    p.telefono_fijo = telefono;
    p.celular = celular;
    p.nacimiento = nacimiento;

    this.servicioUsuario.CrearUsuario(p).subscribe((datos: ModeloUsuario) => {
      alert('El Usuario fue creado exitosamente.');
      this.router.navigate(['/administracion/buscar-persona']);
    },(error: any) => {
      alert('Error en la creación del usuario.');
    })



  }

}
