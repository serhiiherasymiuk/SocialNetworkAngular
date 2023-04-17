import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IFollow } from 'src/app/interfaces/follow';
import { IUser } from 'src/app/interfaces/user';
import { FollowService } from 'src/app/services/follow.service';
import { UserService } from 'src/app/services/user.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  isCurrentUserIsOwner: boolean;
  currentUserId: string;
  accountOwnerId: string;
  accountOwner: IUser = {
    id: '',
    userName: '',
    displayUsername: '',
    email: '',
    dateRegistrated: new Date,
    posts: [],
    comments: [],
    postLikes: [],
    commentLikes: [],
    followers: [],
    followedUsers: [],
    individualChats: [],
    groupChats: [],
    individualChatMessages: [],
    groupChatMessages: [],
    notifications: []
  };
  showUserPosts: boolean = true;
  showUserComments: boolean;
  showUserLikes: boolean;
  isFollowed: boolean = false;
  followers: IFollow[] = [];
  following: IFollow[] = [];
  constructor(private location: Location, private route: ActivatedRoute, private userService: UserService, private followService: FollowService) { }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currentUserId = params['currentUserId'];
      this.accountOwnerId = params['accountOwnerId'];
    });
    if (this.currentUserId == this.accountOwnerId)
      this.isCurrentUserIsOwner = true;
    this.userService.getById(this.accountOwnerId).subscribe(res => this.accountOwner = res)
    this.followService.getByFollowedUserId(this.accountOwnerId).subscribe(res => { 
      this.followers = res;
      if (!this.isCurrentUserIsOwner) {
        this.isFollowed = this.followers.some(followers => followers.followerId == this.currentUserId);
      }
    })
    this.followService.getByFollowerId(this.accountOwnerId).subscribe(res => this.following = res )
  }
  goBack(): void {
    this.location.back();
  }
  toggleFollow(): void {
    if (this.isFollowed) {
      const follow = this.followers.find(follow => follow.followerId == this.currentUserId);
      if (follow) {
        this.followService.delete(follow.id).subscribe(res => {
          this.followService.getByFollowedUserId(this.accountOwnerId).subscribe(res => { this.followers = res })
        });
      }
    } 
    else {
      const newFollow: IFollow = {
        id: 0,
        followerId: this.currentUserId,
        followedUserId: this.accountOwnerId,
      };
      this.followService.create(newFollow).subscribe(res => {
        this.followers.push(res);
        this.followService.getByFollowedUserId(this.accountOwnerId).subscribe(res => { this.followers = res })
      });
    }
    this.isFollowed = !this.isFollowed;
  }
  showPosts(): void {
    this.showUserPosts = true;
    this.showUserComments = false;
    this.showUserLikes = false;
  }
  showComments(): void {
    this.showUserPosts = false;
    this.showUserComments = true;
    this.showUserLikes = false;
  }
  showLikes(): void {
    this.showUserPosts = false;
    this.showUserComments = false;
    this.showUserLikes = true;
  }
}
