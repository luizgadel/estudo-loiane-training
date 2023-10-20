import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BindingPlaygroundComponent } from './binding-playground/playground.component';



@NgModule({
  declarations: [
    BindingPlaygroundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BindingPlaygroundComponent
  ]
})
export class BindingPlaygroundModule { }
