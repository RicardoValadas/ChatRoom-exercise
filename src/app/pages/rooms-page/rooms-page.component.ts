import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/apis/rooms.service';

@Component({
  selector: 'app-rooms-page',
  templateUrl: './rooms-page.component.html',
  styleUrls: ['./rooms-page.component.sass']
})
export class RoomsPageComponent implements OnInit {
  roomsArray: any[] = [];
  constructor(private roomsS: RoomsService) { }

  async ngOnInit() {
    const result = await this.roomsS.getRooms();
    this.roomsArray = result.data;
  }
}
