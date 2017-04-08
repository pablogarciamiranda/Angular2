import { Component, OnInit } from '@angular/core';
import { NewsService } from "app/news.service";
import { New } from "app/new";
import { UsersService } from "app/users.service";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  private service: NewsService;
  private news: New[];

  constructor(newsService: NewsService) {
    this.service = newsService;
  }

  ngOnInit() {
    this.save();
  }

  save() {
    this.service.fetchNews().subscribe(
      news => this.news = news,
      error => console.log('Error fetching news')
    );
  }

  deleteNew(newId:number){
    for (let i=0; i< this.news.length; i++){
      if (newId == this.news[i].id){
         this.news.splice(i,1);
      }
    }
  }


}