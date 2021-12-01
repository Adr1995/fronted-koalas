import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCategoriesComponent } from './profile-categories.component';

describe('ProfileCategoriesComponent', () => {
  let component: ProfileCategoriesComponent;
  let fixture: ComponentFixture<ProfileCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
