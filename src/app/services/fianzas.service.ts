import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FianzasService {
  host: String = 'http://localhost:8080';

  constructor( private http: HttpClient ) {}

  getFianzasByOficina(idOficina: number):Observable<any>{
    return this.http.get(`${this.host}/fianzas/buscar/${idOficina}`)
      .pipe( map( resp =>resp ), catchError( err => of(err) ));
  }
}
