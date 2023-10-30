import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

  uploadXLSX(file: File , idOficina: string): Observable<any> {
    const headers = new HttpHeaders();
    const formData: FormData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(
      `${this.host}/fianzas/uploadExcelFile/${idOficina}`, formData,
      { 'headers': headers }).pipe(catchError(err => of(err)));
  }

}
