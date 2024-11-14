import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-dropdown-menu-trigger',
  template: `
    <ui-button variant="outline" (click)="toggleDropdown.emit()" class="flex items-center gap-2">
      <ng-content></ng-content>
    </ui-button>
  `,
})
export class DropdownTriggerComponent {
  @Output() toggleDropdown = new EventEmitter<void>();
}