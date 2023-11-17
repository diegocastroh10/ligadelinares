import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuspiciadoresComponent } from './auspiciadores.component';

describe('AuspiciadoresComponent', () => {
  let component: AuspiciadoresComponent;
  let fixture: ComponentFixture<AuspiciadoresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuspiciadoresComponent]
    });
    fixture = TestBed.createComponent(AuspiciadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
