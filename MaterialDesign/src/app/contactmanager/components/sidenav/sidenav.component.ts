import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

 private isSmall : boolean = false;

  constructor(public breakpointObserver: BreakpointObserver) {  
   }

  ngOnInit(){
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe( (state: BreakpointState) => {
      if (state.breakpoints[Breakpoints.XSmall]) {
           this.isSmall = true;
           return;
      }
      this.isSmall = false;
    });
  }
  
  isScreenSmall() : boolean {
    return this.isSmall;
  }

}
