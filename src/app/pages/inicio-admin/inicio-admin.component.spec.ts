import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAdminComponent } from './inicio-admin.component';

describe('InicioAdminComponent', () => {
  let component: InicioAdminComponent;
  let fixture: ComponentFixture<InicioAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioAdminComponent]
    });
    fixture = TestBed.createComponent(InicioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
