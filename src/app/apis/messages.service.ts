import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  baseURL = 'https://ajax-course.herokuapp.com';

  constructor(private http: HttpClient) { }
  async getMessages(id: string): Promise<any> {
    return await this.http.get(this.baseURL + '/messages/' + id).toPromise();
  }

  async sendMessage(id: string, data: any) {
    return await this.http
      .post(this.baseURL + '/messages/' + id, data)
      .toPromise();
  }
}
