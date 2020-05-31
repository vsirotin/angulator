import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
Ax!
  `,
  styles: [
  ]
})
export class ButtonsComponent implements OnInit {

  constructor() {
    console.log("ButtonsComponent:constructor")
   }

  ngOnInit(): void {
    console.log("ButtonsComponent:ngOnInit")
  }

}
