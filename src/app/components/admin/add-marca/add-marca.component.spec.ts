import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarcaComponent } from './add-marca.component';

describe('AddMarcaComponent', () => {
  let component: AddMarcaComponent;
  let fixture: ComponentFixture<AddMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
