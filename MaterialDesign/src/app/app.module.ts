import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsComponent } from './demo/buttons/buttons.component';
import { Demo2Component } from './demo2/demo2/demo2.component';


const routes : Routes = [
  { path : 'demo', loadChildren: ()=>import('./demo/demo.module').then(m=>m.DemoModule) },
  { path : '**', redirectTo : 'demo' }
 // { path : '', component: Demo2Component},
  //{ path : 'demo21', redirectTo : 'demo2' }
];

@NgModule({
  declarations: [
    AppComponent,
    Demo2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
