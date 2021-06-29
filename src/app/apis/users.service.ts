import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  baseURL = 'https://ajax-course.herokuapp.com';

  constructor(private http: HttpClient) { }
  async getUsers(): Promise<any> {
    return await this.http.get(this.baseURL + '/users').toPromise();
  }
  async registerUser(user: any): Promise<any> {
    return await this.http.post(this.baseURL + '/users', user).toPromise();
  }

  async loginUser(user: any): Promise<any> {
    return await this.http.post(this.baseURL + '/users', user).toPromise();
  }
}

