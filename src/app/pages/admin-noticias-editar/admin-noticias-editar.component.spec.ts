import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoticiasEditarComponent } from './admin-noticias-editar.component';

describe('AdminNoticiasEditarComponent', () => {
  let component: AdminNoticiasEditarComponent;
  let fixture: ComponentFixture<AdminNoticiasEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNoticiasEditarComponent]
    });
    fixture = TestBed.createComponent(AdminNoticiasEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
