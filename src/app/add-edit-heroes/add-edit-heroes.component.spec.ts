import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditHeroesComponent } from './add-edit-heroes.component';

describe('AddEditHeroesComponent', () => {
  let component: AddEditHeroesComponent;
  let fixture: ComponentFixture<AddEditHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEditHeroesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEditHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
