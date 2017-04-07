import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MessageComponent } from './message/message.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';
import { MessagesService } from './messages.service';


const routes: Routes = [
  {
    path: 'profile', component: ProfileComponent
  },
  {
    path: 'messages', component: MessagesComponent
  },
  {
    path: 'messages/:id', component: MessageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [  ]
})
export class AppRoutingModule { }
