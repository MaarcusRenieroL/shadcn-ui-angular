import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent {
  @Input() isOpen = false;
  @Output() isOpenChange = new EventEmitter<boolean>();

  toggleDialog() {
    this.isOpen = !this.isOpen;
    this.isOpenChange.emit(this.isOpen);
  }
}
