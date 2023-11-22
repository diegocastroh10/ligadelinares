import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioAuspiciadorComponent } from './usuario-auspiciador.component';

describe('UsuarioAuspiciadorComponent', () => {
  let component: UsuarioAuspiciadorComponent;
  let fixture: ComponentFixture<UsuarioAuspiciadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioAuspiciadorComponent]
    });
    fixture = TestBed.createComponent(UsuarioAuspiciadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
