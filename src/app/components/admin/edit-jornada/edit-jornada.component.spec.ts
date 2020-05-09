import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditJornadaComponent } from './edit-jornada.component';

describe('EditJornadaComponent', () => {
  let component: EditJornadaComponent;
  let fixture: ComponentFixture<EditJornadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditJornadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditJornadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
