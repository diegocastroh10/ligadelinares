import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuspiciadoresEditarComponent } from './admin-auspiciadores-editar.component';

describe('AdminAuspiciadoresEditarComponent', () => {
  let component: AdminAuspiciadoresEditarComponent;
  let fixture: ComponentFixture<AdminAuspiciadoresEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAuspiciadoresEditarComponent]
    });
    fixture = TestBed.createComponent(AdminAuspiciadoresEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
