import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerAppComponent } from './contact-manager-app/contact-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MaterialModule } from '../shared/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule} from '@angular/router'
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './components/notes/notes.component';
import { NewContactDialogComponent } from './components/new-contact-dialog/new-contact-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';



const routes : Routes = [
  { path : '', component: ContactManagerAppComponent,
    children: [
      { path: ':id', component : MainContentComponent },
      { path: '', component : MainContentComponent }
    ] },
  { path : '**', redirectTo : '' }
];

@NgModule({
  declarations: [
    ContactManagerAppComponent, 
    ToolbarComponent,  
    MainContentComponent, 
    SidenavComponent, NotesComponent, NewContactDialogComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatNativeDateModule, 
    RouterModule.forChild(routes)
  ],
  providers : [
    UserService
  ]
})
export class ContactmanagerModule { }
