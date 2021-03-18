import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './buttons/buttons.component';
import { EditorComponent } from './editor/editor.component';
import { FlexboxComponent } from './flexbox/flexbox.component';


const routes: Routes = [
  { path: 'buttons', component: ButtonsComponent },
  { path: 'flexbox', component: FlexboxComponent },
  { path: 'editor', component: EditorComponent },
  { path: '**', redirectTo: 'editor'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule { }
