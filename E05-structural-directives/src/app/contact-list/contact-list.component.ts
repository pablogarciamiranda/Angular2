import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  private contacts: Contact[] = new Array<Contact>();
  visible: boolean;
  table: string;
  name: string;
  surname: string;
  telephone: number;
  telephoneDelete:number;


  private service: ContactService;

  constructor(contactService : ContactService){
    this.visible = true;
    this.service = contactService;
  }

  ngOnInit() {
  }

  showContacts(){
    this.visible = !this.visible;
    this.table = this.visible ? 'visible' : 'hidden';
  }




}
