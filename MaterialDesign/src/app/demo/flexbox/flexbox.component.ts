import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flexbox',
  templateUrl: './flexbox.component.html',
  styleUrls: ['./flexbox.component.scss']
})
export class FlexboxComponent implements OnInit {

  constructor() { 
    console.log("FlexboxComponent.constructor")
  }

  ngOnInit(): void {
    console.log("FlexboxComponent.ngOnInit")
  }

}
