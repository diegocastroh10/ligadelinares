import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNoticiaEditarComponent } from './admin-noticia-editar.component';

describe('AdminNoticiaEditarComponent', () => {
  let component: AdminNoticiaEditarComponent;
  let fixture: ComponentFixture<AdminNoticiaEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNoticiaEditarComponent]
    });
    fixture = TestBed.createComponent(AdminNoticiaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
