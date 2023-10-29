import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFianzasComponent } from './table-fianzas.component';

describe('TableFianzasComponent', () => {
  let component: TableFianzasComponent;
  let fixture: ComponentFixture<TableFianzasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableFianzasComponent]
    });
    fixture = TestBed.createComponent(TableFianzasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
