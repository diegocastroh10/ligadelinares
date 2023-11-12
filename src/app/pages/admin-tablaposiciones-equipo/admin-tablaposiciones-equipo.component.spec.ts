import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTablaposicionesEquipoComponent } from './admin-tablaposiciones-equipo.component';

describe('AdminTablaposicionesEquipoComponent', () => {
  let component: AdminTablaposicionesEquipoComponent;
  let fixture: ComponentFixture<AdminTablaposicionesEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTablaposicionesEquipoComponent]
    });
    fixture = TestBed.createComponent(AdminTablaposicionesEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
