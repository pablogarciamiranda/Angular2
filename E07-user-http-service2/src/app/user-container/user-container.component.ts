import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from './User';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {

  private service: UserService;
  private users: User[];

  constructor(userService: UserService) {
    this.service = userService;

  }

  ngOnInit() {
    this.update();
  }

  update() {
    this.service.fetchUsers().subscribe(
      users => this.users = users,
      error => console.log('Error fetching users')
    );
  }

}
