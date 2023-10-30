import { MatPaginatorIntl } from '@angular/material/paginator';
import {Injectable} from "@angular/core";

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl{
  override itemsPerPageLabel = 'Elementos por página';
  override nextPageLabel = 'Siguiente';
  override previousPageLabel = 'Anterior';
  override lastPageLabel = 'Última página';
  override firstPageLabel = 'Primera página';
}
