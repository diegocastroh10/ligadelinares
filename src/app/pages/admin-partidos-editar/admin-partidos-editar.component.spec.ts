import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartidosEditarComponent } from './admin-partidos-editar.component';

describe('AdminPartidosEditarComponent', () => {
  let component: AdminPartidosEditarComponent;
  let fixture: ComponentFixture<AdminPartidosEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPartidosEditarComponent]
    });
    fixture = TestBed.createComponent(AdminPartidosEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
