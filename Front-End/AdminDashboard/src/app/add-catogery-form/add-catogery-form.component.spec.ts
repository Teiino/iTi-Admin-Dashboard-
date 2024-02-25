import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCatogeryFormComponent } from './add-catogery-form.component';

describe('AddCatogeryFormComponent', () => {
  let component: AddCatogeryFormComponent;
  let fixture: ComponentFixture<AddCatogeryFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddCatogeryFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddCatogeryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
