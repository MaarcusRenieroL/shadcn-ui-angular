import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from './dialog/dialog.module';
import { DropdownModule } from './dropdown/dropdown.module';

@NgModule({
  imports: [CommonModule, DialogModule, DropdownModule],
  exports: [DialogModule, DropdownModule],
})
export class SharedModule {}
