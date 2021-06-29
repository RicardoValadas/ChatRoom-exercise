import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/apis/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  usersArray: any[] = [];

  constructor(private usersS: UsersService) { }

  async ngOnInit() {
    const result = await this.usersS.getUsers();
    console.log(result);
    this.usersArray = result.data;
  }

}
