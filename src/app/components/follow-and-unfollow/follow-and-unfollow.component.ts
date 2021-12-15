import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-follow-and-unfollow',
  templateUrl: './follow-and-unfollow.component.html',
  styleUrls: ['./follow-and-unfollow.component.css']
})
export class FollowAndUnfollowComponent implements OnInit {

  @Input() follow = null;

  constructor() { }

  ngOnInit(): void {
  }

}
