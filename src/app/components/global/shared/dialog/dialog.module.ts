import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog/dialog.component';
import { DialogHeaderComponent } from './dialog-header/dialog-header.component';
import { DialogFooterComponent } from './dialog-footer/dialog-footer.component';
import { DialogTriggerComponent } from './dialog-trigger/dialog-trigger.component';
import { DialogOverlayComponent } from './dialog-overlay/dialog-overlay.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { DialogTitleComponent } from './dialog-title/dialog-title.component';
import { DialogDescriptionComponent } from './dialog-description/dialog-description.component';
import { BaseModule } from '../../base/base.module';

@NgModule({
  declarations: [
    DialogComponent,
    DialogHeaderComponent,
    DialogFooterComponent,
    DialogTriggerComponent,
    DialogOverlayComponent,
    DialogContentComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
  ],
  imports: [CommonModule, BaseModule],
  exports: [
    DialogComponent,
    DialogHeaderComponent,
    DialogFooterComponent,
    DialogTriggerComponent,
    DialogOverlayComponent,
    DialogContentComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
  ],
})
export class DialogModule {}
