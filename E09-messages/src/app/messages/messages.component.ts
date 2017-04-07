import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Message } from '../message';
import { MessagesService } from '../messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  private service: MessagesService;
  private messages: Message[];

  constructor(route:ActivatedRoute, messageService: MessagesService) {
    this.service = messageService;
  }

  ngOnInit() {

  }




}
