import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibrosByServicioComponent } from './libros-by-servicio.component';

describe('LibrosByServicioComponent', () => {
  let component: LibrosByServicioComponent;
  let fixture: ComponentFixture<LibrosByServicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibrosByServicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibrosByServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
