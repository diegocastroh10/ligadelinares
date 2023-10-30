import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEquiposEditarComponent } from './admin-equipos-editar.component';

describe('AdminEquiposEditarComponent', () => {
  let component: AdminEquiposEditarComponent;
  let fixture: ComponentFixture<AdminEquiposEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEquiposEditarComponent]
    });
    fixture = TestBed.createComponent(AdminEquiposEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
