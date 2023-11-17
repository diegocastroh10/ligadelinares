import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAuspiciadoresComponent } from './admin-auspiciadores.component';

describe('AdminAuspiciadoresComponent', () => {
  let component: AdminAuspiciadoresComponent;
  let fixture: ComponentFixture<AdminAuspiciadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAuspiciadoresComponent]
    });
    fixture = TestBed.createComponent(AdminAuspiciadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
