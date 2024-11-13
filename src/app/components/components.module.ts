import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './global/button/button.component';

@NgModule({
  declarations: [
    ButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
  ]
})

export class ComponentsModule { }