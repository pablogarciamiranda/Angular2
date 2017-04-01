import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';
import 'rxjs/Rx';

@Injectable()
export class UserService {

  private usersUrl = 'https://randomuser.me/api/?results=5';

  constructor(private http: Http) {

  }

    getUsers(): Observable<User[]> {
      return this.http.get(this.usersUrl).map(this.extractData);
    }

    extractData(res: Response): User[]{
      let result : User[];
      let body = res.json()["results"];
      for (let element in body){
        result.push(new User
          (element["name"]["first"],
          element["name"]["last"],
          element["email"],
          element["imgUrl"],
          element["phone"]));
      }
      return result;
    }
}
