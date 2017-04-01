import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  private users: User[] = new Array<User>();
  private service: UserService;

  constructor(userService: UserService) {
    this.service = userService; 
   }

  ngOnInit() {
  }

}
