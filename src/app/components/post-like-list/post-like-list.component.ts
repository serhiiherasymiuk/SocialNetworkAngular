import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-post-like-list',
  templateUrl: './post-like-list.component.html',
  styleUrls: ['./post-like-list.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms linear', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class PostLikeListComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.userService.getLikedUsersByPostId(this.postId).subscribe(res => {
      this.likedUsers = res
      this.likedUsers = this.likedUsers.splice(0, 3)
    })
  }
  likedUsers: IUser[]
  @Input() postId: number;
  @Input() currentUserId: string;
}
