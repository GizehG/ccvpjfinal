import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePermisoComponent } from './delete-permiso.component';

describe('DeletePermisoComponent', () => {
  let component: DeletePermisoComponent;
  let fixture: ComponentFixture<DeletePermisoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletePermisoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletePermisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
