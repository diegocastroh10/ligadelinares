import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioEquipoComponent } from './usuario-equipo.component';

describe('UsuarioEquipoComponent', () => {
  let component: UsuarioEquipoComponent;
  let fixture: ComponentFixture<UsuarioEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioEquipoComponent]
    });
    fixture = TestBed.createComponent(UsuarioEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
