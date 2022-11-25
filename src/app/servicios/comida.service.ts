import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloComida } from '../modelos/comida.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ComidaService {

  url='http://localhost:3000';
  token : String = '';

  constructor(private http:HttpClient,
    private servicioSeguridad: SeguridadService) { 
      this.token = this.servicioSeguridad.ObtenerToken();
    }

  ObtenerComidas():Observable<ModeloComida[]>{
    return this.http.get<ModeloComida[]>(`${this.url}/comidas`);
  }

  ObtenerComidasPorId(id : String):Observable<ModeloComida>{
    return this.http.get<ModeloComida>(`${this.url}/comidas/${id}`);
  }

  CrearComida(comida: ModeloComida):Observable<ModeloComida>{
    return this.http.post<ModeloComida>(`${this.url}/comidas`,comida,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })    
  }

  ActualizarComida(comida : ModeloComida):Observable<ModeloComida>{
    return this.http.put<ModeloComida>(`${this.url}/comidas/${comida.id}`,comida,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })    
  }

  EliminarComida(id : string):Observable<any>{
    return this.http.delete<ModeloComida>(`${this.url}/comidas/${id}`, {
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`
      })
    })    
  }
}
