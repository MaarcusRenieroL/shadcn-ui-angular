import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogModule } from './dialog/dialog.module';

@NgModule({
  imports: [CommonModule, DialogModule],
  exports: [DialogModule],
})
export class SharedModule {}
