import {Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
import {Fianza} from "../../models/fianza";
import {FianzaRowTable} from "../../models/fianza-row-table";
import {RangosFianza} from "../../models/enums/rangos-fianza";

@Component({
  selector: 'app-table-fianzas',
  templateUrl: './table-fianzas.component.html',
  styleUrls: ['./table-fianzas.component.scss']
})
export class TableFianzasComponent implements OnInit, OnChanges{

  @Input() fianzasInfoCards: Fianza[] = [];

  @ViewChild('tableSort') sort = new MatSort();
  @ViewChild('paginator') paginator!: MatPaginator;

  displayedColumns: string[] = [ 'fianza', 'movimiento', 'fiado', 'antiguedad', 'diasVencidos', 'importe']
  dataSource!: MatTableDataSource<FianzaRowTable>;

  RangosFianza = RangosFianza;
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<FianzaRowTable>([]);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ( changes['fianzasInfoCards'] ) {
      if( changes['fianzasInfoCards'].currentValue !== undefined){
        // console.log(changes['fianzasInfoCards'].currentValue)
        this.createInfoTable(changes['fianzasInfoCards'].currentValue);
      }
    }
  }

  createInfoTable( fianzas: Fianza[] ){
    let fianzasTable: FianzaRowTable[] = [];

    fianzas.forEach((fianza: Fianza) => {
      const diasAntiguedad = this.calcularFechas(fianza.fecha_movimiento);
      const diasVencidos = this.calcularFechas(fianza.fecha_limite);
      fianzasTable.push({
        fianza: fianza.fianza,
        movimiento: fianza.movimiento,
        fiado: fianza.fiado,
        antiguedad: diasAntiguedad.toString(),
        diasVencidos: diasVencidos > 0 ? diasVencidos.toString() : '0',
        importe: fianza.importe
      })
    })
    this.dataSource = new MatTableDataSource<FianzaRowTable>(fianzasTable);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  calcularFechas(fecha: string) {
    // Se convierte la fecha límite proporcionada como cadena en un valor de tiempo (timestamp) en milisegundos.
    const fechaLimiteTimestamp = new Date(fecha).getTime();
    // Se obtiene la fecha actual y se la convierte también en un valor de tiempo en milisegundos.
    const fechaActualTimestamp = new Date().getTime();
    // Se calcula la diferencia en milisegundos entre la fecha actual y la fecha límite,
    // se divide por la cantidad de milisegundos en un día para obtener la diferencia en días,
    // y se redondea hacia abajo al número entero más cercano.
    return Math.floor((fechaActualTimestamp - fechaLimiteTimestamp) / (1000 * 60 * 60 * 24));
  }
}
