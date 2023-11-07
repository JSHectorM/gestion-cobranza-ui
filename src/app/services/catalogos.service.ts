import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class CatalogosService {

  constructor( private http: HttpClient ) { }

  getcatalogoOficinas():Observable<any>{
    return this.http.get(`${environment.apiHost}/oficina/all`)
      .pipe( map( resp =>resp ), catchError( err => of(err) ));
  }

}
