import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurarContrasenaComponent } from './restaurar-contrasena.component';

describe('RestaurarContrasenaComponent', () => {
  let component: RestaurarContrasenaComponent;
  let fixture: ComponentFixture<RestaurarContrasenaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurarContrasenaComponent]
    });
    fixture = TestBed.createComponent(RestaurarContrasenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
