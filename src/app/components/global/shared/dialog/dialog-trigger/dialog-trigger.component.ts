import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-dialog-trigger',
  template: `<ui-button (click)="openDialog.emit()">Open Dialog</ui-button>`,
})
export class DialogTriggerComponent {
  @Output() openDialog = new EventEmitter<void>();
}
