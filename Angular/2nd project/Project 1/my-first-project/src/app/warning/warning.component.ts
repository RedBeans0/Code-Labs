import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template: `
  <p>This is a danger!</p>
  `,
  styles: [
`
p {
 padding: 20px;
 background-color: red;
 border: 1px solid darkred;
}
`
  ]
})
export class WarningComponent {

  constructor() { }

  ngOnInit(): void {
  }

}
