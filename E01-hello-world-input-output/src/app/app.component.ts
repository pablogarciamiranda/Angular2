import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Pablo';
  surname = 'García';

  mouseover(){
    console.log('Imprimiendo valores ' + this.name + this.surname);
  }
}
