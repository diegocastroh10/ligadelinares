import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaposicionesComponent } from './tablaposiciones.component';

describe('TablaposicionesComponent', () => {
  let component: TablaposicionesComponent;
  let fixture: ComponentFixture<TablaposicionesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaposicionesComponent]
    });
    fixture = TestBed.createComponent(TablaposicionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
