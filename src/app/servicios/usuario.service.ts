import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloUsuario } from '../modelos/usuario.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url='http://localhost:3000'
  token : String = '';

  constructor(private http:HttpClient,
    private servicioSeguridad : SeguridadService) {
      this.token = this.servicioSeguridad.ObtenerToken();
     }

  ObtenerUsuarios():Observable<ModeloUsuario[]>{
    return this.http.get<ModeloUsuario[]>(`${this.url}/usuarios`,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

  ObtenerUsuarioPorId(id : String):Observable<ModeloUsuario>{
    return this.http.get<ModeloUsuario>(`${this.url}/usuarios/${id}`, {
      headers : new HttpHeaders({
        'Authotization' : `Bearer ${this.token}`
      })
    })
  }

  CrearUsuario(usuario : ModeloUsuario):Observable<ModeloUsuario>{
    return this.http.post<ModeloUsuario>(`${this.url}/usuarios`,usuario,{
      headers : new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

  ActualizarUsuario(usuario : ModeloUsuario) : Observable<ModeloUsuario>{
    return this.http.put<ModeloUsuario>(`${this.url}/usuarios/${usuario.id}`, usuario, {
      headers : new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

  EliminarUsuario(id: string):Observable<any>{
    return this.http.delete<ModeloUsuario>(`${this.url}/usuarios/${id}`,{
      headers : new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

 
}
