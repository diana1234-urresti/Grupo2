import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloDepartamento } from '../modelos/departamento.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class DepartamentoService {

  url = 'http://localhost:3000';
  token: string = '';
  constructor(private http: HttpClient, private seguridadSerivicio: SeguridadService) { 
    this.token = this.seguridadSerivicio.ObtenerToken();
  }

  ObtenerDepartamentos():Observable<ModeloDepartamento[]>{    
    return this.http.get<ModeloDepartamento[]>(`${this.url}/departamentos`)
  }


  ObtenerDepartamentosPorId(id: string):Observable<ModeloDepartamento>{
    return this.http.get<ModeloDepartamento>(`${this.url}/departamentos/${id}`)
  }

  CrearDepartamento(departamento: ModeloDepartamento):Observable<ModeloDepartamento>{
    return this.http.post<ModeloDepartamento>(`${this.url}/departamentos`,departamento,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`         
      })
    })
  }

  
  ActualizarDepartamento(departamento: ModeloDepartamento):Observable<ModeloDepartamento>{
    return this.http.put<ModeloDepartamento>(`${this.url}/departamentos/${departamento.id}`,departamento,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`         
      })
    })
  }

  EliminarDepartamento(id: string):Observable<any>{
    return this.http.delete<ModeloDepartamento>(`${this.url}/departamentos/${id}`,{
      headers: new HttpHeaders({
        'Authorization':`Bearer ${this.token}`         
      })
    })
  }
}
