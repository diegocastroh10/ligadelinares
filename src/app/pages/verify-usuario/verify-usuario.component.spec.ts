import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyUsuarioComponent } from './verify-usuario.component';

describe('VerifyUsuarioComponent', () => {
  let component: VerifyUsuarioComponent;
  let fixture: ComponentFixture<VerifyUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyUsuarioComponent]
    });
    fixture = TestBed.createComponent(VerifyUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
