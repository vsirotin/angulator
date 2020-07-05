import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NewContactDialogComponent } from '../new-contact-dialog/new-contact-dialog.component';
import { MatSnackBar, SimpleSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Output() toggleSidenav = new EventEmitter<void>();
  @Output() toggleTheme = new EventEmitter<void>();


  constructor(private dialog : MatDialog,
    private snackBar : MatSnackBar,
    private router :Router) { }

  ngOnInit(): void {
  }

  openAddContactDialog() : void {
    let dialogRef : MatDialogRef<NewContactDialogComponent> = this.dialog.open(NewContactDialogComponent, {
      width : '450px'
    })

    dialogRef.afterClosed().subscribe((result : User)=>{
      console.log("ToolbarComponent dialog closed result=", result)

      if(result){
        this.openSnackBar("Contact added", "Navigate")
        .onAction().subscribe(()=>{
          this.router.navigate(['contactmanager', result.id])
        })
      }
    })
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
