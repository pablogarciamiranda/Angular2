import { Component, OnInit } from '@angular/core';
import { Message } from '../message'
import { MessagesService } from '../messages.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  private message: Message;
  private sub: any;

  constructor(private messageService: MessagesService, private route: ActivatedRoute) {

   }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = Number.parseInt(params['id']);
      this.message = this.messageService.findAll()[id];
    });
  }
  

}
