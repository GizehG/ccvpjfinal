import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpleadoComponent } from './edit-empleado.component';

describe('EditEmpleadoComponent', () => {
  let component: EditEmpleadoComponent;
  let fixture: ComponentFixture<EditEmpleadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmpleadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
