import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Beans';
  width:number = 100

  onToggleButton(){
    this.title = "change title"

    users = {
      username: "Joe123"
    },
    {
      username: "Beans"
    },
    {
      username: "Jokes"
    }
  }
}
