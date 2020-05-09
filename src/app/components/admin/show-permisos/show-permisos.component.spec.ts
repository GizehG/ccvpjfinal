import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPermisosComponent } from './show-permisos.component';

describe('ShowPermisosComponent', () => {
  let component: ShowPermisosComponent;
  let fixture: ComponentFixture<ShowPermisosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowPermisosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowPermisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
