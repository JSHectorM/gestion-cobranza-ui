import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Fianza} from "../../models/fianza";
import {InfoCard} from "../../models/info-card";
import {Monedas} from "../../models/enums/monedas";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnChanges {

  @Input() fianzasInfoCards: Fianza[] = [];
  infoCards: InfoCard[] = [];
  constructor() {
    this.initCards();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes['fianzasInfoCards'] ) {
        if( changes['fianzasInfoCards'].currentValue !== undefined){
            this.initCards();
            this.createInfoCards(changes['fianzasInfoCards'].currentValue);
        }
    }
  }
  initCards(){
    this.infoCards = [
        {
            idCard: 0,
            tipoMoneda: "Pesos",
            cantidadTotal: 0,
            totalEnTiempo: 0,
            porcentajeEnTiempo: 0,
            totalVencido: 0,
            porsentajeVencido: 0
        },
        {
            idCard: 1,
            tipoMoneda: "Dolares",
            cantidadTotal: 0,
            totalEnTiempo: 0,
            porcentajeEnTiempo: 0,
            totalVencido: 0,
            porsentajeVencido: 0
        },
        {
            idCard: 2,
            tipoMoneda: "Euros",
            cantidadTotal: 0,
            totalEnTiempo: 0,
            porcentajeEnTiempo: 0,
            totalVencido: 0,
            porsentajeVencido: 0
        }
    ];
  }
  createInfoCards( fianzas: Fianza[] ){
    const hoy = new Date();

    fianzas.forEach( f => {
      if (f.id_moneda === Monedas.PESOS){
        this.infoCards[0].cantidadTotal += Number(f.importe);
        if (new Date(f.fecha_limite) > hoy){
          this.infoCards[0].totalEnTiempo += Number(f.importe);
        } else {
          this.infoCards[0].totalVencido += Number(f.importe);
        }
        this.infoCards[0].porcentajeEnTiempo = (this.infoCards[0].totalEnTiempo / this.infoCards[0].cantidadTotal) * 100;
        this.infoCards[0].porsentajeVencido = (this.infoCards[0].totalVencido / this.infoCards[0].cantidadTotal) * 100;
      } else if (f.id_moneda === Monedas.DOLARES){
        this.infoCards[1].cantidadTotal += Number(f.importe);
        if (new Date(f.fecha_limite) > hoy){
          this.infoCards[1].totalEnTiempo += Number(f.importe);
        } else {
          this.infoCards[1].totalVencido += Number(f.importe);
        }
        this.infoCards[1].porcentajeEnTiempo = (this.infoCards[1].totalEnTiempo / this.infoCards[1].cantidadTotal) * 100;
        this.infoCards[1].porsentajeVencido = (this.infoCards[1].totalVencido / this.infoCards[1].cantidadTotal) * 100;
      } else if (f.id_moneda === Monedas.EUROS){
        this.infoCards[2].cantidadTotal += Number(f.importe);
        if (new Date(f.fecha_limite) > hoy){
          this.infoCards[2].totalEnTiempo += Number(f.importe);
        } else {
          this.infoCards[2].totalVencido += Number(f.importe);
        }
        this.infoCards[2].porcentajeEnTiempo = (this.infoCards[2].totalEnTiempo / this.infoCards[2].cantidadTotal) * 100;
        this.infoCards[2].porsentajeVencido = (this.infoCards[2].totalVencido / this.infoCards[2].cantidadTotal) * 100;
      }
    });
    console.log(this.infoCards)
  }

}
