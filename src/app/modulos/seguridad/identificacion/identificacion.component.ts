import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SeguridadService } from 'src/app/servicios/seguridad.service';
import * as cryptoJS from 'crypto-js';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identificacion',
  templateUrl: './identificacion.component.html',
  styleUrls: ['./identificacion.component.css']
})
export class IdentificacionComponent implements OnInit {

  fgvalidador: FormGroup = this.fb.group({
    //The first space means that the predeterminate value is empty and the comands that is into keys means that the value  is required and it should has email format
    'usuario':['',[Validators.required,Validators.email]],
    'clave':['',[Validators.required]]
  });

  constructor(private fb:FormBuilder, private servicioSeguridad: SeguridadService,
    private router: Router){}
  ngOnInit(): void {
  }

  IdentificarUsuario(){
    let usuario= this.fgvalidador.controls["usuario"].value;
    alert(usuario)
    
    let clave= this.fgvalidador.controls["clave"].value;
    alert(clave)
    let claveCifrada = cryptoJS.MD5(clave).toString();    
    alert(claveCifrada)
    this.servicioSeguridad.Identificar(usuario,claveCifrada).subscribe((datos:any) => {
            this.servicioSeguridad.AlmacenarSesion(datos);
            this.router.navigate(['/inicio'])
          },
          (error: any) => {
            //KO
            alert("Datos incorrectos")
          })
  }

}
