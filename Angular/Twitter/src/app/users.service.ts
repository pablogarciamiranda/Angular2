import { Injectable } from '@angular/core';
import { User } from './user';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


import { Http } from '@angular/http';

@Injectable()
export class UsersService {
  private url: string = 'https://randomuser.me/api/?results=1';

  constructor(private http: Http) {

  }

  fetchUsers(): Observable<User[]> {
    return this.http.get(this.url).map(response => this.toUsers(response.json().results));
  }


  toUsers(results: any[]): User[] {
    return results.map((u: any) => <User>{
      firstname: u.name.first,
      lastname: u.name.last,
      email: u.email,
      imgUrl: u.picture.medium,
      phone: u.phone
    });
  }

}
