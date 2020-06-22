import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ContactManagerAppComponent } from './contactmanager/contact-manager-app/contact-manager-app.component';




const routes : Routes = [
  { path : 'contactmanager', loadChildren: ()=>import('./contactmanager/contactmanager.module').then(m=>m.ContactmanagerModule) },
 // { path : 'contactmanager', component : ContactManagerAppComponent, loadChildren: ()=>import('./contactmanager/contactmanager.module').then(m=>m.ContactmanagerModule) },
  { path : 'demo', loadChildren: ()=>import('./demo/demo.module').then(m=>m.DemoModule) },
  { path : '**', redirectTo : 'contactmanager' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
