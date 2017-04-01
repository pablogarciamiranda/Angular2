import { Injectable } from '@angular/core';
import { Contact } from './contact';

@Injectable()
export class ContactService {


  private contacts: Contact[] = new Array<Contact>();

  constructor() { 
    this.contacts.push(new Contact('pablo', 'garcia', 234123112));
    this.contacts.push(new Contact('fernando', 'freije', 234122312));
    this.contacts.push(new Contact('nico', 'pascual', 23412323412));
  }

  deleteContact(contactNumber:number){
    for (let i=0; i< this.contacts.length; i++){
      if (contactNumber == this.contacts[i].telefono){
         this.contacts.splice(i,1);
      }
    }
  }

  addContact(name:string, surname:string, telephone:number){
    this.contacts.push(new Contact(name,surname,telephone));
  }

}
