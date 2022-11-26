import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloUsuario } from 'src/app/modelos/usuario.modelo';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-editar-persona',
  templateUrl: './editar-persona.component.html',
  styleUrls: ['./editar-persona.component.css']
})
export class EditarPersonaComponent implements OnInit{

  id : String = '';

  fbvalidador : FormGroup = this.fb.group({
    'id' : ['',[Validators.required]],
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
    private servicioUsuario : UsuarioService,
    private router:Router,
    private route : ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.ObtenerUsuarios();
    
  }

  ObtenerUsuarios(){
    this.servicioUsuario.ObtenerUsuarioPorId(this.id).subscribe((datos : ModeloUsuario) => {
      this.fbvalidador.controls['id'].setValue(this.id);
      this.fbvalidador.controls['dni'].setValue(datos.dni);
      this.fbvalidador.controls['nombre'].setValue(datos.nombre);
      this.fbvalidador.controls['apellido'].setValue(datos.apellido);
      this.fbvalidador.controls['email'].setValue(datos.email);
      this.fbvalidador.controls['cargo'].setValue(datos.cargo);
      this.fbvalidador.controls['telefono'].setValue(datos.telefono_fijo);
      this.fbvalidador.controls['celular'].setValue(datos.celular);
      this.fbvalidador.controls['nacimiento'].setValue(datos.nacimiento);
    
    })
  }

  EditarUsuario(){
    let dni = this.fbvalidador.controls['dni'].value;
    let nombre = this.fbvalidador.controls['nombre'].value;
    let apellido = this.fbvalidador.controls['apellido'].value;
    let email = this.fbvalidador.controls['email'].value;    
    let cargo = JSON.stringify(this.fbvalidador.controls['cargo'].value);    
    let telefono = this.fbvalidador.controls['telefono'].value;
    let celular = this.fbvalidador.controls['celular'].value;
    let nacimiento = new Date(this.fbvalidador.controls['nacimiento'].value) ;
    

    let p = new ModeloUsuario();

    p.id = this.id ;
    p.dni = dni;
    p.nombre = nombre;
    p.apellido = apellido;
    p.email = email;
    p.cargo = cargo;
    p.telefono_fijo = telefono;
    p.celular = celular;
    p.nacimiento = nacimiento;

    this.servicioUsuario.ActualizarUsuario(p).subscribe((datos: ModeloUsuario) => {
      alert('El Usuario fue actualizado exitosamente.');
      this.router.navigate(['/administracion/buscar-persona']);
    },(error: any) => {
      alert('Error en la actualización del usuario.');
    })



  }

}
