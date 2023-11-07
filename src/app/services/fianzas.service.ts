import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, map, Observable, of} from "rxjs";
import {environment} from "../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class FianzasService {

  constructor( private http: HttpClient ) {}

  getFianzasByOficina(idOficina: number):Observable<any>{
    return this.http.get(`${environment.apiHost}/fianzas/buscar/${idOficina}`)
      .pipe( map( resp =>resp ), catchError( err => of(err) ));
  }

  uploadXLSX(file: File , idOficina: string): Observable<any> {
    const headers = new HttpHeaders();
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(
      `${environment.apiHost}/fianzas/uploadExcelFile/${idOficina}`, formData,
      { 'headers': headers }).pipe(catchError(err => of(err)));
  }

}
