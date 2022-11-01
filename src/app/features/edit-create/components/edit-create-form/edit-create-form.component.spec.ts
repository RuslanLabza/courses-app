import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCreateFormComponent } from './edit-create-form.component';

describe('EditCreateFormComponent', () => {
  let component: EditCreateFormComponent;
  let fixture: ComponentFixture<EditCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
