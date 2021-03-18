import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material/material.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DemoRoutingModule } from './demo-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import { FlexboxComponent } from './flexbox/flexbox.component';
import { EditorComponent } from './editor/editor.component';



@NgModule({
  declarations: [ButtonsComponent, FlexboxComponent, EditorComponent],
  imports: [
    CommonModule,
    DemoRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule
  ]
})
export class DemoModule { }
