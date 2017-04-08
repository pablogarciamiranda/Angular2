import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/users.service";
import { User } from "app/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private service: UsersService;
  private users: User[];

  constructor(userService: UsersService) {
    this.service = userService;

  }

  ngOnInit() {
    this.save();
  } 

  save() {
    this.service.fetchUsers().subscribe(
      users => this.users = users,
      error => console.log('Error fetching news')
    );
  }

}
