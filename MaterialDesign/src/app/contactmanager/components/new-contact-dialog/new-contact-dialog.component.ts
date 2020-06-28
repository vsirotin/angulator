import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from '../../models/user';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-new-contact-dialog',
  templateUrl: './new-contact-dialog.component.html',
  styleUrls: ['./new-contact-dialog.component.scss']
})
export class NewContactDialogComponent implements OnInit {

  name : FormControl = new FormControl('name', [Validators.required]);
  user : User
  constructor(private dialogRef : MatDialogRef<NewContactDialogComponent>,
    private userService : UserService) { }

  ngOnInit(): void {
    this.user = new User()
  }

  save() {
    this.userService.addUser(this.user).then(user=>{
      this.dialogRef.close(this.user)
    })
   
  }

  dismiss() {
    this.dialogRef.close(null)
  }

  getErrorMessage() : string {
    return "Please set name"
  }

}
