import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactManagerAppComponent } from './contact-manager-app/contact-manager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Routes, RouterModule} from '@angular/router'



const routes : Routes = [
  { path : '', component: ContactManagerAppComponent,
    children: [
      { path: '', component : MainContentComponent }
    ] },

  { path : '**', redirectTo : '' }
];

@NgModule({
  declarations: [ContactManagerAppComponent, ToolbarComponent,  MainContentComponent, SidenavComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class ContactmanagerModule { }