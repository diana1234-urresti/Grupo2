import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloZona } from '../modelos/zona.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ZonaService {

  url='http://localhost:3000'
  token : String = '';

  constructor(private http:HttpClient,
    private servicioSeguridad : SeguridadService) {
      this.token = this.servicioSeguridad.ObtenerToken();
     }

  ObtenerZonas():Observable<ModeloZona[]>{
    return this.http.get<ModeloZona[]>(`${this.url}/zonas`,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

  ObtenerZonaPorId(id : String):Observable<ModeloZona>{
    return this.http.get<ModeloZona>(`${this.url}/zonas/${id}`, {
      headers : new HttpHeaders({
        'Authotization' : `Bearer ${this.token}`
      })
    })
  }

  CrearZona(zona : ModeloZona):Observable<ModeloZona>{
    return this.http.post<ModeloZona>(`${this.url}/zonas`,zona,{
      headers : new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

  ActualizarZona(zona : ModeloZona) : Observable<ModeloZona>{
    return this.http.put<ModeloZona>(`${this.url}/zonas/${zona.id}`, zona, {
      headers : new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

  EliminarZona(id: string):Observable<any>{
    return this.http.delete<ModeloZona>(`${this.url}/zonas/${id}`,{
      headers : new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

 
}
