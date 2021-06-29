import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  baseURL = 'https://ajax-course.herokuapp.com'

  constructor(private http: HttpClient) { }

  async getRooms(): Promise<any> {
    return await this.http.get(this.baseURL + '/rooms').toPromise();
  }


  async createRoom(roomParam: string): Promise<any> {
    return await this.http
      .post(this.baseURL + '/rooms', {
        roomName: roomParam,
      })
      .toPromise();
  }
}
