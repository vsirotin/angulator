import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons',
  template: `
    <button mat-button>
    <mat-icon>face</mat-icon>
    </button>
    <mat-checkbox>Do it!</mat-checkbox>
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
