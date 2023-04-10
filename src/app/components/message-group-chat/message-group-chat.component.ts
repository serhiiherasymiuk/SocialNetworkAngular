import { Component, Input } from '@angular/core';
import { IGroupChatMessage } from 'src/app/interfaces/groupChatMessage';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-message-group-chat',
  templateUrl: './message-group-chat.component.html',
  styleUrls: ['./message-group-chat.component.scss']
})
export class MessageGroupChatComponent {
  @Input() currentUserId: string = "";
  @Input() messages: IGroupChatMessage[]=[];
  @Input() message: IGroupChatMessage={
    Id: 0,
    Content: '',
    DateSent: new Date,
    SenderId: '',
    GroupChatId: 0, 
  }
  
  
  isEditing: boolean = false;
  editedContent: string = "";
  toggleEditing() {
    this.editedContent = this.message.Content;
    this.isEditing = !this.isEditing;
  }
  savePost() {
    if (this.editedContent.trim() !== '') {
      this.message.Content = this.editedContent;
    }
    this.isEditing = false;
  }
  cancelEditing() {
    this.isEditing = false;
  }
  deletePost() {
    var index = this.messages.indexOf(this.message);
    this.messages.splice(index, 1);
  }
}
