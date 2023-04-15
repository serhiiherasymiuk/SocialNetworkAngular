
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/chat/user-list/user-list.component';
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GroupChatMembersComponent } from './components/group-chat-members/group-chat-members.component';
import { FollowedComponent } from './components/followed/followed.component';
import { GroupChatListComponent } from './components/group-chat/group-chat-list/group-chat-list.component';
import { GroupChatComponent } from './components/group-chat/group-chat.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile/:currentUserId/:accountOwnerId', component: ProfileComponent },
  { path: 'chat/:id', component:  ChatComponent},
  { path: 'login', component:  LoginComponent},
  { path: 'register', component:  RegisterComponent},
  { path: 'users', component:  UserListComponent},
  { path: 'members', component:  GroupChatMembersComponent},
  { path: 'followed', component:  FollowedComponent},
  { path: 'groups', component:  GroupChatListComponent},
  { path: 'group/:groupChatId', component:  GroupChatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
