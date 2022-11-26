import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloPlan } from '../modelos/plan.modelo';
import { SeguridadService } from './seguridad.service';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  url='http://localhost:3000'
  token : String = '';

  constructor(private http:HttpClient,
    private servicioSeguridad : SeguridadService) {
      this.token = this.servicioSeguridad.ObtenerToken();
     }

  ObtenerPlanes():Observable<ModeloPlan[]>{
    return this.http.get<ModeloPlan[]>(`${this.url}/plans`,{
      headers: new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

  ObtenerPlanesPorId(id : String):Observable<ModeloPlan>{
    return this.http.get<ModeloPlan>(`${this.url}/plans/${id}`, {
      headers : new HttpHeaders({
        'Authotization' : `Bearer ${this.token}`
      })
    })
  }

  CrearPlan(plan : ModeloPlan):Observable<ModeloPlan>{
    return this.http.post<ModeloPlan>(`${this.url}/plans`,plan,{
      headers : new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

  ActualizarPlan(plan : ModeloPlan) : Observable<ModeloPlan>{
    return this.http.put<ModeloPlan>(`${this.url}/plans/${plan.id}`, plan, {
      headers : new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }

  EliminarPlan(id: string):Observable<any>{
    return this.http.delete<ModeloPlan>(`${this.url}/plans/${id}`,{
      headers : new HttpHeaders({
        'Authorization' : `Bearer ${this.token}`
      })
    });
  }
}
