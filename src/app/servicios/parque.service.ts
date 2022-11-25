import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloParque } from '../modelos/parque.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class ParqueService {

  url = "http://localhost:3000"
  token : string = '';

  constructor(private http:HttpClient,
    private servicioSeguridad: SeguridadService) {
      this.token = this.servicioSeguridad.ObtenerToken();
     }

  ObtenerParques():Observable<ModeloParque[]>{
    return this.http.get<ModeloParque[]>(`${this.url}/parques`);
  }

  ObtenerParquesPorId(id : string):Observable<ModeloParque>{
    return this.http.get<ModeloParque>(`${this.url}/parques/${id}`);
  }

  CrearParque(parque: ModeloParque):Observable<ModeloParque>{
    return this.http.post<ModeloParque>(`${this.url}/parques`,parque,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    })
  }

  ActualizarParque(parque: ModeloParque):Observable<ModeloParque>{
    return this.http.put<ModeloParque>(`${this.url}/parques/${parque.id}`,parque,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    })
  }

  EliminarParque(id: string):Observable<any>{
    return this.http.post<ModeloParque>(`${this.url}/parques/${id}`,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    })
  }
}
