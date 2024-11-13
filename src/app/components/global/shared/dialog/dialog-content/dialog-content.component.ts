import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-dialog-content',
  templateUrl: './dialog-content.component.html',
})
export class DialogContentComponent {
  @Output() closeDialog = new EventEmitter<void>();
}
