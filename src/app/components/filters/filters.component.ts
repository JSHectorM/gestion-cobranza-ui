import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CatalogosService} from "../../services/catalogos.service";
import {Oficina} from "../../models/oficina";
import {ResponseAPI} from "../../models/responseAPI";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit{

  catOfcinas: Oficina[] = [];
  selectedOficina !: number ;
  @Output() filterOficina = new EventEmitter<number>();
  constructor( private catalogosService : CatalogosService ) { }

  ngOnInit(): void {
    this.getOficinas()
  }
  getOficinas(){
    this.catalogosService.getcatalogoOficinas()
        .subscribe({
          error: error => console.error('Error!', error),
          next: (response: ResponseAPI) => {
            this.catOfcinas = response.data;
            this.selectedOficina = 14;
            this.filterOficina.emit(this.selectedOficina);
            // console.log(this.catOfcinas);
          }
        });
  }

    changeOfcina( ){
        this.filterOficina.emit(this.selectedOficina);
    }
}
