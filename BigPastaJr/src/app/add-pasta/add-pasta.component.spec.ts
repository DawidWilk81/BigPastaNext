import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPastaComponent } from './add-pasta.component';

describe('AddPastaComponent', () => {
  let component: AddPastaComponent;
  let fixture: ComponentFixture<AddPastaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPastaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPastaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
