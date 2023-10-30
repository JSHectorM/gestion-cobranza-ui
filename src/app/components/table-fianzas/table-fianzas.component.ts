import {Component, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";

@Component({
  selector: 'app-table-fianzas',
  templateUrl: './table-fianzas.component.html',
  styleUrls: ['./table-fianzas.component.scss']
})
export class TableFianzasComponent {
  // @ViewChild('funcionariosSort') sort = new MatSort();
  // @ViewChild('paginator') paginator!: MatPaginator;
  //
  // bloqueados: boolean = false;
  // displayedColumns: string[] = [ 'rfc','name', 'area','roles', 'estatus'];
  // dataSource!: MatTableDataSource<any>;
  //
  // areas: Areas[] = [];
  //
  //
  // constructor(
  //   public dialog: MatDialog, private http: HttpClient,
  //   public funcionariosService: FuncionariosService,
  //   private areasService: AreasService,
  //   private snackBar: SnackBarService
  // ) {
  //   this.dataSource = new MatTableDataSource<Funcionario>();
  // }
  //
  // ngOnInit(): void {
  //
  //
  //   this.areasService.getAreas().subscribe(data => {
  //
  //     this.areas  = this.areasDisponibles(data.areaList);
  //     this.getFuncionarios();
  //
  //   },error =>  {
  //     this.snackBar.error('Error en conseguir áreas, por favor vuelva a cargar la página.');
  //   });
  //
  // }
  //
  // ngAfterViewInit() {}
  //
  // getFuncionarios(){
  //   this.funcionariosService.getAllFuncionarios().subscribe({
  //     next: (data) => {
  //       data.responseApi.forEach((funcionario: Funcionario) => this.areas.forEach((area: Areas) => {
  //         if (area.idArea == funcionario.idArea) {
  //           funcionario.area = area.name
  //         }
  //       }));
  //
  //       this.dataSource = new MatTableDataSource<Funcionario>(data.responseApi);
  //       this.dataSource.sort = this.sort;
  //       this.dataSource.paginator = this.paginator;
  //
  //     }, error: (error) => {
  //       if (error.status !== 404) {
  //         this.snackBar.error('Error en conseguir funcionarios, por favor vuelva a cargar la página.');
  //       } else {
  //         this.dataSource.data = [];
  //         this.dataSource.sort = this.sort;
  //         this.dataSource.paginator = this.paginator;
  //       }
  //     }
  //   });
  // }
  //
  // areasDisponibles(lista: Areas[]): Areas[]{
  //   let nuevaLista: Areas[] = []
  //
  //   lista.forEach((value)=> {
  //     if(value.activo == true){
  //       nuevaLista.push(value)
  //     }
  //   })
  //
  //   return nuevaLista;
  // }
  //
  // // Dialog (popup) para editar los roles del funcionario
  // openRolesDialog(func: Funcionario): void {
  //   const dialogRef = this.dialog.open(AsignarRolesComponent, {
  //     // panelClass: 'bloquear',
  //     width: 'max-content',
  //     data:  func,
  //     disableClose: true
  //   });
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     // Obtenemos los roles como resultado de cerrar el dialog
  //     this.getFuncionarios();
  //
  //   });
  // }
  //
  // applyFilter(event: Event) {
  //
  //   this.dataSource.filterPredicate = function (record,filter) {
  //     let findByRol;
  //
  //     try {
  //       findByRol = record.usuario.roles.find((i:any) => {
  //         if (i.nombre.toLocaleLowerCase().includes(filter)){
  //           return i;
  //         }
  //       })
  //     } finally {
  //       if (findByRol !== undefined) {
  //         return true;
  //       } else {
  //         if (record.area.toLocaleLowerCase().includes(filter) ) {
  //           return true
  //         } else {
  //           if (record.nombre.toLocaleLowerCase().includes(filter)) {
  //             return true
  //           } else {
  //             if (record.rfc.toLocaleLowerCase().includes(filter)) {
  //               return true
  //             }
  //           }
  //         }
  //         return false;
  //       }
  //     }
  //   }
  //
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  //
  // clearFilter(input: HTMLInputElement) {
  //   input.value = '';
  //   this.dataSource.filter = '';
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
