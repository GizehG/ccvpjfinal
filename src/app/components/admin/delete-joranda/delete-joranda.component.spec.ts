import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteJorandaComponent } from './delete-joranda.component';

describe('DeleteJorandaComponent', () => {
  let component: DeleteJorandaComponent;
  let fixture: ComponentFixture<DeleteJorandaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteJorandaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteJorandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
