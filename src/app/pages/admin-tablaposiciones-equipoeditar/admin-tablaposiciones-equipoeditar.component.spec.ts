import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTablaposicionesEquipoeditarComponent } from './admin-tablaposiciones-equipoeditar.component';

describe('AdminTablaposicionesEquipoeditarComponent', () => {
  let component: AdminTablaposicionesEquipoeditarComponent;
  let fixture: ComponentFixture<AdminTablaposicionesEquipoeditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTablaposicionesEquipoeditarComponent]
    });
    fixture = TestBed.createComponent(AdminTablaposicionesEquipoeditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
