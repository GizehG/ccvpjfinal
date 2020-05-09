import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJornadasComponent } from './show-jornadas.component';

describe('ShowJornadasComponent', () => {
  let component: ShowJornadasComponent;
  let fixture: ComponentFixture<ShowJornadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowJornadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJornadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
