import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {CatalogosService} from "../../services/catalogos.service";
import {Oficina} from "../../models/oficina";
import {ResponseAPI} from "../../models/responseAPI";
import {FianzasService} from "../../services/fianzas.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  catOfcinas: Oficina[] = [];
  selectedOficina !: number;
  nameFile: string  = '';
  @Output() filterOficina = new EventEmitter<number>();

  flagFile = false;
  docFile !: File

  @ViewChild('fileInput') fileInput!: ElementRef;

  constructor(private catalogosService: CatalogosService,
              private fianzasService: FianzasService,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.getOficinas()
  }

  getOficinas() {
    this.catalogosService.getcatalogoOficinas()
      .subscribe({
        error: error => {
          console.error('Error!', error);
          this.openSnackBar('Ocurrio un error al cargar las oficinas')
        },
        next: (response: ResponseAPI) => {
          this.catOfcinas = response.data;
          this.selectedOficina = 14;
          this.filterOficina.emit(this.selectedOficina);
          // console.log(this.catOfcinas);
        }
      });
  }

  changeOfcina() {
    this.filterOficina.emit(this.selectedOficina);
  }

  onFileSelected(event: any) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      this.flagFile = true;
      this.nameFile = file.name;
      this.docFile = file;
    }
  }

  uploadFile() {
    console.log('uploadFile');
    this.openSnackBar('Cargando archivo...');
    this.fianzasService.uploadXLSX(this.docFile, this.selectedOficina.toString())
      .subscribe(r => {
        console.log(r)
        if (r.code === '200 OK'){
          console.log('Se cargo el archivo correctamente');
          this.openSnackBar('Se cargo el archivo correctamente');
          this.flagFile = false;
          this.nameFile = '';
          this.docFile = new File([], '');
          this.filterOficina.emit(this.selectedOficina);
          this.cancelUpload()
        } else {
          console.error('Ocurrio un error al cargar el archivo');
        }
      });
  }

  cancelUpload() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.value = '';
    this.flagFile = false;
    this.nameFile = '';
    this.docFile = new File([], '');
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }

}
