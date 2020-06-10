import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

 private isSmall : boolean = false;

 users: Observable<User[]>;

  constructor(
    public breakpointObserver: BreakpointObserver, 
    private userService : UserService,
    private router :Router) {  
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

    this.users = this.userService.users;
    this.userService.loadAll();
    this.users.subscribe(data=> {
      console.log("SidenavComponent.ngOnInit data=", data);
  //    if(data.length > 0)this.router.navigate(['/contactmanager', data[0].id]);
      
    })
  }
  
  isScreenSmall() : boolean {
    return this.isSmall;
  }

}
