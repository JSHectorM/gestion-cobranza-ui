import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {ResponseAPI} from "../models/responseAPI";

@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  host: String = 'http://localhost:8080';

  constructor( private http: HttpClient ) { }

  getcatalogoOficinas():Observable<any>{
    return this.http.get('http://localhost:8080/oficina/all')
      .pipe( map( resp =>resp ), catchError( err => of(err) ));
  }

}
