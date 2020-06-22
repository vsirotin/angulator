import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  user : User;
  constructor(
    private route : ActivatedRoute, 
    private userServuce: UserService) { 
      console.log("MainContentComponent.constructor");
    }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      let id = params['id'];
      console.log("MainContentComponent.ngOnInit params=", params)
      console.log("MainContentComponent.ngOnInit id=", id)
      //if(!id)id = 1;
      this.user = this.userServuce.userById(id);
      
      this.userServuce.users.subscribe(users => {
        if(users.length ==0)return;
        this.user = this.userServuce.userById(id);
      });
    });
  }

}
