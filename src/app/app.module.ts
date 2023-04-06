import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './components/app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostListComponent } from './components/post-list/post-list.component';
import { CommentListComponent } from './components/comment-list/comment-list.component';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { PostLikeComponent } from './components/post-like/post-like.component';
import { CommentLikeComponent } from './components/comment-like/comment-like.component';;

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MatChipsModule } from '@angular/material/chips';
import { MaterialModule } from './material/material.module';
import { GroupChatComponent } from './components/group-chat/group-chat.component';
import { MessageGroupChatComponent } from './components/message-group-chat/message-group-chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    CommentListComponent,
    PostComponent,
    CommentComponent,
    PostLikeComponent,
    CommentLikeComponent,
    GroupChatComponent,
    MessageGroupChatComponent,
    HomeComponent,
    SideMenuComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatChipsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
