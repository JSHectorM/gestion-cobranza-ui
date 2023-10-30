import {Component, OnInit} from '@angular/core';
import {FianzasService} from "../../services/fianzas.service";
import {ResponseAPI} from "../../models/responseAPI";
import {Fianza} from "../../models/fianza";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  fianzas: Fianza[] = [];
  constructor( private fianzasService : FianzasService,
               private _snackBar: MatSnackBar ) {
  }
  ngOnInit(): void {
  }

  getFianzasByOficina(idOficina: number){
    this.fianzasService.getFianzasByOficina(idOficina)
      .subscribe({
        error: error => {
          console.error('Error!', error);
          this.openSnackBar('Ocurrio un error al cargar las fianzas');
        },
        next: (response: ResponseAPI) => {
          this.fianzas = response.data;
          this.openSnackBar('Se cargaron las fianzas correctamente');
        }
      });
  }

    changeFilter (selectedValue: number){
    this.getFianzasByOficina(selectedValue);
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      horizontalPosition: 'start',
      verticalPosition: 'top',
      duration:  2500,
    });
  }

}
