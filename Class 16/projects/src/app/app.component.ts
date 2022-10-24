import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projects';

width:number = 200;
height:number = 200;

dogs:any = [
{
  name: "Joe",
  age: 69
},
{
  name: "doge",
  age: 12
},
{
  name: "orange",
  age: 21
}
]

  onResizeImage(event:any) {
    console.log(event.srcElement.value);

    const userInput = event.srcElement.value;
    this.width = userInput;
    this.height = userInput;
  }
}
