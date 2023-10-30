import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoticiasCrearComponent } from './admin-noticias-crear.component';

describe('AdminNoticiasCrearComponent', () => {
  let component: AdminNoticiasCrearComponent;
  let fixture: ComponentFixture<AdminNoticiasCrearComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNoticiasCrearComponent]
    });
    fixture = TestBed.createComponent(AdminNoticiasCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
