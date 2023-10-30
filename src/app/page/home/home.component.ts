import {Component, OnInit} from '@angular/core';
import {FianzasService} from "../../services/fianzas.service";
import {ResponseAPI} from "../../models/responseAPI";
import {Fianza} from "../../models/fianza";
import {Monedas} from "../../models/enums/monedas";
import {InfoCard} from "../../models/info-card";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  fianzas: Fianza[] = [];
  constructor( private fianzasService : FianzasService ) {
  }
  ngOnInit(): void {
  }

  getFianzasByOficina(idOficina: number){
    this.fianzasService.getFianzasByOficina(idOficina)
      .subscribe({
        error: error => console.error('Error!', error),
        next: (response: ResponseAPI) => {
          this.fianzas = response.data;
        }
      });
  }

    changeFilter (selectedValue: number){
    this.getFianzasByOficina(selectedValue);
  }

}
