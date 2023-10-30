import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEquipoEditarComponent } from './admin-equipo-editar.component';

describe('AdminEquipoEditarComponent', () => {
  let component: AdminEquipoEditarComponent;
  let fixture: ComponentFixture<AdminEquipoEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEquipoEditarComponent]
    });
    fixture = TestBed.createComponent(AdminEquipoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
