import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninUsuarioComponent } from './signin-usuario.component';

describe('SigninUsuarioComponent', () => {
  let component: SigninUsuarioComponent;
  let fixture: ComponentFixture<SigninUsuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SigninUsuarioComponent]
    });
    fixture = TestBed.createComponent(SigninUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
