import { Injectable } from '@angular/core';
import { Message } from './message';

@Injectable()
export class MessagesService {

  
  private messages: Message[] = new Array<Message>();

  constructor() { 
    this.messages.push(new Message(1, 'Message 1', 'Testing'));
    this.messages.push(new Message(2, 'Message 2', 'Testing'));
    this.messages.push(new Message(3, 'Message 3', 'Testing'));
  }

  findAll(): Message[]{
    return this.messages;  
  }

}
