import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowAndUnfollowComponent } from './follow-and-unfollow.component';

describe('FollowAndUnfollowComponent', () => {
  let component: FollowAndUnfollowComponent;
  let fixture: ComponentFixture<FollowAndUnfollowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FollowAndUnfollowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowAndUnfollowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
