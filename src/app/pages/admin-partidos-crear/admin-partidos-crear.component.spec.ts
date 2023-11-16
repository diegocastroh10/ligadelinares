import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPartidosCrearComponent } from './admin-partidos-crear.component';

describe('AdminPartidosCrearComponent', () => {
  let component: AdminPartidosCrearComponent;
  let fixture: ComponentFixture<AdminPartidosCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPartidosCrearComponent]
    });
    fixture = TestBed.createComponent(AdminPartidosCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
