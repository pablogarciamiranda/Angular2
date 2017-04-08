import { Injectable, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { New } from "app/new";
import { Http } from "@angular/http";

@Injectable()
export class NewsService {

 private url: string = 'https://node-hnapi.herokuapp.com/news?page=1';

  constructor(private http: Http) {
  }

  fetchNews(): Observable<New[]> {
    return this.http.get(this.url).map(response => this.toNews(response.json()));
  }


  toNews(results: any[]): New[] {
    return results.map((n: any) => <New>{
      id: n.id,
      user: n.user,
      title: n.title,
      comments: n.comments_count,
      points: n.points,
      url: n.url
    });
  }

}
