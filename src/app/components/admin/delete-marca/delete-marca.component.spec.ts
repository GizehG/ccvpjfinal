import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMarcaComponent } from './delete-marca.component';

describe('DeleteMarcaComponent', () => {
  let component: DeleteMarcaComponent;
  let fixture: ComponentFixture<DeleteMarcaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteMarcaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteMarcaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
