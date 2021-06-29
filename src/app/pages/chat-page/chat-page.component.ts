import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from 'src/app/apis/messages.service';
import { UsersService } from 'src/app/apis/users.service';


@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.sass']
})
export class ChatPageComponent implements OnInit {

  messagesArray: any[] = [];
  usersArray: any[] = [];
  roomsArray: any[] = [];

  constructor(private messagesS: UsersService, private url: ActivatedRoute, private router: Router, private getmessagesS: MessagesService) { }
  roomId = ''

  async ngOnInit() {
    this.roomId = this.url.snapshot.params['roomId'];
    const result = await this.getmessagesS.getMessages(this.roomId);
    console.log(result);
    this.messagesArray = result.data;
    const UsersResult = await this.messagesS.getUsers();
    this.usersArray = UsersResult.data;
  }
  getUsersDetails(givenId: number) {
    return this.usersArray.find((u) => u.id === givenId);
  }
  userMsg = ''
  async handleSubmit() {
    alert('submitted');
    const msgValue = {
      hash: localStorage.getItem('hash'),
      message: this.userMsg,
    };
    this.getmessagesS.sendMessage(this.roomId, msgValue)
    this.userMsg = '';
  }

}
