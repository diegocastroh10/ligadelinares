import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioNoticiasComponent } from './usuario-noticias.component';

describe('UsuarioNoticiasComponent', () => {
  let component: UsuarioNoticiasComponent;
  let fixture: ComponentFixture<UsuarioNoticiasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsuarioNoticiasComponent]
    });
    fixture = TestBed.createComponent(UsuarioNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
