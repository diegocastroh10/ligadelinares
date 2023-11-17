import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuspiciadoresCrearComponent } from './admin-auspiciadores-crear.component';

describe('AdminAuspiciadoresCrearComponent', () => {
  let component: AdminAuspiciadoresCrearComponent;
  let fixture: ComponentFixture<AdminAuspiciadoresCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAuspiciadoresCrearComponent]
    });
    fixture = TestBed.createComponent(AdminAuspiciadoresCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
