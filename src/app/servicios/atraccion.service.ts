import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloAtraccion } from '../modelos/atraccion.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class AtraccionService {

  url='http://localhost:3000';
  token : String = '';


  constructor(private http:HttpClient,
    private servicioSeguridad:SeguridadService) {
      this.token = this.servicioSeguridad.ObtenerToken();
     }

  ObtenerAtraccion():Observable<ModeloAtraccion[]>{
    return this.http.get<ModeloAtraccion[]>(`${this.url}/atraccions`,{
      headers : new HttpHeaders ({
        'Authorization' : `Bearer ${this.token}`
      })
    })
  }

  ObtenerAtraccionPorId(id : String):Observable<ModeloAtraccion>{
    return this.http.get<ModeloAtraccion>(`${this.url}/atraccions/${id}`,{
      headers : new HttpHeaders ({
        'Authorization' : `Bearer ${this.token}`
      })
    })
  }  

  CrearAtraccion(atraccion : ModeloAtraccion):Observable<ModeloAtraccion>{
    return this.http.post<ModeloAtraccion>(`${this.url}/atraccions`,atraccion,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    })
  }

  ActualizarAtraccion(atraccion : ModeloAtraccion):Observable<ModeloAtraccion>{
    return this.http.put<ModeloAtraccion>(`${this.url}/atraccions/${atraccion.id}`, atraccion, {
      headers : new HttpHeaders ({
        'Authorization' : `Bearer ${this.token}`
      })
    })
  }

  EliminarAtraccion(id : String):Observable<any>{
    return this.http.delete<ModeloAtraccion>(`${this.url}/atraccions/${id}`, {
      headers : new HttpHeaders ({
        'Authorization' : `Bearer ${this.token}`
      })
    })
  }

 
}
