import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloCiudad } from '../modelos/ciudad.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadService {

  url='http://localhost:3000';
  token: string = '';

  constructor(private http: HttpClient,
    private servicioSeguidad: SeguridadService) {
      this.token=this.servicioSeguidad.ObtenerToken();
     }

  ObtenerCiudades(): Observable<ModeloCiudad[]> {
    return   this.http.get<ModeloCiudad[]>(`${this.url}/ciudads`);
  }

  CrearCiudad(ciudad: ModeloCiudad){
    return this.http.post<ModeloCiudad>(`${this.url}/ciudads`, ciudad,{
      headers:new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  ActualizarCiudad(ciudad: ModeloCiudad){
    return this.http.put<ModeloCiudad>(`${this.url}/ciudads`, ciudad,{
      headers:new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }

  EliminarCiudad(id:string): Observable<any>{
    return this.http.delete<ModeloCiudad>(`${this.url}/ciudads/${id}`,{
      headers:new HttpHeaders({
        'Authorization': `Bearer ${this.token}`
      })
    })
  }
  
}
