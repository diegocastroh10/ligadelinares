import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEquiposCrearComponent } from './admin-equipos-crear.component';

describe('AdminEquiposCrearComponent', () => {
  let component: AdminEquiposCrearComponent;
  let fixture: ComponentFixture<AdminEquiposCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEquiposCrearComponent]
    });
    fixture = TestBed.createComponent(AdminEquiposCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
