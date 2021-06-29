import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoomsService } from 'src/app/apis/rooms.service';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.component.html',
  styleUrls: ['./create-room.component.sass']
})
export class CreateRoomComponent implements OnInit {

  roomValue = '';

  constructor(private roomsS: RoomsService, private router: Router) { }

  ngOnInit(): void { }

  async handleSubmit() {
    const result = await this.roomsS.createRoom(this.roomValue);
    console.log(result);
    if (result.status === 1) {
      this.router.navigate(['/rooms']);
    } else {
      alert(result.data)
    }
  }
}
