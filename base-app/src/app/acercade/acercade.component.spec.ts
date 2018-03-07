import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcercadeComponent } from './acercade.component';

describe('AcercadeComponent', () => {
  let component: AcercadeComponent;
  let fixture: ComponentFixture<AcercadeComponent>;

  // Configura el modulo de testing, lo declara y compila
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcercadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcercadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Espera que el componente exista
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
